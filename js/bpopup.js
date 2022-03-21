//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".banbox1").on("click", function(){
    $(".overlay1").addClass("active");
  });

$(".banbox2").on("click", function(){
    $(".overlay2").addClass("active");
  });
  
$(".banbox3").on("click", function(){
    $(".overlay3").addClass("active");
  });
  
  //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".close").on("click", function(){
    $('div[class^="overlay"]').removeClass("active");
  });
  