const contentNumbers = document.getElementById("content_numbers");
const contentServices = document.getElementById("service_content");
const menu_hamburger = document.querySelector(".hamburger");
const images = document.querySelector(".images")


// Making menu_hamburger background black while scrolling:
window.addEventListener('scroll', () => {
  if(window.scrollY>menu_hamburger.offsetHeight + 150){
    menu_hamburger.classList.add('active');
  }else{
    menu_hamburger.classList.remove('active');
  }
})

const progress = [
  {
    number: Math.floor(Math.random() * 899) + 100,
    tag: "Award Received",
  },
  {
    number: Math.floor(Math.random() * 8999) + 1000,
    tag: "Cup of Coffee",
  },
  {
    number: Math.floor(Math.random() * 899) + 100,
    tag: "Projects Completed",
  },
  {
    number: Math.floor(Math.random() * 899) + 100,
    tag: "Happy Clients",
  },
];

const servicesDetails = [
  {
    img:"paintbrush.png",
    title:"Brand Identity", 
    text:"Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
  },
  {
    img:"3d.png",
    title:"Illustration", 
    text:"Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
  },
  {
    img:"megaphone.png",
    title:"Marketing", 
    text:"Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
  },
  {
    img:"planet-earth.png",
    title:"Web Design", 
    text:"Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
  },
  {
    img:"3d-cube.png",
    title:"Packaging Design", 
    text:"Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
  },
  {
    img:"suitcase.png",
    title:"Web Development", 
    text:"Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
  },
]

const imageDetails = [
  {
    img: "lady-shutterbug.jpg.webp",
    title:"SHUTTERBUG",
    tag:"Branding"
  },
  {
    img: "woodcraft.jpg.webp",
    title:"WOODCRAFT",
    tag:"Web Design"
  },
  {
    img: "the-beetle.jpg.webp",
    title:"THE BETTLE",
    tag:"Web Development"
  },
  {
    img: "grow-green.jpg.webp",
    title:"GROW GREEN",
    tag:"Branding"
  },
  {
    img: "guitarist.jpg.webp",
    title:"GUITARIST",
    tag:"Web Design"
  },
  {
    img: "palmeira.jpg.webp",
    title:"PALMEIRA",
    tag:"Web Design"
  },
]

// For About Section
const generateHTMLForAbout = () => {
  const contentHTMLForAbout = progress.map(
    (progressItems) => `
    <div class="progress">
        <h1 class="number">${progressItems.number}</h1>
        <p class="tag">${progressItems.tag}</p>
    </div>
    `
  );
  contentNumbers.innerHTML = contentHTMLForAbout.join("");
};
generateHTMLForAbout();


// For services section
const generateHTMLForService = () => {
  const contentHTMLForService = servicesDetails.map(
    (serviceItems) => `
      <div  class="services_list">
        <div class="services_list__items">
          <div class="services_image"><img src="./assets/${serviceItems.img}" alt="${serviceItems.title}"></div>
          <div class="services_content">
            <div class="services_content__title">${serviceItems.title}</div>
            <div class="services_content__text">${serviceItems.text}</div>
          </div>
        </div>
      </div>
    `
  );
  contentServices.innerHTML = contentHTMLForService.join('');
};
generateHTMLForService();

// For images section
const generateHTMLForImages = () =>{
  const contentHTMLForImages = imageDetails.map(
    (imageItems, index) => 
    index <= 2 ? `
    <div class="col1">
      <div class="col-img">
          <div class="images-img"><img src="./assets/${imageItems.img}" alt=""></div>
          <div class="overlay">
              <div class="link"><img src="./assets/link.png" alt=""></div>
              <div class="plus"><img src="./assets/plus.svg" alt=""></div>
              <div class="image-hover-text">
                  <h5>${imageItems.title}</h5>
                  <p>${imageItems.tag}</p>
              </div>
          </div>
      </div>
   </div>
    `: `
    <div class="col2">
      <div class="col-img">
        <div class="images-img"><img src="./assets/${imageItems.img}" alt=""></div>
          <div class="overlay">
              <div class="link"><img src="./assets/link.png" alt=""></div>
              <div class="plus"><img src="./assets/plus.svg" alt=""></div>
              <div class="image-hover-text">
                  <h5>${imageItems.title}</h5>
                  <p>${imageItems.tag}</p>
              </div>
          </div>
      </div>
    </div>
    `
  );
  images.innerHTML = contentHTMLForImages.join('');
};
generateHTMLForImages();