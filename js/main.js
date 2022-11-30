const scrollToDownLink = document.querySelector('#scroll_down_link');
const switchButton = document.querySelectorAll('.js-switch');
const menuToggle = document.querySelector('#menu_toggle');

const noScrollHandler = () => {
    if (menuToggle.checked == true) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
}

const scrollDown = () => {
    const scrollTarget = document.querySelector('main').firstElementChild;

    scrollTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

const switchHandler = (el) => {

    el.addEventListener('click', () => {
        el.closest('.switch-item').querySelector('.switch-target').classList.toggle('hidden');
        el.querySelector('.icon-plus').classList.toggle('hidden');
        el.querySelector('.icon-minus').classList.toggle('hidden');
    })
}

switchButton.forEach(el => switchHandler(el));

if (scrollToDownLink) {
    scrollToDownLink.addEventListener('click', scrollDown);
}

menuToggle.addEventListener('change', noScrollHandler);