const inputContainer = document.querySelector(".input-icon");
const input = document.querySelector(".input");
const addButton = document.querySelector(".btn-2");
const showInputButton = document.querySelector(".btn-1");
const list = document.querySelector(".list");
const icon = document.querySelector(".icon");
const changeButton = document.querySelector(".change-button");
const changeIcon = document.querySelector(".change-icon");

let itemCounter = 1;
let isAscending = true;

addButton.addEventListener("click", () => {
  const inputValue = input.value.trim();

  if (inputValue !== "") {
    const listElement = document.createElement("li");
    listElement.classList.add("li");
    listElement.dataset.order = itemCounter;
    listElement.innerHTML = `${itemCounter}. <span>${inputValue}</span> <i class="fa-regular fa-circle-xmark remove-icon"></i>`;

    list.appendChild(listElement);
    itemCounter++;
    input.value = "";

    input.style.display = "none";
    icon.style.display = "none";

    addRemoveIconEventListeners();
    list.style.display = "block";
  }
});

icon.addEventListener("click", () => {
  input.value = "";
});

showInputButton.addEventListener("click", () => {
  input.style.display = "block";
  icon.style.display = "block";
  input.focus();
});

changeButton.addEventListener("click", () => {
  const items = Array.from(list.querySelectorAll("li"));

  items.sort((a, b) => {
    const textA = a.querySelector("span").textContent.toLowerCase();
    const textB = b.querySelector("span").textContent.toLowerCase();

    if (isAscending) {
      return textA.localeCompare(textB);
    } else {
      return textB.localeCompare(textA);
    }
  });

  list.innerHTML = "";
  items.forEach((item) => list.appendChild(item));

  addRemoveIconEventListeners();
  updateListNumbers();

  isAscending = !isAscending;
  changeIcon.classList.toggle("fa-arrow-down-short-wide");
  changeIcon.classList.toggle("fa-arrow-up-short-wide");
});

function addRemoveIconEventListeners() {
  const removeIcons = list.querySelectorAll(".remove-icon");
  removeIcons.forEach((icon) => {
    icon.removeEventListener("click", removeItem);
    icon.addEventListener("click", removeItem);
  });
}

function removeItem(event) {
  const listElement = event.target.closest("li");
  listElement.remove();
  updateListNumbers();
}

function updateListNumbers() {
  const items = Array.from(list.querySelectorAll("li"));
  items.forEach((item, index) => {
    item.dataset.order = index + 1;
    const spanText = item.querySelector("span").textContent;
    item.innerHTML = `
      ${
        index + 1
      }. <span>${spanText}</span> <i class="fa-regular fa-circle-xmark remove-icon"></i>`;
  });
  itemCounter = items.length + 1;
  addRemoveIconEventListeners();
}