// Funcion para compartir un post en timeline
 $(document).ready(function(){
 $("#share-btn").click(shareStory);


 function shareStory (){

     /*Creando elementos contenedores y agregandoles una clase*/
   var $post = $('<div />').addClass('row post');
   var $imgProfileBox = $('<div />').addClass('col-2');
   var $imgProfile = $("<img/>");
   var $textPostBox = $('<div />').addClass('col-10');
   var $userName = $('<p/>');
   var $postContent = $('<p/>');


     /*Agregando texto a elementos creados o cambiando atributos*/
   $postContent.text($("textarea").val());

     /*Linkeando elementos entre sí*/
   $imgProfileBox.append($imgProfile);
   $textPostBox.append($userName);
   $textPostBox.append($postContent);
   $post.append($imgProfileBox);
   $post.append($textPostBox);
   $('.posts-timeline').append($post);

     /*Limpiando caja*/
   $("textarea" ).val("");
 }

});

// Splash view
 $(document).ready(function() {
   setTimeout(function() {
       $(".container-1").fadeOut(1500);
   },1000);
});


$(document).ready(function() {
   setTimeout(function() {
       $(".container-2").fadeIn(1500);
   },1000);
});

//Carousel
$('.carousel').carousel({
 interval: 2000
})
