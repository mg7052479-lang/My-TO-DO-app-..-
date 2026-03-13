// // const inputBox = document.getElementById ("inputbox");
// // const listContainer = document.getElementById ("listContainer");
// // const button = document.getElementById ("button")


// // button.addEventListener('click',  function () {
// //     if (inputBox.value === "" ){
// //         alert("Please Write something");
// //     }else {
// //         let li = document.createElement('li');
// //         li.innerHTML = inputBox.value ;
// //         listContainer.appendChild(li);
// //         let span = document.createElement("span");
// //         span.innerHTML = ("🗑️");     
// //         li.appendChild(span);
// //     }
// //     inputBox.value = '';
// //         saveData();         
        
// // });

// // listContainer.addEventListener("click", function (e){
// //     if (e.target.tagName === "LI"){
// //         e.target.classList.toggle("checked")
// //         saveData();
// //     }
// //     else if (e.target.tagName === "SPAN"){
// //         e.target.parentElement.remove();
// //         saveData();
// //     }
// // }, false);

// // function saveData(){
// //     localStorage.setItem("data", listContainer.innerHTML);
// // }

// // function showData (){
// //     listContainer.innerHTML = localStorage.getItem("data") ;
// // }
// // showData();

// // // listContainer.addEventListener("dblclick", function (){
// // //         const oldText = li.innerText;

// // //         const input = document.createElement("input");
// // //         input.value = oldText;
        
// // //         li.innerText = "";
// // //         li.appendChild(input);
// // //         input.focus();

// // //         input.addEventListener("keyup",function(e){
// // //             if (e.key === "Enter"){
// // //                 saveData();
// // //             }
// // //         });
// // // });


// // //         input.addEventListener("blur", saveData);

// // //         function saveData () {
// // //             const newText = input.value.trim();

// // //             li.innerText = newText === "" ? oldText: newText ;

// // //             saveData ();

// // //         }

// // // li.appendChild(li);
// // // saveData();

// // listContainer.addEventListener("dblclick", function (e) {
// //     if (e.target.tagName !== "LI") return;

// //     const li = e.target;
// //     const oldText = li.innerText;

// //     const input = document.createElement("input");
// //     input.value = oldText;

// //     li.innerHTML = "";
// //     li.appendChild(input);
// //     input.focus();

// //     function saveEdit() {
// //         const newText = input.value.trim();
// //         li.innerText = newText === "" ? oldText : newText;
// //         saveData();
// //     }

// //     input.addEventListener("keyup", function (e) {
// //         if (e.key === "Enter") saveEdit();
// //     });

// //     input.addEventListener("blur", saveEdit);
// // });


// const inputBox = document.getElementById("inputbox");
// const listContainer = document.getElementById("listContainer");
// const button = document.getElementById("button");

// // ADD TASK
// button.addEventListener('click', function () {
//     if (inputBox.value === "") {
//         alert("Please write something");
//     } else {
//         addTask(inputBox.value);
//     }
//     inputBox.value = '';
//     saveData();
// });

// // FUNCTION TO ADD TASK (used for add + localStorage restore)
// function addTask(taskText) {
//     let li = document.createElement("li");

//     // Add text
//     let textNode = document.createTextNode(taskText);
//     li.appendChild(textNode);

//     // Add delete span
//     let span = document.createElement("span");
//     span.innerHTML = "🗑️";
//     li.appendChild(span);

//     listContainer.appendChild(li);
// }

// // CLICK HANDLER (CHECK / DELETE)
// listContainer.addEventListener("click", function (e) {
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle("checked");
//         saveData();
//     } else if (e.target.tagName === "SPAN") {
//         e.target.parentElement.remove();
//         saveData();
//     }
// });

// // DOUBLE CLICK TO EDIT (EVENT DELEGATION)
// listContainer.addEventListener("dblclick", function (e) {
//     if (e.target.tagName !== "LI") return;

//     const li = e.target;
//     const span = li.querySelector("span"); // keep delete icon
//     const oldText = li.firstChild.nodeValue; // only the text, not span

//     // CREATE INPUT
//     const input = document.createElement("input");
//     input.type = "text";
//     input.value = oldText;

//     // CLEAR LI AND APPEND INPUT + DELETE SPAN
//     li.innerHTML = "";
//     li.appendChild(input);
//     li.appendChild(span);
//     input.focus();

//     // SAVE FUNCTION
//     function saveEdit() {
//         const newText = input.value.trim();
//         li.firstChild.nodeValue = newText === "" ? oldText : newText; // update text only
//         saveData();
//     }

//     // SAVE ON ENTER
//     input.addEventListener("keyup", function (e) {
//         if (e.key === "Enter") saveEdit();
//     });

//     // SAVE ON CLICK OUTSIDE
//     input.addEventListener("blur", saveEdit);
// });

// // SAVE TO LOCAL STORAGE
// function saveData() {
//     localStorage.setItem("data", listContainer.innerHTML);
// }

// // SHOW DATA FROM LOCAL STORAGE
// function showData() {
//     if (localStorage.getItem("data")) {
//         listContainer.innerHTML = localStorage.getItem("data");
//     }
// }
// showData();

                         // This is the new clean code // 


// // ===== SELECT ELEMENTS =====
// const inputBox = document.getElementById("inputbox");
// const listContainer = document.getElementById("listContainer");
// const button = document.getElementById("button");

// // ===== ADD TASK =====
// button.addEventListener("click", function () {
//     const taskText = inputBox.value.trim();
//     if (!taskText) {
//         alert("Please write something");
//         return;
//     }
//     addTask(taskText);
//     inputBox.value = "";
//     saveData();
// });

