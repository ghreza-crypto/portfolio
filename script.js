const closeNavbarMenue = document.querySelector('#close');
const humbarger = document.querySelector('#humbarger');

function menue() {
  document.querySelector('#navbarMenue').classList.add('active');
}
function menueClose() {
  document.querySelector('#navbarMenue').classList.remove('active');
}
closeNavbarMenue.addEventListener('click', menueClose);
humbarger.addEventListener('click', menue);
document.querySelectorAll('.navbarLinks').forEach((navbarLink) => navbarLink.addEventListener('click', menueClose));