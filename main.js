/* ================================= */
/* PROJECT 1 : TO DO LIST CRUD */
/* ================================= */

let tasks = [];

function addTask(){

    const input = document.getElementById("taskInput");

    if(input.value.trim() === ""){
        alert("Enter Task");
        return;
    }

    const task = {
        id: Date.now(),
        text: input.value
    };

    tasks.push(task);

    input.value = "";

    renderTasks();
}

function renderTasks(){

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(task => {

        const div = document.createElement("div");

        div.className = "task";

        div.innerHTML = `
            <span>${task.text}</span>

            <div class="btns">
                <button onclick="editTask(${task.id})">
                    Edit
                </button>

                <button onclick="deleteTask(${task.id})">
                    Delete
                </button>
            </div>
        `;

        taskList.appendChild(div);
    });
}

function deleteTask(id){

    tasks = tasks.filter(task => task.id !== id);

    renderTasks();
}

function editTask(id){

    let newText = prompt("Edit Task");

    tasks = tasks.map(task => {

        if(task.id === id){
            task.text = newText;
        }

        return task;
    });

    renderTasks();
}



/* ================================= */
/* PROJECT 2 : COLOR PALETTE */
/* ================================= */

function randomColor(){

    let letters = "0123456789ABCDEF";

    let color = "#";

    for(let i = 0; i < 6; i++){

        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function generatePalette(){

    const palette = document.getElementById("palette");

    palette.innerHTML = "";

    for(let i = 0; i < 5; i++){

        const color = randomColor();

        const box = document.createElement("div");

        box.className = "color-box";

        box.style.background = color;

        box.innerHTML = color;

        box.addEventListener("click", function(){

            navigator.clipboard.writeText(color);

            alert("Copied : " + color);
        });

        palette.appendChild(box);
    }
}

generatePalette();



/* ================================= */
/* PROJECT 3 : TABLE GENERATOR */
/* ================================= */

function generateTable(){

    const data = [

        {
            id: 1,
            name: "Ahmed",
            role: "Developer",
            status: "Active"
        },

        {
            id: 2,
            name: "Ibrahim",
            role: "Designer",
            status: "Pending"
        },

        {
            id: 3,
            name: "Ali",
            role: "Manager",
            status: "Inactive"
        }
    ];

    let table = `

        <table>

            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
            </tr>
    `;

    data.forEach(user => {

        table += `

            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.role}</td>
                <td>${user.status}</td>
            </tr>
        `;
    });

    table += `</table>`;

    document.getElementById("tableContainer").innerHTML = table;
}

generateTable();