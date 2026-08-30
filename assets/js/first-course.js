const chapters = [
  {
    title: "1. Введение",
    lessons: [
      {
        title: "Что такое DDoS",
        content: `
          <p>DDoS (Distributed Denial of Service) — распределённая атака, при которой множество устройств направляют запросы к одному ресурсу, чтобы перегрузить его и сделать недоступным.</p>
          <p>Часто используется ботнетами — заражёнными компьютерами, объединёнными в сеть.</p>
        `
      },
      {
        title: "Цели и последствия",
        content: `
          <p>Цели DDoS могут быть разными: шантаж, конкуренция, политика. Последствия — от недоступности до потери денег и репутации.</p>
        `
      }
    ]
  },
  {
    title: "2. Типы атак",
    lessons: [
      {
        title: "UDP Flood",
        content: `
          <p>UDP flood — атака, при которой атакующий отправляет большое количество UDP-пакетов на случайные порты, вызывая перегрузку системы откликами ICMP.</p>
        `
      },
      {
        title: "SYN Flood",
        content: `
          <p>SYN flood — атака на механизм установки TCP-соединения, при которой отправляются SYN-запросы без завершения "рукопожатия".</p>
        `
      }
    ]
  },
  {
    title: "3. Практика защиты",
    lessons: [
      {
        title: "Cloudflare",
        content: `
          <p>Cloudflare работает как обратный прокси, фильтрует трафик, скрывает IP сервера и применяет защиту на базе машинного обучения.</p>
        `
      },
      {
        title: "AWS Shield",
        content: `
          <p>AWS Shield — сервис от Amazon, предлагающий базовую и расширенную защиту от DDoS с автоматическими мерами реагирования.</p>
        `
      }
    ]
  },
  {
    title: "4. Финальный тест",
    lessons: [
      {
        title: "Квиз",
        content: `
          <form id="quizForm" onsubmit="return checkQuiz()">
            <p><b>1. Что делает атака UDP Flood?</b></p>
            <label><input type="radio" name="q1" value="1"> Перегружает сеть большим числом UDP-пакетов</label><br>
            <label><input type="radio" name="q1" value="0"> Захватывает сервер через SSH</label><br>
            <label><input type="radio" name="q1" value="0"> Загружает вредоносный код</label><br><br>

            <p><b>2. Что делает SYN Flood?</b></p>
            <label><input type="radio" name="q2" value="0"> Отправляет HTTP-запросы</label><br>
            <label><input type="radio" name="q2" value="1"> Отправляет незавершённые TCP-запросы</label><br>
            <label><input type="radio" name="q2" value="0"> Загружает SQL-инъекции</label><br><br>

            <p><b>3. Как Cloudflare помогает в защите?</b></p>
            <label><input type="radio" name="q3" value="1"> Скрывает IP, фильтрует трафик</label><br>
            <label><input type="radio" name="q3" value="0"> Отключает интернет</label><br>
            <label><input type="radio" name="q3" value="0"> Сканирует на вирусы</label><br><br>

            <button type="submit">Проверить ответы</button>
            <p id="quizResult" style="margin-top: 15px; font-weight: bold;"></p>
          </form>
        `
      }
    ]
  }
];

let flatLessons = [];
chapters.forEach(ch => flatLessons.push(...ch.lessons));
let currentLessonIndex = 0;

function renderLesson() {
  const lesson = flatLessons[currentLessonIndex];
  document.getElementById("lessonContent").innerHTML = `
    <h2>${lesson.title}</h2>
    <div>${lesson.content}</div>
  `;

  const menu = document.getElementById("lessonMenu");
  menu.innerHTML = "";
  let counter = 0;
  chapters.forEach((chapter, chIndex) => {
    const titleLi = document.createElement("li");
    titleLi.textContent = chapter.title;
    titleLi.style.fontWeight = "bold";
    titleLi.style.marginTop = chIndex > 0 ? "15px" : "0";
    menu.appendChild(titleLi);

    chapter.lessons.forEach((lesson, idx) => {
      const li = document.createElement("li");
      li.textContent = `– ${lesson.title}`;
      li.className = counter < currentLessonIndex ? "done" : "";
      if (counter === currentLessonIndex) li.classList.add("active");
      li.onclick = () => {
        currentLessonIndex = counter;
        renderLesson();
      };
      menu.appendChild(li);
      counter++;
    });
  });
}

function nextLesson() {
  if (currentLessonIndex < flatLessons.length - 1) {
    currentLessonIndex++;
    renderLesson();
  }
}

function prevLesson() {
  if (currentLessonIndex > 0) {
    currentLessonIndex--;
    renderLesson();
  }
}

function checkQuiz() {
  const form = document.forms['quizForm'];
  const result = document.getElementById('quizResult');

  let correct = 0;
  if (form.q1.value === "1") correct++;
  if (form.q2.value === "1") correct++;
  if (form.q3.value === "1") correct++;

  const total = 3;
  const score = Math.round((correct / total) * 100);

  if (correct === total) {
    result.innerText = `✅ Отлично! Все ${total} ответов верны! (${score}%)`;
    result.style.color = "#7fff7f";
  } else {
    result.innerText = `❌ ${correct} из ${total} правильных. Попробуй ещё раз. (${score}%)`;
    result.style.color = "#ff7070";
  }

  return false;
}

renderLesson();
