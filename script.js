const contentNumbers = document.getElementById("content_numbers");
const contentServices = document.getElementById("service_content");
const menu_hamburger = document.querySelector(".hamburger");
const menuForMobile = document.querySelector(".menu");
const menu_cross = document.querySelector(".mobile-nav-top img");
const images = document.querySelector(".images");
const clients = document.querySelector(".slider-track");
const contact = document.querySelector(".contact__details");



// Making menu_hamburger background black while scrolling:
window.addEventListener('scroll', () => {
  if(window.scrollY>menu_hamburger.offsetHeight + 50){
    menu_hamburger.classList.add('active');
  }else{
    menu_hamburger.classList.remove('active');
  }
})

// Making menu_hamburger toggle the menu bar
menu_hamburger.addEventListener('click', () => {
  menuForMobile.classList.add('activeMenu');
  menu_hamburger.style.display = 'none';
});

menu_cross.addEventListener('click', () => {
  menuForMobile.classList.remove('activeMenu');
  menu_hamburger.style.display = 'flex';
});

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
];

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
];

const userReviewOfClients = [
  {
    img:"user-01.webp",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laudantium aperiam exercitationem alias earum reprehenderit saepe nobis quo aut, laboriosam suscipit. Vero, dolores. Ipsum dicta aut, voluptas quae doloribus sapiente harum magnam ipsa, vitae laudantium repellendus expedita magni accusamus adipisci at veniam nisi. Odio, et alias quam impedit similique dignissimos?",
    name:"Tim Cook",
    position:"CEO, Apple",
  },
  {
    img:"user-02.webp",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, minus! A adipisci ad autem dolorum incidunt rem dolore. Mollitia expedita magnam saepe omnis voluptatibus dolore culpa quo est ea exercitationem voluptates, perspiciatis sit soluta eveniet autem eos repellat corporis vel!",
    name:"Sundar Pichai",
    position:"CEO, Google",
  },
  {
    img:"user-03.webp",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ad minima magni sit facilis. Laboriosam asperiores voluptatibus ipsa corrupti quidem ducimus labore, consequuntur soluta sint inventore illum expedita incidunt quia, modi hic atque unde voluptates.",
    name:"Satya Nadella",
    position:"CEO Microsoft",
  }
];

const contactDetails =[
  {
    heading: "Where to Find Us",
    detail1: "1600 Amphitheatre Parkway",
    detail2: "Mountain View, CA",
    detail3: "94043 US",
  },
  {
    heading: "Email Us At",
    detail1: "contact@glintsite.com",
    detail2: "info@glintsite.com",
    detail3: "bigyan@gmail.com",
  },
  {
    heading: "Call Us At",
    detail1: "Phone: (+63) 555 1212",
    detail2: "Mobile: (+63) 555 0100",
    detail3: "Fax: (+63) 555 0101",
  },
];

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

// User review section 
const generateHTMLForClientsUserReview = () => {
  const contentHTMLForClientsUserReview = userReviewOfClients.map(
    (clients) => `
      <div class="slider-slide">
        <p>${clients.text}</p>
        <div class="profile">
          <img src="./assets/${clients.img}" alt="${clients.name}">
          <h5>${clients.name}</h5>
          <small>${clients.position}</small>
        </div>
      </div>
    `
  );
  clients.innerHTML = contentHTMLForClientsUserReview.join('');
};
generateHTMLForClientsUserReview();

// Applying slider function
let currentSlide = 0;

function changeSlide(slideIndex) {
  const sliderTrack = document.querySelector('.slider-track');
  const slideWidth = document.querySelector('.slider-slide').offsetWidth;
  console.log(".slicer-track", sliderTrack, ".slider-slide", slideWidth)
  
  const buttons = document.querySelectorAll('.slider-button');
  buttons.forEach(button => button.classList.remove('active'));

  // Add 'active' class to the clicked button
  const clickedButton = buttons[slideIndex];
  clickedButton.classList.add('active');

  currentSlide = slideIndex;
  const displacement = -slideWidth * currentSlide;
  sliderTrack.style.transform = `translateX(${displacement}px)`;
}

// Content for contacts
const generateHTMLForContact = () => {
  const contentHTMLForContact = contactDetails.map(
    (contactItems) => `
      <div class="contact_item">
        <h4>${contactItems.heading}</h4>
        <p>${contactItems.detail1}</p>
        <p>${contactItems.detail2}</p>
        <p>${contactItems.detail3}</p>
      </div>
    `
  );
   contact.innerHTML = contentHTMLForContact.join('');
}
generateHTMLForContact();