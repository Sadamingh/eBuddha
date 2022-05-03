var isFlower = false;
$('.flower').fadeOut(10);

function getFlower() {

  if (!isFlower) {
    isFlower = true;
    $('.flower').fadeIn(3000);
    $('.flower').fadeOut(3000);
    isFlower = false;
  }

}
