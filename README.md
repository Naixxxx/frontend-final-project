# YouTalk — блог и статья

Готовая учебная вёрстка двух страниц по макету YouTalk.

## Страницы

- `blog.html` / `index.html` — страница блога.
- `article.html` — страница статьи.

## Что реализовано

- семантическая HTML-разметка: `header`, `main`, `footer`, `section`, `article`, `aside`, `nav`;
- БЭМ-подход в названиях классов;
- адаптивная сетка на CSS Grid и Flexbox;
- мобильное меню с `aria-expanded`;
- псевдоклассы и псевдоэлементы;
- `alt` для изображений;
- SVG-иконки и PNG-изображения;
- адаптив под desktop, планшеты и мобильные устройства.

## Запуск

Откройте `blog.html` или `article.html` в браузере. Можно запустить локальный сервер:

```bash
python -m http.server 8080
```

После запуска:

- http://localhost:8080/blog.html
- http://localhost:8080/article.html

## Структура

```text
youtalk-blog/
├── index.html
├── blog.html
├── article.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── assets/
    ├── icons/
    └── images/
```
