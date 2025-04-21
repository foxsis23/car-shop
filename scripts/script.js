// Завдання 1
function userDialog() {
  let name = prompt("Як тебе звати?");
  let age = parseInt(prompt("Скільки тобі років?"));

  if (isNaN(age)) {
    return alert("Вік введено некоректно.");
  }

  for (let i = 0; i < 3; i++) {
    confirm(`Привіт, ${name}! Це повідомлення №${i + 1}`);
  }
}

function developerInfo(surname, name, position = "Студент") {
  console.log(`Розробник: ${surname} ${name}, Посада: ${position}`);
}

function compareStrings(str1, str2) {
  if (str1.length > str2.length) {
    alert(`Більший рядок: ${str1}`);
  } else if (str1.length < str2.length) {
    alert(`Більший рядок: ${str2}`);
  } else {
    alert("Рядки однакової довжини.");
  }
}

//Завдання 2

document
  .getElementById("changeColorButton")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "#ffcc00";
    setTimeout(function () {
      document.body.style.backgroundColor = "";
    }, 30000);
  });

document
  .getElementById("redirectButton")
  .addEventListener("click", function () {
    location.href = "profile.html";
  });

let headerElement = document.getElementById("title");
headerElement.innerHTML = "Магазин авто";

let listItems = document.querySelectorAll("li");
listItems.forEach(function (item) {
  item.textContent = "Цей текст був змінений за допомогою querySelectorAll";
});

let tableText1 = document.getElementById("tableText1");
let tableText2 = document.getElementById("tableText2");

tableText1.innerHTML = "Чудовий американський спорткар";
tableText2.outerHTML = "<td id='newDiv'>Легендарний автомобіль з V8</td>";

document.getElementById("addText").addEventListener("click", () => {
  carTitle = document.createElement("h3");
  carTitle.textContent = "Alfa Romeo Giulia";
  document.body.appendChild(carTitle);

  let newTextNode = document.createTextNode(
    "це середньорозмірний седан, який був вперше представлений у 2015 році. Модель виготовляється італійським автопроизводником Alfa Romeo і здобула популярність завдяки своїй продуктивності, стилю та італійському дизайну. Вона відома своїми спортивними характеристиками та чудовою керованістю."
  );
  document.body.appendChild(newTextNode);
});

function addText() {
  document.write("<p>Це новий текст про автомобіль: Audi Q7</p>");
}

function addElement() {
  const newElement = document.createElement("p");
  newElement.classList.add("car-info");
  newElement.textContent = "Машина 3: Mercedes-Benz S-Class";
  document.body.appendChild(newElement);
}

function prependElement() {
  const newElement = document.createElement("p");
  newElement.classList.add("car-info");
  newElement.textContent = "Машина 5: Lamborghini Huracán";
  document.body.prepend(newElement);
}

function appendElement() {
  const newElement = document.createElement("p");
  newElement.classList.add("car-info");
  newElement.textContent = "Машина 6: Ferrari 488";
  document.body.append(newElement);
}

function replaceElement() {
  const newElement = document.createElement("p");
  newElement.classList.add("car-info");
  newElement.textContent = "Машина 7: Audi R8";
  const oldElement = document.querySelector(".car-info");
  oldElement.replaceWith(newElement);
}

function removeElement() {
  const elementToRemove = document.querySelector(".car-info");
  elementToRemove.remove();
}

userDialog();
developerInfo("Стрілець", "Ілля");
compareStrings("String 123", "String!");
