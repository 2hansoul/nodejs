const express = require('express');
const router = express.Router();


router.post('/submit', function(req, res) {
    var id = req.body.id;
    var pwd = req.body.pwd;
    var title = 'Post page';
    console.log("id : ", id);
    console.log("pwd : ", pwd);
    res.send(
        `<h1>${title}</h1>
        <p>����� ���̵�� : ${id}</p>
        <p>����� ��й�ȣ�� : ${pwd}</p>`
    )
});

module.exports = router; //��� ��������