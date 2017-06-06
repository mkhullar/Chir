  var breakfast =0;
  var lunch = 0;
  var dinner = 0;
  var extraEx = 0;
  var sleepTime = 0;
$(document).ready(function () {
    $("#bSlider").slider(
    {
        min: 0,
        max: 1000,
        step: 1,
        change: showValue

    });
    function showValue(event, ui) {
      breakfast = ui.value;
      updateSlider(breakfast,lunch,dinner,extraEx,sleepTime);
      $("#bVal").html(ui.value);
    }
});
$(document).ready(function () {
    $("#lSlider").slider(
    {
        min: 0,
        max: 1000,
        step: 1,
        change: showValue

    });
    function showValue(event, ui) {
      lunch = ui.value;
      updateSlider(breakfast,lunch,dinner,extraEx,sleepTime);
      $("#lVal").html(ui.value);
    }
});
$(document).ready(function () {
    $("#dSlider").slider(
    {
        min: 0,
        max: 1000,
        step: 1,
        change: showValue

    });
    function showValue(event, ui) {
      dinner=ui.value;
      updateSlider(breakfast,lunch,dinner,extraEx,sleepTime);
      $("#dVal").html(ui.value);
    }
});
$(document).ready(function () {
    $("#sleepSlider").slider(
    {
        min: 1,
        max: 24,
        step: 1,
        change: showValue

    });
    function showValue(event, ui) {
      sleepTime = ui.value;
      updateSlider(breakfast,lunch,dinner,extraEx,sleepTime);
      $("#sleepVal").html(ui.value);
    }
});
$(document).ready(function () {
    $("#extraExercise").slider(
    {
        orientation: "vertical",
        min: 0,
        max: 120,
        step: 1,
        change: showValue

    });
    function showValue(event, ui) {
      extraEx = ui.value;
      updateSlider(breakfast,lunch,dinner,extraEx,sleepTime);
      $("#extraExerciseVal").html(ui.value);
    }
});
