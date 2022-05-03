var isFlower = false;
$('.flower').remove();

function getFlower() {

  if (!isFlower) {
    isFlower = true;
    $('.flower').fadeIn(3000);
    $('.flower').fadeOut(3000);
    isFlower = false;
  }

}
