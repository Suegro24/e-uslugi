const header = document.querySelector('#header');
const headerOffsetTop = header.offsetTop;

const checkSticky = () => {
    if (window.pageYOffset > headerOffsetTop) header.classList.add('sticky');
    else header.classList.remove('sticky');
}

window.addEventListener('scroll', checkSticky, false);