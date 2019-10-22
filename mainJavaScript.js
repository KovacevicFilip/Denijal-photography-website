$('#videoCarousel').carousel({
   interval: 0
});
$(".galerija-nav").click(function() {
   var x = $(".galerija").position();
   x = x.top;
   window.scrollTo({
     top: x,
     left: 0,
     behavior: 'smooth'
  });
});
$(".video-nav").click(function() {
   var x = $(".video").position();
   x = x.top;
   window.scrollTo({
     top: x,
     left: 0,
     behavior: 'smooth'
  });
});
$(".book-nav").click(function() {
   var x = $(".book").position();
   x = x.top;
   window.scrollTo({
     top: x,
     left: 0,
     behavior: 'smooth'
  });
});
$(".kontakt-nav").click(function() {
   var x = $(".contactForm").position();
   x = x.top;
   window.scrollTo({
     top: x + 60,
     left: 0,
     behavior: 'smooth'
  });
});
$(".pocetna-nav-footer").click(function() {
   window.scrollTo({
     top: 0,
     left: 0,
     behavior: 'smooth'
  });
});
$(".galerija-nav-footer").click(function() {
   var x = $(".galerija").position();
   x = x.top;
   window.scrollTo({
     top: x,
     left: 0,
     behavior: 'smooth'
  });
});
$(".video-nav-footer").click(function() {
   var x = $(".video").position();
   x = x.top;
   window.scrollTo({
     top: x,
     left: 0,
     behavior: 'smooth'
  });
});
$(".book-nav-footer").click(function() {
   var x = $(".book").position();
   x = x.top;
   window.scrollTo({
     top: x,
     left: 0,
     behavior: 'smooth'
  });
});
$(".kontakt-nav-footer").click(function() {
   var x = $(".contactForm").position();
   x = x.top;
   window.scrollTo({
     top: x+60,
     left: 0,
     behavior: 'smooth'
  });
});
var x = document.getElementsByClassName("contactForm");
console.log(x[0]);
