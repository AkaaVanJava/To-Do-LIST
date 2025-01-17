const userInput = document.getElementById("user-input");
let addItem = document.getElementById("addItem");
const item = document.getElementById("item");
const body = document.body;
addItem.addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = userInput.value;
  item.appendChild(li);
  let span = document.createElement("span");
  span.textContent = "X";
  li.appendChild(span);
  userInput.value = "";

  li.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  span.addEventListener("click", function () {
    span.parentElement.remove();
  });
});
