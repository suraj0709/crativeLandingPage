

$(".scroll").click(function(e){
  e.preventDefault();
  $("body,html").animate({
    scrollTop: $(this.hash).offset().top
  },1000);
})

$(".toggle-button").click(function(){
  $(".nav__links").toggleClass("active");
});