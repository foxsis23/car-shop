const carDescriptionHandler = {
  handleEvent: function (event) {
    const carId = event.currentTarget.id;

    if (carId === "mustang") {
      document.getElementById("mustang-description").innerText =
        "Ford Mustang - легенда американської автомобільної промисловості!";
    } else if (carId === "camaro") {
      document.getElementById("camaro-description").innerText =
        "Chevrolet Camaro - стильний спорткар для любителів швидкості!";
    } else if (carId === "challenger") {
      document.getElementById("challenger-description").innerText =
        "Dodge Challenger - класичний масл-кар, який підкорює дороги.";
    }
  },
};

document
  .getElementById("mustang")
  .addEventListener("click", carDescriptionHandler);
document
  .getElementById("camaro")
  .addEventListener("click", carDescriptionHandler);
document
  .getElementById("challenger")
  .addEventListener("click", carDescriptionHandler);

function changeMustangDescription() {
  document.getElementById("mustang-description").innerText =
    "Ford Mustang - символ американської сили та швидкості. Вибір багатьох автолюбителів!";
}

function handleClickAttr() {
  alert(
    "Ford Mustang — автомобіль сегменту Pony car виробництва Ford Motor Company.Початковий варіант (1964/1965 — 1973 роки) був створений на базі агрегатів сімейного седана Ford Falcon. Перший серійний Mustang було випущено 9 березня 1964 року як модель 1965 року (також серед колекціонерів для Mustang, випущених до осені 1964 року, використовується неофіційне позначення «модель 1964 1/2»). 17 квітня автомобіль було представлено публіці в Нью-Йорку, а 19 квітня — показано всіма трьома американськими мережами телебачення. Просування автомобіля супроводжувалось активною рекламною кампанією. Це була одна з найвдаліших прем'єр в історії автомобілебудування. За перші 18 місяців було продано понад мільйон Мустангів.Як модель, Ford Mustang існує й досі, але за свою історію платформа і концепція автомобіля не раз зазнавала серйозних змін"
  );
}

function handleClickProp() {
  alert(
    "Dodge Challenger — спортивне купе компанії Dodge класу так званих Pony car, який з перервами в разноманітних модифікаціях виготовляється з 1970 року. Був призначений конкурувати з такими автомобілями, як Chevrolet Camaro, Ford Mustang, Mercury Cougar та Pontiac Firebird. І в цій якості, як і моделі конкурентів, також став «культовим авто»."
  );
}

function handleClickAddEventListener(event) {
  alert(
    "Chevrolet Camaro — автомобіль сегменту Pony car виробництва Chevrolet, який виготовляється з 1966 року.Виробництво було припинено в 2002 році і відновлено на новій технічній базі в 2009 році. Назва Camaro є похідним від французького camarade — друг, приятель.Виробництво шостого покоління Camaro завершилося в грудні 2023 року для 2024 модельного року."
  );
  console.log("Подія на елементі:", event.currentTarget);
}

document.getElementById("btn1").setAttribute("onclick", "handleClickAttr()");

document.getElementById("btn2").onclick = handleClickProp;

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", handleClickAddEventListener);

function removeHandler() {
  btn3.removeEventListener("click", handleClickAddEventListener);
  alert("Обробник видалено");
}

setTimeout(removeHandler, 5000);

function highlightListItem(event) {
  // Перевірка, чи це елемент списку
  if (event.target.tagName === "LI") {
    // Видаляємо підсвічування з усіх елементів
    const items = document.querySelectorAll("#car-list li");
    items.forEach((item) => item.classList.remove("highlight"));

    // Додаємо підсвічування до обраного елементу
    event.target.classList.add("highlight");
  }
}

function showMustang() {
  document.getElementById("output").innerHTML = `
      <h3>Ford Mustang</h3>
      <img src="https://i.infocar.ua/i/12/4276/1400x936.jpg" alt="Ford Mustang" width="300" />
    `;
}

function showCamaro() {
  document.getElementById("output").innerHTML = `
      <h3>Chevrolet Camaro</h3>
      <img src="https://i.infocar.ua/i/12/5759/1200x800.jpg" alt="Chevrolet Camaro" width="300" />
    `;
}

function showChallenger() {
  document.getElementById("output").innerHTML = `
      <h3>Dodge Challenger</h3>
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/2018_Dodge_Challenger_RT%2C_Front_Left%2C_09-25-2021.jpg" alt="Dodge Challenger" width="300" />
    `;
}

function handleMenuClick(event) {
  const action = event.target.getAttribute("data-action");

  if (action === "showMustang") {
    showMustang();
  } else if (action === "showCamaro") {
    showCamaro();
  } else if (action === "showChallenger") {
    showChallenger();
  }
}

const menu = document.getElementById("menu");
menu.addEventListener("click", handleMenuClick);

const cars = {
  tesla: {
    name: "Tesla Model S",
    image:
      "https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg",
    description:
      "Електричний спорткар з розгоном до 100 км/год за 2.5 секунди.",
    price: "$89,990",
  },
  porsche: {
    name: "Porsche 911",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Porsche_992_Turbo_IMG_3522.jpg/250px-Porsche_992_Turbo_IMG_3522.jpg",
    description: "Легендарний німецький спорткар з чудовими характеристиками.",
    price: "$100,000",
  },
  lamborghini: {
    name: "Lamborghini Aventador",
    image:
      "https://baza-gai.com.ua/catalog-images/lamborghini/aventador/model.jpg",
    description:
      "Італійський суперкар з неймовірним дизайном і потужним двигуном V12.",
    price: "$400,000",
  },
};

function addCarToList(carKey) {
  const car = cars[carKey];
  if (!car) return;

  const carItem = document.createElement("div");
  carItem.classList.add("car-item");
  carItem.innerHTML = `
      <img src="${car.image}" alt="${car.name}" class="car-image" />
      <div>
        <h3>${car.name}</h3>
        <p>${car.description}</p>
        <p><b>Ціна:</b> ${car.price}</p>
        <button class="delete-btn" data-delete="${carKey}">Видалити</button>
      </div>
    `;

  document.getElementById("car-container").appendChild(carItem);
}

document.addEventListener("click", function (event) {
  const carKey = event.target.dataset.car;
  if (carKey) {
    addCarToList(carKey);
  }

  const deleteKey = event.target.dataset.delete;
  if (deleteKey) {
    const items = document.querySelectorAll("#car-container .car-item");
    items.forEach((item) => {
      if (item.querySelector(".delete-btn").dataset.delete === deleteKey) {
        item.remove();
      }
    });
  }
});
