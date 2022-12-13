const menu = document.querySelector(".menu");
const buttonMenu = document.querySelector(".header__button");
const closeButtonMenu = menu.querySelector(".menu__close-button");
const menuLinks = menu.querySelectorAll(".menu__link");

// закрыть по Esc

const closeByEsc = (evt) => {
  const menuOpened = document.querySelector(".menu_opened");
  if (evt.code === "Escape") {
    closeMenu(menuOpened);
  }
};

// открыть меню

const openMenu = () => {
  menu.classList.add("menu_opened");
  document.addEventListener("keydown", closeByEsc);
};

buttonMenu.addEventListener("click", openMenu);

// закрыть меню

const closeMenu = () => {
  menu.classList.remove("menu_opened");
  document.removeEventListener("keydown", closeByEsc);
};
closeButtonMenu.addEventListener("click", closeMenu);

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

// ДИПЛОМЫ И НАГРАДЫ

const widthImg = 375;
const count = 3;
const awardsCarousel = document.querySelector(".awards__carousel");
const awardsList = awardsCarousel.querySelector(".awards__list");
const awardsItem = awardsCarousel.querySelectorAll(".awards__item");

let position = 0;

const prev = awardsCarousel.querySelector(".awards__button-prev");
const next = awardsCarousel.querySelector(".awards__button-next");

prev.onclick = function () {
  // сдвиг влево
  position += widthImg * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0);
  awardsList.style.marginLeft = position + "px";
  console.log(awardsList);
};

next.onclick = function () {
  // сдвиг вправо
  position -= widthImg * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -widthImg * (awardsItem.length - count));
  awardsList.style.marginLeft = position + "px";
  console.log(awardsList);
};
