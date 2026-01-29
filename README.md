)

📝 To-Do List App (Vanilla JavaScript)

A clean, fast, and interactive To-Do List application built using HTML, CSS, and Vanilla JavaScript.
This app helps you manage daily tasks with features like add, edit, delete, filter, and persistent storage using localStorage.

🚀 Live Features

✨ Add Tasks

Prevents empty tasks

Prevents duplicate tasks

✏️ Edit Tasks

Double-click any task to edit

Save with Enter or when input loses focus

Prevents duplicate task names

✅ Mark as Complete / Pending

Click on a task to mark it completed

Visual distinction using styles

🗂️ Task Filters

All → Show all tasks

Completed → Show only completed tasks

Pending → Show only pending tasks

🗑️ Delete Tasks

Remove tasks instantly with a delete button

💾 Persistent Storage

Tasks are saved in localStorage

Data remains even after page refresh

🛠️ Built With

HTML5

CSS3

JavaScript (Vanilla JS)

Local Storage API

No frameworks. No libraries. Just pure JavaScript 💪

📂 Project Structure
📦 todo-app
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┣ 📜 script.js
 ┗ 📜 README.md

🧠 How It Works

Tasks are stored as objects:

{
  text: "Buy groceries",
  checked: false
}


All tasks are saved to localStorage

On page load, tasks are restored automatically

Editing is handled inline using an input field

Filters work by checking the task’s checked state

🖱️ How to Use

Type a task in the input box

Click Add to save the task

Click a task to mark it complete

Double-click a task to edit it

Use filter buttons to view tasks

Refresh the page — your tasks stay safe 😎

🌟 Future Improvements

⏰ Due dates

📱 Mobile responsiveness

🎨 Theme switch (Dark / Light)

🔔 Notifications

📊 Task statistics

🙌 Author

Mohammed
Frontend Developer in progress 🚀
Learning by building real projects 💻

📜 License

This project is open-source and free to use.
