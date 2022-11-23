(function ($) {
    "use strict";

    // Testimonial Slider
    $('.testimonial-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slider-nav'
    });
    $('.testimonial-slider-nav').slick({
        arrows: false,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '22px',
        slidesToShow: 3,
        asNavFor: '.testimonial-slider'
    });
    $('.testimonial .slider-nav').css({"position": "relative", "height": "160px"});

    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);


// // Portfolio load more
// $(function(){
//   'use strict';
  

//   $(".portfolio-item").slice(0, 4).show();
//   $(".load-more").on("click", function(){
//       $(".portfolio-item:hidden").slice(0, 4).slideDown("slow");
//       if ($(".portfolio-item:hidden").length == 0) {
//           $(".load-more").fadeOut("slow");
//       }
//   });
// });


// typed js vanilla
let dataTyping = {
    target: "typing-text",
    text: '["Layanan Pelanggan", "Silakan Hubungi Kami"]',
    delay: "10000",
  };
  
  class textType {
    constructor(el, text, delay) {
      this.text = text;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(delay, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    }
    tick() {
      let i = this.loopNum % this.text.length;
      let fullTxt = this.text[i];
  
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      this.el.innerText = this.txt;
  
      let that = this;
      let timing = Math.floor(200 - Math.random() * 100);
  
      if (this.isDeleting) {
        timing /= 2;
      }
  
      if (!this.isDeleting && this.txt === fullTxt) {
        timing = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        timing = 500;
      }
  
      setTimeout(function () {
        that.tick();
      }, timing);
    }
  }
  
  window.onload = function () {
    let el = document.getElementsByClassName(dataTyping.target);
    for (let i = 0; i < el.length; i++) {
      if (dataTyping.text) {
        new textType(el[i], JSON.parse(dataTyping.text), dataTyping.delay);
      }
    }
  };