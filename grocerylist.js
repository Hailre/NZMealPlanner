const inputField = document.querySelector(".input-field textarea"),
  groceryLists = document.querySelector(".groceryLists"),
  pendingNum = document.querySelector(".pending-num"),
  clearButton = document.querySelector(".clear-button");

//Calls the  function while adding, deleting and checking-unchecking the task
function allGroceries() {
  let groceries = document.querySelectorAll(".pending");

  //If the grocery list's length is 0 then text content will be "no", if not then the value will be task's length
  pendingNum.textContent = groceries.length === 0 ? "no" : groceries.length;

  let allLists = document.querySelectorAll(".list");
  if (allLists.length > 0) {
    groceryLists.style.marginTop = "20px";
    clearButton.style.pointerEvents = "auto";
    return;
  }
  groceryLists.style.marginTop = "0px";
  clearButton.style.pointerEvents = "none";
}

//add task while we put value in text area and press enter
inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim(); //trim fuction removes space of front and back of the inputed value

  //if enter button is clicked and inputed value length is greated than 0.
  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = ` <li class="list pending" onclick="handleStatus(this)">
          <input type="checkbox" />
          <span class="task">${inputVal}</span>
          <i class="uil uil-trash" onclick="deleteTask(this)"></i>
        </li>`;

    groceryLists.insertAdjacentHTML("beforeend", liTag); 
    inputField.value = ""; //removing value from input field
    allGroceries();
  }
});

//checking and unchecking the checkbox while we click on the task
function handleStatus(e) {
  const checkbox = e.querySelector("input");
  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle("pending");
  allGroceries();
}

//deleting task while we click on the delete icon.
function deleteTask(e) {
  e.parentElement.remove(); 
  allGroceries();
}

//deleting all the groceries when the clear button is clicked.
clearButton.addEventListener("click", () => {
  groceryLists.innerHTML = "";
  allGroceries();
});