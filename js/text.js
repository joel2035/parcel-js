import jquery from 'jquery';
window.$ = window.jQuery = jquery;
$(".features_home").animate({
  top: "0%",
  height: "100%",
}, 900, function() {
  $(".features_home").animate({
    left: "0px",
    width: "50%",

  }, 900, function() {
    $(".features_text").fadeIn(2000, function() {
      $(".features_text").hide(900)
      $(".features_home").animate({

        width: "35%",
      }, 500, function() {
        $(".features_img").animate({
            height: "70%",
          }, 500,
          function() {
            $(".features_img").animate({
              width: "30%",
            }, 500, function() {
              $(".features_it").fadeIn(900)

            })
          })
      })

    })

  })
  $(".features_items").click(function() {
    $(".features_home").hide(1000),
      $(".features_img").hide(1000)
  })
})