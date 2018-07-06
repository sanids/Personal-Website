 /* global $ */ 
 
 $(document).ready(function(){
 
 $(".icon").click(function() {
  $(this).toggleClass("open")
 });
 
 $('.icon').click(function(){
    $('.main-nav').animate({width: 'toggle'});
});
 
  $('.has-sub').click(function(){
    $('.subs').slideToggle();
});
 
 
 
 $('.has-sub').click(function(){
  
  $(this).toggleClass('tap');
 })


    
});