const selectBtn = document.querySelectorAll(".select-button");
const dialog = document.getElementById("dialog");
const menuOpen = document.getElementById("menu-button-open");
const menuClose = document.getElementById("menu-button-close");
const select = document.querySelectorAll(".select");
const radioBtn = document.querySelectorAll(`input[type="radio"]`);
const selected = document.getElementById("selected");
const nav = document.getElementById("nav");
const stock = document.querySelectorAll(".stock");
const continueBtn = document.getElementById("continue-button");
const success = document.getElementById("success");
const bookmarkBtn = document.getElementById("bookmark-button");
const modalBtnClose = document.getElementById("modal-button-close");
const gotItBtn = document.getElementById("got-it-button");
const input = document.querySelectorAll(".input");

selectBtn.forEach((selectBtn) => {
  selectBtn.addEventListener("click", () => {
    const btnText = selectBtn.innerText;
    if (btnText === "Out of Stock") {
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

function noStock() {
  stock.forEach((stock) => {
    const stockVal = stock.innerText;
    if (stockVal === "0 left") {
      stock.parentNode.classList.add("no-stock");
      const selectWrap = stock.closest(".select");
      if (selectWrap) {
        const radioButton = selectWrap.querySelector('input[type="radio"]');
        if (radioButton) {
          radioButton.disabled = true;
        }
      }
    }
  });
}

noStock();

continueBtn.addEventListener("click", () => {
  dialog.classList.remove("dialog-active");
  success.classList.add("success-active");
});

bookmarkBtn.addEventListener("click", () => {
  const bookmarkText = document.getElementById("bookmark-text");
  if (bookmarkText.innerText === "Bookmarked") {
    bookmarkText.innerText = "Bookmark";
  } else {
    bookmarkText.innerText = "Bookmarked";
  }
  bookmarkBtn.classList.toggle("bookmark-active");
});

modalBtnClose.addEventListener("click", () => {
  dialog.classList.remove("dialog-active");
});

gotItBtn.addEventListener("click", () => {
  success.classList.remove("success-active");
  let inputValue = 0;
  const totalBackers = document.getElementById("total-backers");
  const totalRaised = document.getElementById("total-raised");
  let currentRaised = parseInt(totalRaised.innerText.replace(/[^0-9]/g, ""));
  let currentBackers = parseInt(totalBackers.innerText.replace(/[^0-9]/g, ""));
  const selectedI = document.querySelector(".select-active .input");
  if (selectedI) {
    inputValue += parseInt(selectedI.value);
  }
  currentRaised += inputValue;
  currentBackers++;
  totalRaised.innerText = `$${currentRaised.toLocaleString()}`;
  totalBackers.innerText = currentBackers.toLocaleString();
});

const selectArray = [
  {
    input: null,
  },
  {
    input: 25,
  },
  {
    input: 75,
  },
  {
    input: 200,
  },
];
