const products = [
  {
    id: 1,
    title: "Звёздный Бейдж",
    description: "Для лучших участников",
    price: 100,
    img: "img/9c9.jpg",
  },
  {
    id: 2,
    title: "Огненный Бейдж",
    description: "За 10 побед подряд",
    price: 150,
    img: "https://cdn-icons-png.flaticon.com/512/889/889415.png",
  },
  {
    id: 3,
    title: "Кубок Чемпиона",
    description: "Подарок самому храброму",
    price: 300,
    img: "https://cdn-icons-png.flaticon.com/512/2272/2272567.png",
  },
  {
    id: 4,
    title: "Сердце поддержки",
    description: "Подарок другу или преподавателю",
    price: 75,
    img: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
  },
  {
    id: 5,
    title: "Медаль Победителя",
    description: "За победу в турнире",
    price: 120,
    img: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
  {
    id: 6,
    title: "Алмазный Бейдж",
    description: "Эксклюзивный статус",
    price: 500,
    img: "https://cdn-icons-png.flaticon.com/512/744/744922.png",
  },
  {
    id: 7,
    title: "Трофей Чемпиона",
    description: "Для сильнейших игроков",
    price: 280,
    img: "https://cdn-icons-png.flaticon.com/512/2583/2583352.png",
  },
  {
    id: 8,
    title: "Лента Победы",
    description: "Память о достижениях",
    price: 90,
    img: "https://cdn-icons-png.flaticon.com/512/2594/2594541.png",
  },
  {
    id: 9,
    title: "Ракетный Бейдж",
    description: "Быстрый старт",
    price: 130,
    img: "https://cdn-icons-png.flaticon.com/512/2150/2150507.png",
  },
  {
    id: 10,
    title: "Звезда Удачи",
    description: "Подарок на удачу",
    price: 85,
    img: "https://cdn-icons-png.flaticon.com/512/616/616489.png",
  },
  {
    id: 11,
    title: "Корона Лидера",
    description: "Для главных игроков",
    price: 350,
    img: "https://cdn-icons-png.flaticon.com/512/616/616451.png",
  },
  {
    id: 12,
    title: "Бейдж Молния",
    description: "Молниеносные рефлексы",
    price: 140,
    img: "https://cdn-icons-png.flaticon.com/512/4144/4144774.png",
  },
  {
    id: 13,
    title: "Золотая Медаль",
    description: "Лучший из лучших",
    price: 400,
    img: "https://cdn-icons-png.flaticon.com/512/616/616491.png",
  },
  {
    id: 14,
    title: "Подарочная Коробка",
    description: "Сюрприз для друзей",
    price: 60,
    img: "https://cdn-icons-png.flaticon.com/512/481/481540.png",
  },
  {
    id: 15,
    title: "Щит Защиты",
    description: "Защита аккаунта",
    price: 110,
    img: "https://cdn-icons-png.flaticon.com/512/1354/1354956.png",
  },
  {
    id: 16,
    title: "Цветок Дружбы",
    description: "Подарок с теплом",
    price: 70,
    img: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
];


function renderProducts() {
  const container = document.getElementById("shop");
  container.innerHTML = "";

  products.forEach(({ id, title, description, price, img }) => {
    const card = document.createElement("div");
    card.className = "item-card";

    card.innerHTML = `
      <img src="${img}" alt="${title}" />
      <h3>${title}</h3>
      <p>${description}</p>
      <button class="buy-btn" data-id="${id}">Купить за ${price} 🪙</button>
    `;

    container.appendChild(card);
  });

  container.querySelectorAll(".buy-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      alert(`Вы купили товар: ${products.find(p => p.id == id).title}! 🎉`);
    });
  });
}

window.addEventListener("DOMContentLoaded", renderProducts);
