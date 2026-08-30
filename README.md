# DDoS-course

Учебный веб-проект (мультистраничный сайт-платформа с курсами, магазином, задачами и "секретным чатом"). Чистый HTML/CSS/JS, без сборщика.

## Структура

```
.
├── index.html              # точка входа (дашборд)
├── pages/                  # остальные страницы сайта
│   ├── courses.html
│   ├── first-course.html
│   ├── library.html
│   ├── profile.html
│   ├── secret.html
│   ├── secret-page.html
│   ├── code-b.html
│   ├── shop.html
│   ├── task.html
│   └── text.html
└── assets/
    ├── css/                # по одному файлу стилей на страницу
    ├── js/                 # по одному файлу скрипта на страницу
    ├── img/                # изображения, включая img/tutors/
    └── icons/secret-chat/  # иконки для secret-page
```

Раньше все `.html/.css/.js` вперемешку лежали в корне, часть — в camelCase (`SecretPage.html`, `codeB.js`), часть — с пробелами в имени папки (`icons for secret chat`). Сейчас единый стиль именования (kebab-case), страницы отделены от ассетов, `index.html` остаётся в корне (нужно для GitHub Pages).

## Как запустить

Просто открыть `index.html` в браузере, либо поднять локальный сервер (нужен, если браузер блокирует относительные пути):

```bash
python3 -m http.server 8000
# затем http://localhost:8000
```

## Известные особенности (перенесены как есть, не исправлял логику)

- `pages/profile.html` содержит ссылку на несуществующий `homeru.html` — была в исходном проекте.
- `assets/js/main.js` не подключён ни к одной странице — похоже, дублирует логику, встроенную инлайн в `index.html`. Оставлен на случай, если понадобится.
- `pages/text.html` — заглушка ("Hello world"), похоже на неиспользуемый тестовый файл.
- Несколько страниц (`courses.html`, `library.html`) имели одинаковый `<title>Book UI Clone</title>` — переименовал в осмысленные заголовки (Courses, Library, Profile, Secret Chat).
- `.DS_Store` файлы удалены и добавлены в `.gitignore`.
