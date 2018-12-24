$(document).ready(function() {

$("#submit-survey").on("click", function(event) {
    event.preventDefault();
    $("#name").val();
    $("#selfie").val();
    $("#q1").val();
    $("#q2").val();
    $("#q3").val();
    $("#q4").val();
    $("#q5").val();
    $("#q6").val();
    $("#q7").val();
    $("#q8").val();
    $("#q9").val();
    $("#q10").val();

   alert("submission recieved");
})
});