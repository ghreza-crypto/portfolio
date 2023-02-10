const contactForm = document.getElementById('contactForm');

const data = {
  name: String,
  email: String,
  message: String,
};

window.onload = () => {
  const saved = JSON.parse(localStorage.getItem('contactFormDetails'));
  if (saved) {
    document.getElementById('senderName').value = saved.name;
    document.getElementById('email').value = saved.email;
    document.getElementById('message').value = saved.message;
  }
};

contactForm.onchange = () => {
  data.name = document.getElementById('senderName').value;
  data.email = document.getElementById('email').value;
  data.message = document.getElementById('message').value;
  localStorage.setItem('contactFormDetails', JSON.stringify(data));
};