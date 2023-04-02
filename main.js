const sideMenu = document.querySelector('.side-menu');
const hamBurger = document.querySelector('.fa-bars');
const counters = document.querySelectorAll('.counter');
const speed = 100;

hamBurger.addEventListener('click', () => {
    const shown = sideMenu.classList.contains('show');
    sideMenu.classList.toggle('show');
    if (shown) {
        hamBurger.classList.add('fa-bars');
        hamBurger.classList.remove('fa-times');
        document.body.classList.toggle('stop-scrolling');
    } else {
        hamBurger.classList.remove('fa-bars');
        hamBurger.classList.add('fa-times');
        document.body.classList.toggle('stop-scrolling');
    }
})

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 100)
        } else {
            count.innerText = target
        }
    }

    updateCount()
})

const testimonials = [
    {
        name: "Treasure",
        job: "CEO, Shopercase",
        id: "1",
        content: "As a busy enterpreneur, I don't have a lot of time to spend managing my online store. That's why Ilove shopercase! It's fast, efficient, and saves me so much time. I can easily manage my products, orders, and customers information all in one place. Highly recommended!",
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
window.onload = displayTestimonial;