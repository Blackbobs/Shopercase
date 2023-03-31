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