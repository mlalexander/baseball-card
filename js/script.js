
var playerData;

$(document).ready(function() {
    console.log("Hello world.")
    getData();
});


function getData() {
  $.getJSON("carlosgomez.json", function(data, error) {
    playerData = data;
    drawStuff();
  });


function drawStuff() {
    $(".chart").html(playerData.name);

    $.each(playerData.stats, function(i, item) {
      $(".chart").append("<p>"+item.AVG+"</p>");


})


  }

}
