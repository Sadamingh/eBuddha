var isFlower = false;

$(document).ready(function() {
  $('.flower').hide();
});

function getFlower() {

  if (!isFlower) {
    isFlower = true;
    $('.flower').fadeIn(3000);
    $('.flower').fadeOut(3000);
    isFlower = false;
  }

}
