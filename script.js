$(".btn").click(function () {
  $(".fade").fadeIn();
  $(".modal").fadeIn();
})
  $(".time").click(function () {
  $(".modal").fadeOut();
  $(".fade").fadeOut();
})
$(".q-item-container").click(function () {
  var $answer = $(this).find('.q-hide');
  if ($answer.hasClass('open')) {
    $answer.removeClass('open');
    $answer.slideUp();
    $(this).find('span').text('+');
  } else {
    $answer.addClass('open');
    $answer.slideDown();
    $(this).find('span').text('-');
  }

});
$(".fade").click(function () {
  $(".modal").fadeOut();
  $(this).fadeOut();
})
$('a').click(function () {
  var adjust = 0;
  var speed = 400;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top + adjust;
  $('body,html').animate({ scrollTop: position }, speed, 'swing');
  return false;
});

