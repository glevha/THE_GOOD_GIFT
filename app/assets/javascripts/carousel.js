function initCarousel() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    smartSpeed: 580,
    mouseDrag: true,
    navText: ['<i class="fa arrow fa-arrow-left" aria-hidden="true"></i>','<i class="fa arrow fa-arrow-right" aria-hidden="true"></i>'],
    margin:10,
    autoHeight:true
  });
}

function Ordercount() {
  $(".owl-carousel").on('changed.owl.carousel', function(event) {
        $(".order-button").attr("disabled", true);
        setTimeout(function() {
          var product_1 = $('.owl-carousel.owl-big .owl-item.active').children().data('id');
          var product_2 = $('.owl-carousel.owl-medium .owl-item.active').children().data('id');
          var product_3 = $('.owl-carousel.owl-small .owl-item.active').children().data('id');
          $("#main").val(product_1);
          $("#side_one").val(product_2);
          $("#side_two").val(product_3);
          $(".order-button").removeAttr("disabled");
        }, 800);
      });
}
