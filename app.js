const addBtn = document.getElementById("button");
const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("listContainer");

const allBtn = document.getElementById("all");
const complete = document.getElementById("complete");
const pending = document.getElementById("pending");


// ===============================
// ADD TASK
// ===============================
addBtn.addEventListener("click", function () {
    const textTask = inputBox.value.trim();

    if (textTask === "") {
        alert("Write something. Task should not be empty.");
        return;
    }

    if (isDuplicateTask(textTask)) {
        alert("This task already exists.");
        return;
    }

    addTask(textTask, false);
    inputBox.value = "";
    saveData();
});


// ===============================
// CREATE TASK
// ===============================
function addTask(text, checked) {
    const li = document.createElement("li");
    li.textContent = text;

    if (checked) {
        li.classList.add("checked");
    }

    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.classList.add("delete");

    li.appendChild(deleteBtn);
    listContainer.appendChild(li);
}


// ===============================
// CLICK & DELETE
// ===============================
listContainer.addEventListener("click", function (e) {
    const li = e.target.closest("li");
    if (!li) return;

    // ❗ prevent click actions while editing
    if (li.querySelector("input")) return;

    // toggle complete
    if (e.target === li) {
        li.classList.toggle("checked");
        saveData();
    }

    // delete task
    if (e.target.classList.contains("delete")) {
        li.remove();
        saveData();
    }
});


// ===============================
// DOUBLE CLICK → EDIT
// ===============================
listContainer.addEventListener("dblclick", function (e) {
    const li = e.target.closest("li");
    if (!li) return;

    startEdit(li);
});


// ===============================
// START EDIT
// ===============================
function startEdit(li) {
    if (li.querySelector("input")) return;

    const oldText = li.firstChild.nodeValue;

    const input = document.createElement("input");
    input.type = "text";
    input.value = oldText;
    input.className = "edit-input";

    li.firstChild.nodeValue = "";
    li.insertBefore(input, li.firstChild);

    input.focus();

    // save on ENTER
    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            saveEdit(li, input, oldText);
        }
    });

    // save on BLUR
    input.addEventListener("blur", function () {
        saveEdit(li, input, oldText);
    });
}


// ===============================
// SAVE EDIT
// ===============================
function saveEdit(li, input, oldText) {
    const newText = input.value.trim();

    if (newText === "") {
        li.firstChild.nodeValue = oldText;
    } 
    else if (newText !== oldText && isDuplicateTask(newText)) {
        alert("Task already exists.");
        li.firstChild.nodeValue = oldText;
    } 
    else {
        li.firstChild.nodeValue = newText;
        saveData();
    }

    input.remove();
}


// ===============================
// DUPLICATE CHECK
// ===============================
function isDuplicateTask(text) {
    const tasks = listContainer.querySelectorAll("li");

    for (let li of tasks) {
        if (li.firstChild.nodeValue.toLowerCase() === text.toLowerCase()) {
            return true;
        }
    }
    return false;
}


// ===============================
// FILTER TASKS
// ===============================
allBtn.addEventListener("click", () => filterTasks("all"));
complete.addEventListener("click", () => filterTasks("complete"));
pending.addEventListener("click", () => filterTasks("pending"));

function filterTasks(type) {
    const tasks = listContainer.querySelectorAll("li");

    tasks.forEach(li => {
        const isCompleted = li.classList.contains("checked");

        if (type === "all") {
            li.style.display = "flex";
        } 
        else if (type === "complete") {
            li.style.display = isCompleted ? "flex" : "none";
        } 
        else if (type === "pending") {
            li.style.display = !isCompleted ? "flex" : "none";
        }
    });
}


// ===============================
// SAVE TO LOCAL STORAGE
// ===============================
function saveData() {
    const tasks = [];

    listContainer.querySelectorAll("li").forEach(li => {
        tasks.push({
            text: li.firstChild.nodeValue,
            checked: li.classList.contains("checked")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// ===============================
// LOAD FROM LOCAL STORAGE
// ===============================
function showData() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    listContainer.innerHTML = "";

    tasks.forEach(task => addTask(task.text, task.checked));
}


// ===============================
// INIT
// ===============================
window.addEventListener("DOMContentLoaded", showData);
