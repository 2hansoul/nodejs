const express = require('express');
const router = express.Router();

//루트페이지 
router.get('/' , function(req,res){

    
    res.render('main');
  
  });

module.exports = router; //모듈 내보내기