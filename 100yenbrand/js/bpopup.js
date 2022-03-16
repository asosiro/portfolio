//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".itemimg").on("click", function(){
    $(".overlay").addClass("active");
  });
  
  //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".close").on("click", function(){
    $(".overlay").removeClass("active");
  });
  