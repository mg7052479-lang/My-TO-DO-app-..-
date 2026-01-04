const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("listContainer");
const button = document.getElementById("button");

button.addEventListener("click", function () {
    const taskText = inputBox.value.trim();
    if (!taskText) {
        alert("Please write something");
        return;
    }
    addTask(taskText);
    inputBox.value = "";
    saveData();
});


function addTask(taskText, checked = false) {
    const li = document.createElement("li");

    const textNode = document.createTextNode(taskText);
    li.appendChild(textNode);

    const span = document.createElement("span");
    span.innerHTML = "🗑️";
    li.appendChild(span);

    if (checked) li.classList.add("checked");

    listContainer.appendChild(li);
}

 listContainer.addEventListener("click", function (e) {
    const li = e.target.tagName === "LI" ? e.target : e.target.parentElement;
    if (e.target.tagName === "LI") {
        li.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        li.remove();
        saveData();
    }
});

listContainer.addEventListener("dblclick", function (e) {
    if (e.target.tagName !== "LI") return;

    const li = e.target;
    const span = li.querySelector("span"); 
    const textNode = li.firstChild;
    const oldText = textNode.nodeValue;

    const input = document.createElement("input");
    input.type = "text";
    input.value = oldText;

    li.replaceChild(input, textNode);
    li.appendChild(span);
    input.focus();

    function saveEdit() {
        const newText = input.value.trim();
        li.replaceChild(document.createTextNode(newText || oldText), input);
        saveData();
    }

 
    input.addEventListener("keyup", function (e) {
        if (e.key === "Enter") saveEdit();
    });

    input.addEventListener("blur", saveEdit);
});

function saveData() {
    const tasks = [];
    listContainer.querySelectorAll("li").forEach(li => {
        const text = li.firstChild.nodeValue;
        const checked = li.classList.contains("checked");
        tasks.push({ text, checked });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showData() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    listContainer.innerHTML = ""; // clear list
    tasks.forEach(task => addTask(task.text, task.checked));
}

showData();
