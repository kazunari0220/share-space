$(function() {
  $('.top-text').hide().fadeIn(8000);
  $('.top-text-2').hide().fadeIn(10000);
  $('.post-text,.icon-text-2').hover(function() {
    $(this).css('color', '#c00');
  }, function() {
    $(this).css('color', '');
  });
});