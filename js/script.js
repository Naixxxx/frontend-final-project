const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    const isOpen = burger.classList.toggle('header__burger--active');
    nav.classList.toggle('header__nav--open', isOpen);
    document.body.classList.toggle('page--locked', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  });
}

document.querySelectorAll('.filters__button').forEach((button) => {
  button.addEventListener('click', () => button.classList.toggle('filters__button--active'));
});
