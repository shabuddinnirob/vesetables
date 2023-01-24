$(function(){

  const body = document.querySelector('body');
  const toggle =document.getElementById('toggle');
  toggle.onclick = function(){
      toggle.classList.toggle("active")
      body.classList.toggle("active");
  }
  
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