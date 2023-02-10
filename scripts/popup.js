const projects = [
    {
        id: '1',
        img: 'images/works2/work1.png',
        title: 'Tonic',
        tags: ['Canopy', 'Back End Dev', '2015'],
        description: ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
        categories: ['html', 'css', 'javascript'],
        detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent"
    },

    {
        id: '2',
        img: 'images/works2/work2.png',
        title: 'Multi-Post Stories',
        tags: ['Canopy', 'Back End Dev', '2015'],
        description: ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
        categories: ['html', 'css', 'javascript'],
        detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent"
    },

    {
        id: '3',
        img: 'images/works2/work3.png',
        title: 'Tonic',
        tags: ['Canopy', 'Back End Dev', '2015'],
        description: ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
        categories: ['html', 'css', 'javascript'],
        detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent"
    },

    {
        id: '4',
        img: 'images/works2/work4.png',
        title: 'Multi-Post Stories',
        tags: ['Canopy', 'Back End Dev', '2015'],
        description: ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
        categories: ['html', 'css', 'javascript'],
        detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent"
    },
];
let worksGridLayout = document.getElementById('worksGridLayout');
function test(id) {
    let popup = document.getElementById('popup');
    let wrapper = document.getElementById('wrapper');
    let html = `
    <div class="workDetailContainer ">
    <!-- body -->
    <div class="workDetailBody">
    <div class="workDetailBodyHeader">
        <h1 class="worksBodytitle">${projects[id - 1].title}</h1>
        <i class="" id="workDetailClose"><img src="./images/work-detail-cancel.png" alt="icon-cancel"></i>
        </div>
        <!-- description -->
        <div class="frame2">
            <span class="name">${projects[id - 1].tags[0]}</span>
            <span class="dot"></span>
            <span class="role">${projects[id - 1].tags[1]}</span>
            <span class="dot"></span>
            <span class="year">${projects[id - 1].tags[2]}</span>
        </div>
        <img src="${projects[id - 1].img}" alt="${projects[id - 1].title}" class="workDetailImg">
        <div class="workDetailInstructions">
        <p class="workDescription workDetailDescription">
           ${projects[id - 1].detail}
        </p>
        <!-- categories -->
        <div>
        <ul class="worksCategories">
            <li>${projects[id - 1].categories[0]}</li>
            <li>${projects[id - 1].categories[1]}</li>
            <li>${projects[id - 1].categories[2]}</li>
        </ul>
        <hr>
        <div class="workDetailFooter">
        <button id="actionbtn" class="worksBtn worksDetailBtn worksDetailBtn " href="${projects[id - 1].liveVersion}">See live
        <i class="" id=""><img src="./images/workDetailIcon1.png" alt="workDetailIcon1"></i>
      </button>
      <button id="actionbtn" class="worksBtn worksDetailBtn worksDetailBtn" href="${projects[id - 1].source}">See source
      <i class="" id=""><img src="./images/workDetailIcon2.png" alt="workDetailIcon2" class="workDetailIcon2"></i>
      </button>
      </div>
      </div>
      </div>
   </div>
    <!-- end body -->
 </div>`
    wrapper.style.display = 'block';
    popup.innerHTML = html;
    popup.style.display = 'block';
    let workDetailClose = document.getElementById('workDetailClose');
    workDetailClose.addEventListener('click', () => {
        wrapper.style.display = 'none';
        popup.style.display = 'none';
    });
}
projects.forEach(project => {
    let html = `<div class="worksContainer " id="work${project.id}">
   
   <img src="${project.img}" alt="${project.title}" class="worksImg">
   <!-- body -->
   <div class="worksBody">
       <h1 class="worksBodytitle">${project.title}</h1>
       <!-- description -->
       <div class="frame2">
           <span class="name">${project.tags[0]}</span>
           <span class="dot"></span>
           <span class="role">${project.tags[1]}</span>
           <span class="dot"></span>
           <span class="year">${project.tags[2]}</span>
       </div>
       <p class="workDescription">
          ${project.description}
       </p>
       <!-- categories -->
       <ul class="worksCategories">
           <li>${project.categories[0]}</li>
           <li>${project.categories[1]}</li>
           <li>${project.categories[2]}</li>
       </ul>
       <button class="worksBtn" id="${project.id}">See Project</button>
  </div>
   <!-- end body -->
</div>`
    worksGridLayout.insertAdjacentHTML('afterbegin', html);
});
document.getElementById('work2').classList.add('reverse');
document.getElementById('work4').classList.add('reverse');

const worksBtn = document.querySelectorAll('.worksBtn');
worksBtn.forEach((workBtn) => workBtn.addEventListener('click', (e) => {
    const { id } = e.target;
    test(id);
}));