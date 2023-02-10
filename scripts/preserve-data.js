let contactFormName = document.getElementById('senderName');
let contactFormMessage = document.getElementById('message');
let contactFormEmail = document.getElementById('email');
let saved=localStorage.getItem('contactForm');

let form= {
    name: '',
    email:'',
    message: '',
  };

  if (saved) {
    form = JSON.parse(saved);
    contactFormName.value = form.name;
    contactFormMessage.value=form.message;
    contactFormEmail.value = form.email;
  }

  saveForm = (e) => {
    const element = e.target;
    form[element.name] = element.value;
    localStorage.setItem('contactForm', JSON.stringify(form));
  };

  
contactFormName.addEventListener('change', saveForm);
contactFormEmail.addEventListener('change', saveForm);
contactFormMessage.addEventListener('change', saveForm);