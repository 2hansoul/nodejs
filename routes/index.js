const express = require('express');
const router = express.Router();

//��Ʈ������ 
router.get('/' , function(req,res){

    
    res.render('main');
  
  });

module.exports = router; //��� ��������