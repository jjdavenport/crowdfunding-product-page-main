const selectBtn = document.querySelectorAll(".select-button");
const dialog = document.getElementById("dialog");
const menuOpen = document.getElementById("menu-button-open");
const menuClose = document.getElementById("menu-button-close");
const select = document.querySelectorAll(".select");
const radioBtn = document.querySelectorAll(`input[type="radio"]`);
const selected = document.getElementById("selected");
const nav = document.getElementById("nav");

selectBtn.forEach((selectBtn) => {
  selectBtn.addEventListener("click", () => {
    const btnText = selectBtn.innerText;
    if (btnText === "Out of Stock") {
      console.log("click");
    } else {
      dialog.classList.add("dialog-active");
    }
  });
});

menuOpen.addEventListener("click", () => {
  nav.classList.add("nav-active");
  menuOpen.classList.add("menu-hide");
  menuClose.classList.add("menu-active");
});

menuClose.addEventListener("click", () => {
  menuOpen.classList.remove("menu-hide");
  menuClose.classList.remove("menu-active");
  nav.classList.remove("nav-active");
});

radioBtn.forEach((radioBtn, i) => {
  radioBtn.addEventListener("click", () => {
    select.forEach((e) => {
      e.classList.remove("select-active");
    });
    if (select[i]) {
      select[i].classList.add("select-active");
      select[i].appendChild(selected);
    }
    selected.classList.add("selected-active");
  });
});
