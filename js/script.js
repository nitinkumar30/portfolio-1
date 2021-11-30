$(".navBtn").click(()=> {
  $(".navBtn").toggleClass("act");
  $(".sidebar").toggleClass("active");
  $(".sidebar ul li a").toggleClass("animated fadeInUp");
  $(".sidebar h3, .social").toggleClass("animated bounceInUp");
});

document.onclick = ((e)=> {
  if (e.target.id !== 'btn' && e.target.id !== 'nav') {
    $(".navBtn").removeClass("act");
    $(".sidebar").removeClass("active");
  }
})
var typed = new Typed('#text', {
  strings: ['Nitin Kumar',
    'Web Developer',
    'Python Developer',
    'Computer Teacher(Freelancer)',
    'Hacktivist'],
  typeSpeed: 40,
  backSpeed: 50,
  loop: true
})

$(window).on('scroll', ()=> {
  if (window.scrollY > 220) {
    $(".top-btn").addClass("tb");
  } else {
    $(".top-btn").removeClass("tb")
  }
});

$(".top-btn").click(()=> {
  $("html,body").animate({
    scrollTop: 0
  }, 'slow')
});

//ScrollReveal animation
const sr = ScrollReveal({
  distance: '100px'
})
ScrollReveal().reveal('.card', {
  duration: 2000,
  origin: 'bottom',
  reset: true
});
ScrollReveal().reveal('.skills', {
  duration: 2000,
  origin: 'bottom',
  reset: true
})
ScrollReveal().reveal('.box', {
  duration: 2000,
  origin: 'bottom',
  reset: true
})
ScrollReveal().reveal('form', {
  duration: 2000,
  origin: 'bottom',
  reset: true
})
ScrollReveal().reveal('.info', {
  duration: 2000,
  origin: 'bottom',
  reset: true
})


/*$("#up1,#up2,#up3,#up4").counterUp({
  delay: 80;
  time: 3000;
})*/