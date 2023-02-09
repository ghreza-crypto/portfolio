const closeNavbarMenue = document.querySelector('#close');
const humbarger = document.querySelector('#humbarger');

function menue() {
  document.querySelector('#navbarMenue').classList.add('active');
  document.getElementById('body').style.overflow = 'hidden';
}
function menueClose() {
  document.querySelector('#navbarMenue').classList.remove('active');
  document.getElementById('body').style.overflow = 'scroll';
}
closeNavbarMenue.addEventListener('click', menueClose);
humbarger.addEventListener('click', menue);
document.querySelectorAll('.navbarLinks').forEach((navbarLink) => navbarLink.addEventListener('click', menueClose));