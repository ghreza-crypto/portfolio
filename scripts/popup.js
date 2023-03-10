const projects = [
  {
    id: '1',
    img: 'images/works2/work1.JPG',
    title: 'Global University Website',
    tags: ['website', 'Front End Dev', '2023'],
    description: 'Global university is a website builds for university.',
    categories: ['html', 'css', 'javascript'],
    detail: "Global university is a website builds for university, you can share your courses and information about university. It is build with Html, CSS, JavaScript.",
    liveVersion: 'https://ghreza-crypto.github.io/global-university/',
    source: 'https://github.com/ghreza-crypto/global-university',
  },

  {
    id: '2',
    img: 'images/works2/work2.png',
    title: 'Multi-Post Stories',
    tags: ['Canopy', 'Back End Dev', '2015'],
    description: ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    categories: ['html', 'css', 'javascript'],
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    liveVersion: '#',
    source: '#',
  },

  {
    id: '3',
    img: 'images/works2/work3.png',
    title: 'Tonic',
    tags: ['Canopy', 'Back End Dev', '2015'],
    description: ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    categories: ['html', 'css', 'javascript'],
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    liveVersion: '#',
    source: '#',
  },

  {
    id: '4',
    img: 'images/works2/work4.png',
    title: 'Multi-Post Stories',
    tags: ['Canopy', 'Back End Dev', '2015'],
    description: ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    categories: ['html', 'css', 'javascript'],
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    liveVersion: '#',
    source: '#',
  },
];
const worksGridLayout = document.getElementById('worksGridLayout');
function popupPage(id) {
  const popup = document.getElementById('popup');
  const wrapper = document.getElementById('wrapper');
  let html = `
    <div class="workDetailContainer ">
    <!-- body -->
    <div class="workDetailBody">
    <div class="workDetailBodyHeader">
        <h1 class="worksBodytitle">${projects[id - 1].title}</h1>
        <i class="" id="workDetailClose"><img src="./images/work-detail-cancel.png" alt="icon-cancel"></i>
        </div>
        <!-- description -->
        <div class="frame2">`;
  projects[id - 1].tags.forEach((tag, i, arr) => {
    html += `<span class="name">${tag}</span>`;
    if (arr.length - 1 !== i) { html += '<span class="dot"></span>'; }
  });
  html += ` </div>
        <img src="${projects[id - 1].img}" alt="${projects[id - 1].title}" class="workDetailImg">
        <div class="workDetailInstructions">
        <p class="workDescription workDetailDescription">
           ${projects[id - 1].detail}
        </p>
        <!-- categories -->
        <div>
        <ul class="worksCategories">`;
  projects[id - 1].categories.forEach((category) => {
    html += `<li>${category}</li>`;
  });
  html += `</ul>
        <hr>
        <div class="workDetailFooter">
        <a id="actionbtn" class="worksBtn worksDetailBtn worksDetailBtn " href="${projects[id - 1].liveVersion}" target="_blank">See live
        <i class="" id=""><img src="./images/workDetailIcon1.png" alt="workDetailIcon1"></i>
      </a>
      <a id="actionbtn" class="worksBtn worksDetailBtn worksDetailBtn" href="${projects[id - 1].source}" target="_blank">See source
      <i class="" id=""><img src="./images/workDetailIcon2.png" alt="workDetailIcon2" class="workDetailIcon2"></i>
      </a>
      </div>
      </div>
      </div>
   </div>
    <!-- end body -->
 </div>`;
  wrapper.style.display = 'block';
  popup.innerHTML = html;
  popup.style.display = 'block';
  const workDetailClose = document.getElementById('workDetailClose');
  workDetailClose.addEventListener('click', () => {
    wrapper.style.display = 'none';
    popup.style.display = 'none';
  });
}
projects.forEach((project) => {
  let html = `<div class="worksContainer " id="work${project.id}">
   
   <img src="${project.img}" alt="${project.title}" class="worksImg">
   <!-- body -->
   <div class="worksBody">
       <h1 class="worksBodytitle">${project.title}</h1>
       <!-- description -->
       <div class="frame2">`;
  project.tags.forEach((tag, i, arr) => {
    html += `<span class="name">${tag}</span>`;
    if (arr.length - 1 !== i) { html += '<span class="dot"></span>'; }
  });
  html += ` </div>
       <p class="workDescription">
          ${project.description}
       </p>
       <!-- categories -->
       <ul class="worksCategories">`;
  project.categories.forEach((category) => {
    html += `<li>${category}</li>`;
  });
  html += `</ul>
       <button class="worksBtn" id="${project.id}">See Project</button>
  </div>
   <!-- end body -->
</div>`;
  worksGridLayout.insertAdjacentHTML('afterbegin', html);
});
document.getElementById('work2').classList.add('reverse');
document.getElementById('work4').classList.add('reverse');

const worksBtn = document.querySelectorAll('.worksBtn');
worksBtn.forEach((workBtn) => workBtn.addEventListener('click', (e) => {
  const { id } = e.target;
  popupPage(id);
}));