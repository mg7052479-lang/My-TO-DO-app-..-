
const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("listContainer");
const addBtn = document.getElementById("button");

const allBtn = document.getElementById("all");
const completeBtn = document.getElementById("complete");
const pendingBtn = document.getElementById("pending");

addBtn.addEventListener("click", () => {
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        alert("Please write something");
        return;
    }

    if (isDuplicateTask(taskText)) {
        alert("Task already exists");
        return;
    }

    addTask(taskText);
    inputBox.value = "";
    saveData();
});


function addTask(text, checked = false) {
    const li = document.createElement("li");

    
    li.appendChild(document.createTextNode(text));

    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "🗑️";
    li.appendChild(deleteBtn);

    if (checked) li.classList.add("checked");

    listContainer.appendChild(li);
}

listContainer.addEventListener("click", (e) => {
    const li = e.target.tagName === "LI"
        ? e.target
        : e.target.parentElement;

    if (e.target.tagName === "LI") {
        li.classList.toggle("checked");
        saveData();
    }

    if (e.target.tagName === "SPAN") {
        li.remove();
        saveData();
    }
});

listContainer.addEventListener("dblclick", (e) => {
    if (e.target.tagName !== "LI") return;

    const li = e.target;
    const oldText = li.firstChild.nodeValue;
    const deleteBtn = li.querySelector("span");

    const input = document.createElement("input");
    input.type = "text";
    input.value = oldText;

    li.replaceChild(input, li.firstChild);
    li.appendChild(deleteBtn);
    input.focus();

    function saveEdit() {
        const newText = input.value.trim() || oldText;
        li.replaceChild(document.createTextNode(newText), input);
        saveData();
    }

    input.addEventListener("keyup", e => {
        if (e.key === "Enter") saveEdit();
    });

    input.addEventListener("blur", saveEdit);
});

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

function showData() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    listContainer.innerHTML = "";
    tasks.forEach(task => addTask(task.text, task.checked));
}


function isDuplicateTask(text) {
    const tasks = listContainer.querySelectorAll("li");

    for (let li of tasks) {
        if (li.firstChild.nodeValue.toLowerCase() === text.toLowerCase()) {
            return true;
        }
    }
    return false;
}

allBtn.addEventListener("click", () => filterTasks("all"));
completeBtn.addEventListener("click", () => filterTasks("complete"));
pendingBtn.addEventListener("click", () => filterTasks("pending"));

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

showData();
