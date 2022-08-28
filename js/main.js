var typed = new Typed("#home .container h1 span", {
  strings: ["Developer", "Designer"],
  typeSpeed: 50,
  backSpeed: 50,
  startDelay: 500,
  backDelay: 3000,
  shuffle: true,
  smartBackspace: false,
  loop: true,
});
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".navbar-nav a");
$("#home").css("paddingTop", $(".navbar").innerHeight() + 15);
$("#home").css("paddingTop", $(".navbar").innerHeight());

$(".content").mousemove(function (e) {
  $(".cursor").css("display", "block");
  $(".cursor").css("top", e.clientY - $(this).offset().top);
  $(".cursor").css("left", e.clientX - $(this).offset().left);
});
$(".content").mouseleave(function () {
  $(".cursor").css("display", "none");
});

$(window).scroll(function () {
  const winTop = $(window).scrollTop();
  if (winTop > $("header").innerHeight() - 50) {
    $(".navbar").addClass("shadow-lg");
  } else {
    $(".navbar").removeClass("shadow-lg");
  }

  let current = "";
  sections.forEach((e) => {
    if (winTop >= e.offsetTop - $(".navbar").innerHeight()) {
      current = "#" + e.getAttribute("id");
    }
  });
  links.forEach((e) => {
    if (e.getAttribute("href") == current) {
      $(e).addClass("active");
      $(e).parent().siblings().children().removeClass("active");
    }
  });

  if (winTop > 500) {
    $("#btnUp").css("display", "flex");
  }
  else{
    $("#btnUp").css("display", "none");
  }
});

$("#projects .card").mouseenter(function (e) {
  console.log($(e.target).parent().siblings().children());
});

$("#btnUp").click(function (e) {
  $(window).scrollTop(0) ; 
});

$('.links .fas').click(function (e) { 
  if ($('.links').css('left') < '0px') {
    console.log(0);
    $('.links').css('left' , '0px') ;
  }else{
    console.log(1);
    $('.links').css('left' , '-45px') ;
  }
  
});