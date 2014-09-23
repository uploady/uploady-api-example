$.fn.myResetElement = function () {
  $(this).wrap('<form>').closest('form').get(0).reset();
  $(this).unwrap();
};