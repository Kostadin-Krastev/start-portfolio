function eventListener() {
  const burgerMenuElement = document.querySelector('.burger-menu');
  burgerMenuElement.addEventListener('click', onBurgerMenuClick);
}

function onBurgerMenuClick() {
  const mainMenuContainerElement = document.querySelector(
    '.main-menu-container'
  );
  const burgerMenuElement = document.querySelector('.burger-menu');

  // Show mobile navigation
  mainMenuContainerElement.style.display = 'block';

  // Toggle burger menu icon and navigation
  if (burgerMenuElement.classList.contains('open-burger-menu')) {
    burgerMenuElement.classList.replace(
      'open-burger-menu',
      'close-burger-menu'
    );
  } else {
    burgerMenuElement.classList.replace(
      'close-burger-menu',
      'open-burger-menu'
    );
    mainMenuContainerElement.style.display = '';
  }
}

eventListener();
