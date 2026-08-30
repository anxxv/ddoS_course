const courses = [
  { title: 'Курс по безопасности', desc: 'Научись защищать свои данные и распознавать угрозы.', progress: 60, category: 'eBooks' },
  { title: 'Курс по Frontend', desc: 'HTML, CSS и JavaScript — с нуля до первого сайта.', progress: 30, category: 'new' },
  { title: 'Анти-DDoS', desc: 'теория и практика защиты', progress: 0, category: 'bestseller' },
  { title: 'История IT', desc: 'Изучение развития компьютерных технологий.', progress: 50, category: 'fiction' },
  { title: 'SQL: основы', desc: 'Работа с базами данных на практике.', progress: 25, category: 'romance' },
  { title: 'JavaScript Pro', desc: 'Продвинутый курс по JS с проектами.', progress: 90, category: 'audio' },
  { title: 'Безопасность в интернете', desc: 'фишинг, пароли, VPN.', progress: 45, category: 'eBooks' },
  { title: 'Rust', desc: 'быстрый старт для начинающих', progress: 70, category: 'new' },
  { title: 'Алгоритмы и структуры данных', desc: 'Базовая теория и задачи на собеседования.', progress: 55, category: 'bestseller' },
  { title: 'История языков программирования', desc: 'От Фортрана до Python — всё, что нужно знать.', progress: 40, category: 'fiction' },
  { title: 'Работа с PostgreSQL', desc: 'Изучаем PostgreSQL от простого к сложному.', progress: 20, category: 'romance' },
  { title: 'Курс по React', desc: 'Современный фреймворк для создания интерфейсов.', progress: 35, category: 'audio' },
  { title: 'Топ 10 курсов по кибербезопасности', desc: 'Компиляция лучших курсов для новичков и профи.', progress: 90, category: 'fantasy' },
  { title: 'Machine Learning Basics', desc: 'ML модели, sklearn и введение в нейросети.', progress: 15, category: 'fantasy' },
  { title: 'Git и GitHub', desc: 'Контроль версий, pull requests и совместная работа.', progress: 65, category: 'eBooks' },
  { title: 'Docker с нуля', desc: 'Контейнеризация приложений на практике.', progress: 10, category: 'bestseller' }
];


function renderCourses(list) {
  const container = document.getElementById('courseContainer');
  container.innerHTML = '';
  list.forEach(course => {
    const div = document.createElement('div');
    div.className = 'course-card';
    div.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.desc}</p>
      <div class="progress-bar">
        <div class="progress" style="width: ${course.progress}%"></div>
      </div>
      <p class="progress-text">Пройдено: ${course.progress}%</p>
      <button class="btn" onclick="openModal('${course.title}', '${course.desc}')">Начать</button>
    `;
    container.appendChild(div);
  });
}

function filterCategory(category) {
  document.querySelectorAll('.category').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');

  if (category === 'all') {
    renderCourses(courses);
  } else {
    const filtered = courses.filter(c => c.category === category);
    renderCourses(filtered);
  }
}

function searchCourses() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const filtered = courses.filter(course =>
    course.title.toLowerCase().includes(input) || course.desc.toLowerCase().includes(input)
  );
  renderCourses(filtered);
}

function openModal(title, desc) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDesc').innerText = desc;
  document.getElementById('courseModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('courseModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => renderCourses(courses));
