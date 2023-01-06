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

const awardsCarousel = document.querySelector(".awards__carousel");
const ul = awardsCarousel.querySelector(".awards__list");

const listItems = ul.children;

const btnNext = awardsCarousel.querySelector(".awards__button-next");
const btnPrev = awardsCarousel.querySelector(".awards__button-prev");

const scrollRidht = () => {
  ul.append(listItems[0]);
};

const scrollLeft = () => {
  ul.prepend(listItems[12]);
};

btnNext.addEventListener("click", scrollRidht);

btnPrev.addEventListener("click", scrollLeft);
