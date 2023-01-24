$(function(){
  

    const body = document.querySelector('body');
    const toggle =document.getElementById('toggle');
    toggle.onclick = function(){
        toggle.classList.toggle("active")
        body.classList.toggle("active");
    }




    // tools js
    $(".tools_slick").slick({
        slidesToShow:3,
        slidesToScroll:1,
        arrows:true,
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        nextArrow:".ser_next",
        prevArrow:".ser_prev",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    })

    // feature js
    $(".features_slick").slick({
        slidesToShow:3,
        slidesToScroll:1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    })

    // Review js
    $(".review_silck").slick({
        slidesToShow:1,
        slidesToScroll:1,
        arrows:true,
        autoplay:true,
        autoplaySpeed:2000,
        dots:false,
        nextArrow:".ser_next_review",
        prevArrow:".ser_prev_review",
        
    })

    // back top
    $(window).scroll(function(){
      var scrolling =$(this).scrollTop();
        if(scrolling > 30){
          $(".backtop i").fadeIn(500)
        }else{
          $(".backtop i").fadeOut(500)
        }
       
        if(scrolling > 50){
          $(".menu_bg").addClass("bg")
        }else{
          $(".menu_bg").removeClass("bg")
        }
      
      })

      
    $(".backtop i").click(function(){
      $("html, body").animate({
        scrollTop:0
      },1000)
    })
    

    

})