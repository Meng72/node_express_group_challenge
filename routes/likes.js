var express = require('express');
var router =express.Router();


 var levyLikes=0;
 var leyaLikes=0;
 var mattLikes=0;

 var members = {levy:levyLikes,leya:leyaLikes,matt:mattLikes}

router.post('/levy', function(req, res){
  levyLikes++;
  members.levy = levyLikes;
 res.sendStatus(200);
});

router.post('/leya', function(req, res){
  leyaLikes++;
  members.leya = leyaLikes;
  res.sendStatus(200);

});

router.post('/matt', function(req, res){
  mattLikes++;
  members.matt = mattLikes;
  res.sendStatus(200);

});


  router.get('/', function(req, res){
  res.send(members);
  console.log(members);
});



module.exports = router;
