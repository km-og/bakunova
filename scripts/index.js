const menu = document.querySelector(".menu");
const buttonMenu = document.querySelector(".header__button");
const menuBurger = document.querySelectorAll(".header__burger");

// const closeButtonMenu = menu.querySelector(".menu__close-button");
const menuLinks = menu.querySelectorAll(".menu__link");

// закрыть по Esc

const closeByEsc = (evt) => {
  const menuOpened = document.querySelector(".menu_opened");
  if (evt.code === "Escape") {
    closeMenu(menuOpened);
  }
};

// закрыть меню

const closeMenu = () => {
  menu.classList.remove("menu_opened");
  menuBurger.forEach((item) => {
    item.classList.remove("header__burger_type_active");
  });
  document.removeEventListener("keydown", closeByEsc);
  buttonMenu.removeEventListener("click", closeMenu);
};

// закрыть меню при клике на ссылку

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", closeMenu);
});

// закрыть по оверлею

menu.addEventListener("click", (evt) => {
  const isOverlay = evt.target.classList.contains("menu");
  const isClose = evt.target.classList.contains("menu__close-button");
  if (isOverlay || isClose) {
    closeMenu(menu);
  }
});

// открыть меню

const openMenu = () => {
  menu.classList.add("menu_opened");
  menuBurger.forEach((item) => {
    item.classList.add("header__burger_type_active");
  });
  document.addEventListener("keydown", closeByEsc);

  buttonMenu.addEventListener("click", closeMenu);
};

buttonMenu.addEventListener("click", openMenu);

// ДИПЛОМЫ И НАГРАДЫ

// видимое количество изображений
const count = 1;
const awardsCarousel = document.querySelector(".awards__carousel");
const widthImg = awardsCarousel.querySelector(".awards__img").width;
const awardsList = awardsCarousel.querySelector(".awards__list");
const awardsItem = awardsCarousel.querySelectorAll(".awards__item");

let position = 0;

const prev = awardsCarousel.querySelector(".awards__button-prev");
const next = awardsCarousel.querySelector(".awards__button-next");

prev.onclick = function () {
  // сдвиг влево
  position += (widthImg + 25) * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0);
  awardsList.style.marginLeft = position + "px";
};

next.onclick = function () {
  // сдвиг вправо
  position -= (widthImg + 25) * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -widthImg * (awardsItem.length - count));
  awardsList.style.marginLeft = position + "px";
};
