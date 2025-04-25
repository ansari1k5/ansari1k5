$(document).ready(function() {
    // Smooth Scroll
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      const target = $(this.getAttribute('href'));
      if (target.length) {
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 70
        }, 1000);
      }
    });
  
    // Sticky header effect
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 100) {
        $('#scrollTopBtn').fadeIn();
      } else {
        $('#scrollTopBtn').fadeOut();
      }
    });
  
    $('#scrollTopBtn').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 800);
    });
  
    // Dark/Light Mode Toggle
    $('#mode-toggle').click(function() {
      $('body').toggleClass('dark-mode');
    });
  
    // Form Validation
    $('#contactForm').submit(function(e) {
      e.preventDefault();
      let name = $('#name').val().trim();
      let email = $('#email').val().trim();
      let message = $('#message').val().trim();
  
      if (name === "" || email === "" || message === "") {
        $('#form-status').text("Please fill all fields.").css("color", "red");
      } else {
        $('#form-status').text("Message sent successfully!").css("color", "green");
        $(this)[0].reset();
      }
    });
  });
  // Counter Animation
let counterAnimated = false;

$(window).scroll(function() {
  let oTop = $('.stats').offset().top - window.innerHeight;
  if (!counterAnimated && $(window).scrollTop() > oTop) {
    $('.counter').each(function() {
      let $this = $(this),
          countTo = $this.attr('data-count');

      $({ countNum: $this.text() }).animate({
        countNum: countTo
      }, {
        duration: 2000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    counterAnimated = true;
  }
});
// FAQ Accordion
$('.faq-question').on('click', function() {
    $(this).next('.faq-answer').slideToggle();
    $('.faq-answer').not($(this).next()).slideUp();
  });
  
  