$('body').scrollspy({
  target: ".navbar",
  offset: 50
});

$("#navbar a, #myBtn").on('click', function (e) {

  if (this.hash !== "") {
    e.preventDefault();
    let hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, () => {
      window.location.hash = hash;
    });
  }
});

$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
      $('#myBtn').fadeIn();
  } else {
      $('#myBtn').fadeOut();
  }
});