const sideMenu = document.querySelector('.main-nav');
const hamBurger = document.querySelector('.fa-bars-staggered');
const closeBtn = document.querySelector('.fa-times');
const deckBtn = document.querySelector('.deck');
const accordion = document.querySelector('.accordion');


// Hamburger menu
hamBurger.addEventListener('click', () => {
    sideMenu.classList.add('show');
    document.body.classList.add('stop-scrolling');
});
closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('show');
    document.body.classList.remove('stop-scrolling');
});

// Menu categories
deckBtn.addEventListener('click', () => {
    accordion.classList.toggle('dropdown');
    document.querySelector('.fa-chevron-down').classList.toggle('fa-chevron-up');
});

const testimonials = [
    {
        name: "Treasure",
        job: "CEO, Shopercase",
        id: "1",
        content: "As a busy enterpreneur, I don't have a lot of time to spend managing my online store. That's why I love shopercase! It's fast, efficient, and saves me so much time. I can easily manage my products, orders, and customers information all in one place. Highly recommended!",
    },
    {
        name: "Sarak K.",
        job: "Hiring Manager",
        id: "2",
        content: "I have been using Shopercase for the past 6 months and it has completely transformed the way I run my online store. The user interface is intuitive and user-friendly,making it easy for me to manage my products and orders. The customers support team is also amazing and always available to assist mewhenever I need help. I highly recommend this app to any ecommerce business",
    },
    {
        name: "Katie B.",
        job: "Content Creator",
        id: "3",
        content: "I have tried several ecommerce platforms,but Shopercase stands out from the rest. The features aretop-notch and the app is constantly being updated with new and improved features. I especially lovethe analytics section, which helps me make informed decisions about my business. Thank you formaking such a fantastic product.",
    },
    {
        name: "David M.",
        job: "Lead Product Designer",
        id: "4",
        content: "As a small business owner, finding the right tools to run my online store can be overwhelming, butShopercase has made my life easier! I love the Customizable options and the ability to integrate with other platforms. The app has helped me streamline my processes and grow my business. Thank you.",
    }
];
// Testimonail functionalities
// Current slide
let i = 0;
// Total slide
let j = testimonials.length;

let testimonialContainer = document.querySelector('.testimonial-card');
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');

nextBtn.addEventListener('click', () => {
    i = (j + i + 1) % j;
    displayTestimonial();
});

prevBtn.addEventListener('click', () => {
    i = (j + i - 1) % j;
    displayTestimonial();
});

let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
    <p>${testimonials[i].content}</p>
    <div class="profile-card">
       <div class="img" id="user${testimonials[i].id}"></div>
    <h4>${testimonials[i].name}</h4>
    <small>${testimonials[i].job}</small>
    </div>
    `;
}
displayTestimonial();

let z = 0;
let backgroundDisplay = [];
let time = 15000;



 backgroundDisplay = [
    {
        bgImg: "url(../images/showcase1.jpg)"
    },
    {
        bgImg: "url(../images/showcase2.jpg)"
    },
    {
        bgImg: "url(../images/showcase3.jpg)"
    },
    {
        bgImg: "url(../images/showcase4.jpg)"
    },
    {
        bgImg: "url(../images/showcase5.jpg)"
    },
    {
        bgImg: "url(../images/showcase6.jpg)"
    }
];


const changeImg = () => {
    const showcase = document.querySelector('.showcase');

    showcase.style.backgroundImage = `${backgroundDisplay[z].bgImg}`;
    
    if(z < backgroundDisplay.length - 1){
        z++;
    }else{
        z = 0;
    }

    setTimeout(changeImg, time);
}

window.onload = changeImg;