function roomPage() {
  $("#canvas").empty();
  const ajaxGetData = "Chris";
  $("#canvas").append(
    $("<div>").append(
      $("<p>")
        .attr("id", "welcome")
        .text("Welcome " + ajaxGetData),
      $("<p>")
        .attr("id", "choose")
        .text("Which room would you like to play in?"),
      $("<div>")
        .addClass("roomGroup")
        .append(
          $("<div>")
            .addClass("roomBorder")
            .append(
              $("<p>").text("Room number 1"),
              $("<p>").text("0/2"),
              $("<button>").text("This One?")
            ),
          $("<div>")
            .addClass("roomBorder")
            .append(
              $("<p>").text("Room number 2"),
              $("<p>").text("0/2"),
              $("<button>").text("This One?")
            ),
          $("<div>")
            .addClass("roomBorder")
            .append(
              $("<p>").text("Room number 3"),
              $("<p>").text("0/2"),
              $("<button>").text("This One?")
            ),
          $("<div>")
            .addClass("roomBorder")
            .append(
              $("<p>").text("Room number 4"),
              $("<p>").text("0/2"),
              $("<button>").text("This One?")
            )
        ),
      $("<button>")
        .attr("id", "selectButton")
        .text("Select")
    )
  );
}
