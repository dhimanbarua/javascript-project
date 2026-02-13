const taskInputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const completedCounter = document.getElementById('completed-counter');
const uncompletedCounter = document.getElementById('uncompleted-counter');


// Complete Counter
function updatedCounter() {
    const completedTasks = document.querySelectorAll('.completed').length;
    const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = uncompletedTasks;

    completedCounter.textContent;
    uncompletedCounter.textContent;
}

// add task to the list
function addTask(){
    task = taskInputBox.value.trim();

    if (!task) {
        alert('Please list down task');
        console.log('No added Task');

        return;
    }

    const li = document.createElement('li');

    li.innerHTML = (`
        <label>
        <input type="checkbox">
        <span>${task}</span>
        </label>
        <span class="edit-btn">Edit</span>
        <span class="delete-btn">Delete</span>    
    `)

    listContainer.appendChild(li);

    // clear the input field
    taskInputBox.value = "  ";

    const inputCheckbox = li.querySelector('input');
    const editBtn = li.querySelector('.edit-btn');
    const deleteBtn = li.querySelector('.delete-btn');
    const taskSpan = li.querySelector('span');


    // strike out the completed task
    inputCheckbox.addEventListener("click", function () {
        li.classList.toggle("completed", inputCheckbox.checked);
        updatedCounter();
    });

    editBtn.addEventListener('click', function() {
        const update = prompt('Edit Task :', taskSpan.textContent);

        if (update !== null ) {
            taskSpan.textContent = update
            // console.log(update);
            updatedCounter();

        }
    });

    deleteBtn.addEventListener('click', function () {
        li.remove();
        updatedCounter();
    });
    //updatedCounter();
}

taskInputBox.addEventListener('keyup', function (event) {
    
    if (event.key === "Enter") {
        addTask();
    }
});