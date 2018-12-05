function mainPage() {
  $("#canvas").empty();
  $("#canvas").append(
    $("<div>").append(
      $("<h1>").text("Blue vs Red"),
      $("<br/>"),
      $("<p>")
        .addClass("enter")
        .text("Press Enter to Start")
    )
  );
}
$(document).keypress(function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    characterPage();
  }
});
mainPage();
