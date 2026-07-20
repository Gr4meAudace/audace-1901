const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-navigation");
const navigationLinks = document.querySelectorAll(".main-navigation a");

function closeMenu() {
  if (!menuButton || !navigation) return;
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navigationLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuButton.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      navigation.classList.contains("is-open") &&
      !navigation.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeMenu();
    }
  });
}
