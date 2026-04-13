# 🎉 Асемнің Туған Күн Кешіне Шақыру

React + Vite арқылы жасалған әдемі, романтикалық туған күн шақырту сайты.

## ✨ Ерекшеліктер

- 🎨 Минималист және романтикалық дизайн
- 📱 Мобильдіге бейім (Responsive)
- ❤️ Жүрекшелер құлайтын анимация
- 📸 Фотосуреттер галереясы (Swiper.js)
- 🎬 Видео блок
- ⏰ Мерекеге қалған уақыт санауышы
- 📍 Мереке мәліметтері (Google Maps)
- ✅ RSVP жүйесі (localStorage)

## 🚀 Бастау

### Орнату

```bash
npm install
```

### Дәйексөз режимінде іске қосу

```bash
npm run dev
```

### Production үшін құрастыру

```bash
npm run build
```

## 📁 Жоба құрылымы

```
/src
  /assets
    /images      → Фотосуреттер (Еркеназ жүктейді)
    /videos      → Видео файлдар (Еркеназ жүктейді)
  /components
    Hero.jsx           → Басты бөлім (typewriter анимация)
    Message.jsx        → Романтикалық хабарлама
    Gallery.jsx        → Фотосуреттер галереясы
    VideoBlock.jsx     → Видео блок
    EventDetails.jsx   → Мереке мәліметтері
    Countdown.jsx      → Уақыт санауышы
    RSVP.jsx           → Келу/Келмеу формасы
  App.jsx
  main.jsx
```

## 📝 Конфигурация

### 1. Фотосуреттерді қосу

1. Фотосуреттерді `/src/assets/images/` папкасына қойыңыз
2. `src/components/Gallery.jsx` файлын ашыңыз
3. Фотосуреттерді import етіп, `images` массивіне қосыңыз

### 2. Видеоны қосу

1. Видео файлын `/src/assets/videos/` папкасына қойыңыз
2. `src/components/VideoBlock.jsx` файлын ашыңыз
3. Видеоны import етіп, `hasVideo` мәнін `true` етіңіз

### 3. Мереке мәліметтерін жаңарту

`src/components/EventDetails.jsx` файлында:

- Күні (`date`)
- Уақыты (`time`)
- Орны (`location`, `address`)
- Google Maps URL (`mapUrl`)

### 4. Мереке күнін жаңарту

`src/components/Countdown.jsx` файлында `eventDate` мәнін өзгертіңіз.

## 🛠️ Технологиялар

- **React** - UI фреймворк
- **Vite** - Build инструменті
- **TailwindCSS** - Стильдеу
- **Framer Motion** - Анимациялар
- **Swiper.js** - Галерея слайдері
- **Lucide React** - Иконкалар
- **Google Fonts** - Poppins & Playfair Display

## 📄 Лицензия

Арнайы Асемге арналған ❤️

---

Made with ❤️ for Асем 🎉
