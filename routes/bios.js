var express =require('express');
var router = express.Router();

var levy ={
  name: 'Levy',
  bio: 'I dont really know what to say here. So just leave me alone.lol :-)',
  url : '/assets/images/levy.jpg'
};

var leya ={
  name: 'Leya',
  bio: 'Student at Prime Digital Academy. You guys need to put something here. :-)',
  url: 'assets/images/Leya.jpg'
};

var matt = {
  name: 'Matt',
  bio: 'Stud at Prime Digital Academy.You guys need to put something here. :-)',
  url:'assets/images/Matt.jpg'
};


var member =[levy, leya ,matt];

router.get('/', function(req,res){
  console.log(member);
   res.send(member);

});

module.exports = router;
