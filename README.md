## Project name

Habit Tracker

## Description

Habit tracker which could mesure what user did as habit records.

<img src="https://github.com/Jongwoop/habit_tracker/blob/main/screenshot.png" alt="screenshot" width="600px" />

## Stack used

HTML, CSS, JavaScript, React

## Main Function

1. Enable to add new habit via input box.
2. Enable to add or reduce the measures by clicking plus or minus button.
3. Enable to remove the habit by clicking delete button.
4. Appears unique habit numbers, whose measure is bigger than zero.

## Architecture

```
Habbit Tracker - react
├── public/          #static files
│   └── index.html   #html
│
├── src/             #project root
│   ├── components/
|   │   ├── habit.jsx
|   │   ├── habitAddForm.jsx
|   │   ├── habits.jsx
|   │   ├── navbar.jsx
|   │   └── simpleHabit.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
│
└── package.json
```
