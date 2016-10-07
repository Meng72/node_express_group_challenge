var express =require('express');
var router = express.Router();

var levy ={
  name: 'Levy',
  bio: 'I dont really know what to say here. So just leave me alone.lol :-)',
  url : '/assets/images/levy.jpg'
};

var leya ={
  name: 'Leya',
  bio: 'Rhobot at Prime Digital Academy trying to take over the world. Never give up! ',
  url: 'assets/images/Leya.jpg'
};

var matt = {
  name: 'Matt',
  bio: 'Student at Prime Digital Academy. Stud outside of Prime Digital Academy :-)',
  url:'assets/images/Matt.jpg'
};


var member =[levy, leya ,matt];

router.get('/', function(req,res){
  console.log(member);
   res.send(member);

});

module.exports = router;
