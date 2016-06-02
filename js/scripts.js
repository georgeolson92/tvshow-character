$(document).ready(function(){
  $("form#character").submit(function(event){
    var dreamJob = $("select#job").val();
    var place = $("select#place").val();
    var spareTime = $("select#spare-time").val();
    var watchTV = $("input#watch-tv").val();

    var underwood = "Frank Underwood";
    var michael = "Michael Scott";
    var burns = "Mr. Burns";
    var joey = "Joey Tribbiani";
    var serena = "Serena van der Woodsen";

    if (watchTV === "") {
      $(".tv-form-group").addClass("has-error");
      $(".tv-form-group").append("<p class='errormsg'>Please enter something.</p>");
    } else if (dreamJob === "Software developer" || place === "Portland"){
      $(".result").text("... not any of these characters because you're too busy to watch TV.");
      $(".result-img").attr("src", "img/cat.jpg");
      $("#result").show();
    } else if (dreamJob === "US President" || spareTime === "Keep up-to-date on politics" || place === "Washington, DC") {
      $(".result").text(underwood);
      $(".result-img").attr("src","img/frank.jpg");
      $("#result").show();
    } else if (place === "Some small town in America" || dreamJob === "Best office manager in the world") {
      $(".result").text(michael);
      $(".result-img").attr("src", "img/michael.jpg");
      $("#result").show();
    } else if (spareTime === "Gossip" || place === "New York City") {
      $(".result").text(serena);
      $(".result-img").attr("src", "img/serena.jpg");
      $("#result").show();
    } else if (dreamJob === "Manager of nuclear power plant") {
      $(".result").text(burns);
      $(".result-img").attr("src", "img/burns.jpg");
      $("#result").show();
    } else if (place === "New York City" || dreamJob === "Actor" || spareTime === "Hang out at the local coffee shop") {
      $(".result").text(joey);
      $(".result-img").attr("src", "img/joey.png");
      $("#result").show();
    }

    event.preventDefault();
  });
});
