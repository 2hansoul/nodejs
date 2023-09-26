const express = require('express');
const router = express.Router(); //express모듈에 라우터 함수 사용

router.get('/', (req, res) => {
    res.send(
        `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Node.js Test</title>
            </head>
            <body>
                <div>
                    <form action="/submit" method="post">
                        <input type="text" name="id" placeholder="아이디">
                        <p><input type="text" name="pwd" placeholder="비밀번호"></p>
                        <P><input type="submit" , value="로그인"></P>
                    </form>
                    <div>
            </body>
            </html>`
    )
});
router.post('/submit', (req, res) => {
    // POST 요청에서는 클라이언트로부터 전달된 데이터를 처리
    const userId = req.body.id; // "id"는 폼 필드의 name 속성 값
    const userPwd = req.body.pwd; // "pwd"는 폼 필드의 name 속성 값

    // 여기에서 userId와 userPwd를 사용하여 원하는 작업 수행

    // 예를 들어, 받은 데이터를 응답으로 보내는 경우
    res.send(`입력받은 아이디: ${userId}, 입력받은 비밀번호: ${userPwd}`);
});

module.exports = router; //모듈 내보내기