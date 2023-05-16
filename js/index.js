const wrapper = document.querySelector(".wrapper");
const entryForm = document.querySelector(".form");
const inputWindow = document.querySelector(".dataEntry");
const submitBtn = document.querySelector("#submit_btn");
const list = document.querySelector(".list");
const wrongReminder = document.querySelector("#wrong");

function createElement(event) {
  event.preventDefault();
  if (inputWindow.value.trim() === "") {
    inputWindow.value = "";
    wrongReminder.classList.add("wrong_entry");
    throw TypeError(
      "not correct Entry . Entry should be started from Symbol , not from space"
    );
  }
  wrongReminder.classList.remove("wrong_entry");
  const listItem = document.createElement("li");
  listItem.append(inputWindow.value);
  list.append(listItem);
  listItem.append(createDeleteBtn());
  inputWindow.value = "";
  return listItem;
}
function createDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.append("Delete");
  deleteBtn.classList.add("delete_btn");
  return deleteBtn;
}
function deleteElement(e) {
  if (e.target.tagName !== "BUTTON") {
    return;
  }
  e.target.parentElement.remove();
}
submitBtn.addEventListener("click", createElement);
list.addEventListener("click", deleteElement);
