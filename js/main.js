const scrollToDownLink = document.querySelector('#scroll_down_link');
const switchButton = document.querySelectorAll('.js-switch');

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
