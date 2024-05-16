const selectBtn = document.querySelectorAll(".select");
const dialog = document.getElementById("dialog");

selectBtn.forEach((selectBtn) => {
  selectBtn.addEventListener("click", () => {
    const btnText = selectBtn.innerText;
    if (btnText === "Out of Stock") {
      console.log("click");
    }
  });
});
