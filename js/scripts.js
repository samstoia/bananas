$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var submittedName = $("#name").val();
    var submittedAddress = $("#address").val();
    $("#outputName").text(submittedName);
    $("#outputAddress").text(submittedAddress);
    $("#letter").show();
  });
});
