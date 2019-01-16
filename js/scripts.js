$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var submittedName = $("#name").val();
    var submittedAddress = $("#address").val();
    var submittedBananas = $("#bananaType").val();
    $("#outputName").text(submittedName);
    $("#outputAddress").text(submittedAddress);
    $("#outputBananas").text(submittedBananas);
    $("#letter").show();
  });
});
