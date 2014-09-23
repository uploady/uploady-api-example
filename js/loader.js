$(function () {
  var $loader = $("#loading");
  $(document).ajaxStart(function () {
    $loader.fadeIn();
  });
  $(document).ajaxStop(function () {
    $loader.fadeOut();
  });
  $loader.click(function () {
    $loader.fadeOut();
  });
});