// // Function to create a task in the DOM
// function addTask(taskText, checked = false) {
//     const li = document.createElement("li");

//     // Add text node
//     const textNode = document.createTextNode(taskText);
//     li.appendChild(textNode);

//     // Add delete span
//     const span = document.createElement("span");
//     span.innerHTML = "🗑️";
//     li.appendChild(span);

//     // Restore checked status
//     if (checked) li.classList.add("checked");

//     // Append li to list
//     listContainer.appendChild(li);
// }

// // ===== CLICK HANDLER (CHECK / DELETE) =====
// listContainer.addEventListener("click", function (e) {
//     const li = e.target.tagName === "LI" ? e.target : e.target.parentElement;
//     if (e.target.tagName === "LI") {
//         li.classList.toggle("checked");
//         saveData();
//     } else if (e.target.tagName === "SPAN") {
//         li.remove();
//         saveData();
//     }
// });

// // ===== DOUBLE-CLICK TO EDIT =====
// listContainer.addEventListener("dblclick", function (e) {
//     if (e.target.tagName !== "LI") return;

//     const li = e.target;
//     const span = li.querySelector("span"); // keep delete icon
//     const textNode = li.firstChild;
//     const oldText = textNode.nodeValue;

//     // Create input field
//     const input = document.createElement("input");
//     input.type = "text";
//     input.value = oldText;

//     // Replace text node with input, keep span
//     li.replaceChild(input, textNode);
//     li.appendChild(span);
//     input.focus();

//     // Save edit function
//     function saveEdit() {
//         const newText = input.value.trim();
//         li.replaceChild(document.createTextNode(newText || oldText), input);
//         saveData();
//     }

//     // Save on Enter
//     input.addEventListener("keyup", function (e) {
//         if (e.key === "Enter") saveEdit();
//     });

//     // Save on click outside
//     input.addEventListener("blur", saveEdit);
// });

// // ===== LOCAL STORAGE =====
// function saveData() {
//     const tasks = [];
//     listContainer.querySelectorAll("li").forEach(li => {
//         const text = li.firstChild.nodeValue;
//         const checked = li.classList.contains("checked");
//         tasks.push({ text, checked });
//     });
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function showData() {
//     const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
//     listContainer.innerHTML = ""; // clear list
//     tasks.forEach(task => addTask(task.text, task.checked));
// }

// // ===== INITIALIZE =====
// showData();


/* ===============================
   ELEMENT SELECTION
================================ */
const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("listContainer");
const addBtn = document.getElementById("button");

const allBtn = document.getElementById("all");
const completeBtn = document.getElementById("complete");
const pendingBtn = document.getElementById("pending");


/* ===============================
   ADD TASK
================================ */
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

    // Task text
    li.appendChild(document.createTextNode(text));

    // Delete button
    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "🗑️";
    li.appendChild(deleteBtn);

    if (checked) li.classList.add("checked");

    listContainer.appendChild(li);
}


/* ===============================
   CLICK EVENTS (CHECK / DELETE)
================================ */
listContainer.addEventListener("click", (e) => {
    const li = e.target.tagName === "LI"
        ? e.target
        : e.target.parentElement;

    // Toggle completed
    if (e.target.tagName === "LI") {
        li.classList.toggle("checked");
        saveData();
    }

    // Delete task
    if (e.target.tagName === "SPAN") {
        li.remove();
        saveData();
    }
});


/* ===============================
   EDIT TASK (DOUBLE CLICK)
================================ */
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


/* ===============================
   LOCAL STORAGE
================================ */
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


/* ===============================
   DUPLICATE CHECK
================================ */
function isDuplicateTask(text) {
    const tasks = listContainer.querySelectorAll("li");

    for (let li of tasks) {
        if (li.firstChild.nodeValue.toLowerCase() === text.toLowerCase()) {
            return true;
        }
    }
    return false;
}


/* ===============================
   FILTER TASKS
================================ */
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


/* ===============================
   INITIAL LOAD
================================ */
showData();


const addBtn = document.getElementById("button");
const inputbox = document.getElementById("inputbox");
const listContainer = document.getElementById("listContainer");




// filter buttons (kept as-is)
const allBtn = document.getElementById("all");
const complete = document.getElementById("complete");
const pending = document.getElementById("pending");

// ADD TASK
addBtn.addEventListener("click", function () {
    const textTask = inputbox.value.trim();

    if (textTask === "") {
        alert("write some task");
        return;
    }


    addTask(textTask, false);
    inputbox.value = "";
    saveData();
});

// CREATE TASK
function addTask(text, checked) {
    const li = document.createElement("li");
    li.textContent = text;

    if (checked) {
        li.classList.add("checked");
    }

    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "🗑️";
    li.appendChild(deleteBtn);

    listContainer.appendChild(li);
}

// CLICK HANDLER (toggle + delete)
listContainer.addEventListener("click", function (e) {
    const li = e.target.closest("li");
    if (!li) return;

    if (e.target.tagName === "SPAN") {
        li.remove();
    } else {
        li.classList.toggle("checked");
    }

    saveData();
});

// SAVE TO LOCALSTORAGE
function saveData() {
    const tasks = [];

    listContainer.querySelectorAll("li").forEach(li => {
        const text = li.firstChild.nodeValue;
        const checked = li.classList.contains("checked");
        tasks.push({ text, checked });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// LOAD FROM LOCALSTORAGE
function showData() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    listContainer.innerHTML = "";

    tasks.forEach(task => addTask(task.text, task.checked));
}