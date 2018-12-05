function characterPage() {
  $("#canvas").empty();
  const ajaxGetData = "Chris";
  $("#canvas").append(
    $("<div>").append(
      $("<p>")
        .attr("id", "welcome")
        .text("Welcome " + ajaxGetData),
      $("<p>")
        .attr("id", "choose")
        .text("Please choose your charater"),
      $("<div>")
        .addClass("charGroup")
        .append(
          $("<img src = 'assets/ship_1.png'>").addClass("charImage"),
          $("<img src = 'assets/ship_2.png'>").addClass("charImage"),
          $("<img src = 'assets/ship_3.png'>").addClass("charImage"),
          $("<img src = 'assets/ship_4.png'>").addClass("charImage"),
          $("<img src = 'assets/ship_5.png'>").addClass("charImage"),
          $("<img src = 'assets/ship_6.png'>").addClass("charImage")
        ),
      $("<button>")
        .attr("id", "selectButton")
        .text("Select")
    )
  );
}

$(document).on("click", "#selectButton", function() {
  roomPage();
});

// room
// registeration
// character
// main screen
