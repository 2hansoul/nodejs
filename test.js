router.post("/register", (req, res)=> {

    const request = new mssql.Request(db);

    let recommenderNum = req.body.recommenderIdx;

    console.log(recommenderNum);

    if(recommenderNum == undefined)

        recommenderNum = "NULL";



   /* const query = `declare @parentFlag tinyint = 0;

        select @parentFlag = IDX from INSTA_MemberList where IDX = ${recommenderNum}; 

        insert into MSCS_AppMember..INSTA_MemberList(nID, nPW, nName, nPhoneNum, nEmail, nUsertype, nflag, nParentIDX, RegDate)

        values('${req.body.id}', '${req.body.pwd}', '${req.body.name}', '${req.body.phoneNum}', '${req.body.id}', 0, 

            CASE WHEN @parentFlag = 2 or @parentFlag = 3 THEN 3 ELSE 0,

            recommenderNum, convert(varchar(20),getdate(),120));`;

*/

    const option = {

        algorithm : 'HS256',

        expiresIn : '7d'

    };



    const token = jwt.sign({

        email: req.body.id,

        pwd: req.body.pwd,

    }, req.body.pwd, option);

    const query = `declare @parentFlag int = 0;

select @parentFlag = nflag from MSCS_AppMember..INSTA_MemberList where IDX = ${recommenderNum}; 

insert into MSCS_AppMember..INSTA_MemberList(nID, nPW, nName, nPhoneNum, nEmail, nUsertype, nflag, nParentIDX, RegDate, JWToken)

values('${req.body.id}', '${req.body.pwd}', '${req.body.name}', '${req.body.phoneNum}', '${req.body.id}', 0, 

CASE WHEN @parentFlag = 2 or @parentFlag = 3 THEN 3 ELSE 0 END,

${recommenderNum}, convert(varchar(20),getdate(),120), '${token}');`;

    console.log("���� - " + req.body.id);



    request.query(query, function(err, recordSet) {

        if(err)

            res.send({"result":-1, "error":err.message});

        else {

            const query = `SELECT IDX FROM INSTA_MemberList WHERE nID = '${req.body.id}';`;

            request.query(query, (err, recordSet)=>{

                let updateQuery = `insert into MSCS_AppMember..INSTA_LikeLog(INMLIDX, LikeURL, LikeNum, LikeComPlNum, 

                                LikeType, nSpeed, LikeComplete, CompleteDate, FeedNum, BuyDate, Point, OrderID, ServiceName, PrevPoint, service_num, bonus_text) 

                                values(${recordSet.recordsets[0][0].IDX}, 'TEMP', 0, 

                                ${0}, ${50}, 4, 1, NULL, ${0}

                                , convert(varchar(20),getdate(),120), ${50000}, ${0}, '${0}'

                                , ${0}, ${0}, '${'��� �ο�'}');`;

                try {

                    request.query(updateQuery);

                    console.log('���� �̺�Ʈ - �ǹ� ��� �ο�');

                }catch(e) {

                    console.log('���Ե�޺ο� �� ���� - '+e.message);

                }



                res.send({ "result": 1 });

            });

        }

    });

});



router.post("/pwd", function(req, res) { // ��й�ȣ ����

    const token = getToken(req, res);

    if(token == null)

        return;

    else {

        const request = new mssql.Request(db);

        let query = "update MSCS_AppMember..INSTA_MemberList set nPW = '" + req.body.pwd + "' where JWToken = '" + token + "';";

        request.query(query, (err, recordSet)=> {

            if(err) 

                res.send({"result":-1, "error":err.message});

            else 

                res.send({"result":1});

        });

    }

});