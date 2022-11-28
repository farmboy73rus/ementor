const scrollToDownLink = document.querySelector('#scroll_down_link');

const scrollDown = () => {
    const scrollTarget = document.querySelector('main').firstElementChild;

    scrollTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

scrollToDownLink.addEventListener('click', scrollDown);