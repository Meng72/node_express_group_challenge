$(function(){

$.ajax({
  type:'GET',
  url: '/bios',
  success: function(bios){

        bios.forEach(function(member){
        var $list =$('<div class="memberContainer"></div>');
        $list.append('<img src="'+ member.url + '">');
        $list.append('<p>'+ member.name + '</p>');
        $list.append('<p>' +member.bio + '</p>');
        $list.append('<button class="likeButton" data-name="' + member.name +'"></button><span id="'+ member.name +'"> 0</span>');
        $('.info').append($list);
        }); //End of forEach function


        $('.likeButton').on('click', function(){

            var nameData = $(this).data('name');
            $.ajax({
              type: 'POST',
              url: '/likes/'+ nameData,
              success: getLikes

            }); // End of post ajax


        }); //End of event listener

  } //End of success function

}); //End of AJAX



}); //End of Document ready

function getLikes(){
 $.ajax({
 type:'GET',
 url:'/likes',
 success: function(members){
console.log(members);

$('#Levy').text(' ' + members.levy);
$('#Leya').text(' ' + members.leya);
$('#Matt').text(' ' + members.matt);

 }
}); //End of getLikes ajax
} //End of getLikes function
