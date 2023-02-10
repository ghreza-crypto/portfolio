const projects = [
    {
        id: '1',
        img: 'images/works2/work1.png',
        title: 'Tonic',
        tags: ['Canopy', 'Back End Dev', '2015'],
        description: ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
        categories: ['html', 'css', 'javascript']
    },

    {
        id: '2',
        img: 'images/works2/work2.png',
        title: 'Multi-Post Stories',
        tags: ['Canopy', 'Back End Dev', '2015'],
        description: ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
        categories: ['html', 'css', 'javascript']
    },

    {
        id: '3',
        img: 'images/works2/work3.png',
        title: 'Tonic',
        tags: ['Canopy', 'Back End Dev', '2015'],
        description: ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
        categories: ['html', 'css', 'javascript']
    },

    {
        id: '4',
        img: 'images/works2/work4.png',
        title: 'Multi-Post Stories',
        tags: ['Canopy', 'Back End Dev', '2015'],
        description: ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
        categories: ['html', 'css', 'javascript']
    },
];
let worksGridLayout = document.getElementById('worksGridLayout');
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
       <button class="worksBtn" id="btn${project.id}">See Project</button>
   </div>
   <!-- end body -->
</div>`
    worksGridLayout.insertAdjacentHTML('afterbegin', html);
});
document.getElementById('work2').classList.add('reverse');
document.getElementById('work4').classList.add('reverse');