document.addEventListener('DOMContentLoaded', () => {
  document
      .getElementById('myDropdown')
      .addEventListener('input', handleSelect);
});

function handleSelect(ev) {
  let select = ev.target;

  console.log(select.value);

  let list = document.getElementById(select.value);

}

function handleData(ev) {
  let theInput = ev.target;
}
//////////////////////////////////////////// Input of Data ////////////////////////////////////////////
const inputField = document.querySelector(".input-field textarea"),
  groceryLists = document.querySelector(".groceryLists"),
  pendingNum = document.querySelector(".pending-num"),
  pendingList = document.querySelector(".groceryLists"),
  clearButton = document.querySelector(".clear-button"),
  saveButton = document.querySelector(".save-button");

//Calls the function while adding, deleting and checking-unchecking the task
function allGroceries() {
  let groceries = document.querySelectorAll(".pending");

  //If the grocery list's length is 0 then text content will be "no", if not then the value will be task's length
  pendingNum.textContent = groceries.length === 0 ? "no" : groceries.length;

  let allLists = document.querySelectorAll(".list");
  if (allLists.length > 0) {
    groceryLists.style.marginTop = "20px";
    clearButton.style.pointerEvents = "auto";
    saveButton.style.pointerEvents = "auto";
    return;
  }
  groceryLists.style.marginTop = "0px";
  clearButton.style.pointerEvents = "none";
  saveButton.style.pointerEvents = "none";
}

//add task while we put value in text area and press enter
inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim();

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


//////////////////////////////////////////// Storage of Data ////////////////////////////////////////////
saveButton.addEventListener("click", () => {
  const blob = new Blob([`----------------Your Grocery List----------------${pendingList.textContent.replaceAll()}\n------------------------------------------------- `], {type: Text});
  const fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "Grocery List";
  link.href = fileUrl;
  link.click();
});

function changeFunc() {
  var selectBox = document.getElementById("myDropdown");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  return selectedValue
}


function burgerIngredients() {
  var selectedValue=changeFunc()
  if (selectedValue === "Classic Burgers") {
    const burgerTextContent = ["Olive Oil", "Onion", "Beef Steak Mince", "Eggs", "Cheddar", "Bread Rolls", "Lettuce", "Tomato"];
    groceryLists.innerHTML = "";
    for (i in burgerTextContent) {
    let liTag = ` <li class="list pending" onclick="handleStatus(this)">
    <input type="checkbox" />
    <span class="task">${burgerTextContent[i]}</span>
    <i class="uil uil-trash" onclick="deleteTask(this)"></i>
    </li>`
    groceryLists.insertAdjacentHTML("beforeend", liTag);
    }
    allGroceries()
  }
}

function chickenIngredients() {
  var selectedValue=changeFunc()
  if (selectedValue === "Grilled Chicken") {
    const chickenTextContent = ["Teriyaki Sauce", "Lemons", "Fresh Garlic", "Sesame Oil", "Boneless Chicken Breast"];
    groceryLists.innerHTML = "";
    for (i in chickenTextContent) {
    let liTag = ` <li class="list pending" onclick="handleStatus(this)">
    <input type="checkbox" />
    <span class="task">${chickenTextContent[i]}</span>
    <i class="uil uil-trash" onclick="deleteTask(this)"></i>
    </li>`
    groceryLists.insertAdjacentHTML("beforeend", liTag);
    }
    allGroceries()
  }
}

function ramenIngredients() {
  var selectedValue=changeFunc()
  if (selectedValue === "Ramen Bowl") {
    const ramenTextContent = ["Sesame Oil", "Spring Onion", "Fresh Garlic", "Carrots", "Shiitake Mushrooms", "Cabbage", "Spinach", "Fresh Ginger", "Chicken Stock", "Eggs", "Ramen Noodles", "Chicken Breast", "Soy Sauce"];
    groceryLists.innerHTML = "";
    for (i in ramenTextContent) {
    let liTag = ` <li class="list pending" onclick="handleStatus(this)">
    <input type="checkbox" />
    <span class="task">${ramenTextContent[i]}</span>
    <i class="uil uil-trash" onclick="deleteTask(this)"></i>
    </li>`
    groceryLists.insertAdjacentHTML("beforeend", liTag);
    }
    allGroceries()
  }
}

function riceIngredients() {
  var selectedValue=changeFunc()
  if (selectedValue === "Egg Fried Rice") {
    const riceTextContent = ["Vegetable Oil", "Fresh Garlic", "White Rice", "Eggs", "Soy Sauce", "Oyster Sauce", "Sesame Oil", "Frozen Vegetables", "Butter", "Spring Onion"];
    groceryLists.innerHTML = "";
    for (i in riceTextContent) {
    let liTag = ` <li class="list pending" onclick="handleStatus(this)">
    <input type="checkbox" />
    <span class="task">${riceTextContent[i]}</span>
    <i class="uil uil-trash" onclick="deleteTask(this)"></i>
    </li>`
    groceryLists.insertAdjacentHTML("beforeend", liTag);
    }
    allGroceries()
  }
}

function tacoIngredients() {
  var selectedValue=changeFunc()
  if (selectedValue === "Traditional Tacoes") {
    const riceTextContent = ["Onion", "Peppers", "Olive Oil", "Fresh Garlic", "Paprika", "Cumin", "Minced Beef", "Beef Stock", "Taco Shells", "Tomatoes", "Coriander", "Avocados", "Lime"];
    groceryLists.innerHTML = "";
    for (i in riceTextContent) {
    let liTag = ` <li class="list pending" onclick="handleStatus(this)">
    <input type="checkbox" />
    <span class="task">${riceTextContent[i]}</span>
    <i class="uil uil-trash" onclick="deleteTask(this)"></i>
    </li>`
    groceryLists.insertAdjacentHTML("beforeend", liTag);
    }
    allGroceries()
  }
}

function toastIngredients() {
  var selectedValue=changeFunc()
  if (selectedValue === "Breakfast Toast") {
    const riceTextContent = ["Tomatoes", "Sourdough Bread", "Fresh Garlic", "Olive Oil", "Basil", "Black Pepper"];
    groceryLists.innerHTML = "";
    for (i in riceTextContent) {
    let liTag = ` <li class="list pending" onclick="handleStatus(this)">
    <input type="checkbox" />
    <span class="task">${riceTextContent[i]}</span>
    <i class="uil uil-trash" onclick="deleteTask(this)"></i>
    </li>`
    groceryLists.insertAdjacentHTML("beforeend", liTag);
    }
    allGroceries()
  }
}

//deleting all the groceries when the clear button is clicked.
clearButton.addEventListener("click", () => {
  groceryLists.innerHTML = "";
  allGroceries();
});