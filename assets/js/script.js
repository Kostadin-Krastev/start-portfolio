function eventListener() {
  const burgerMenuElement = document.querySelector('.burger-menu');

  burgerMenuElement.addEventListener('click', onBurgerMenuClick);
}

function onBurgerMenuClick() {
  const mainMenuContainerElement = document.querySelector(
    '.main-menu-container'
  );

  mainMenuContainerElement.style.display = 'block';
}
