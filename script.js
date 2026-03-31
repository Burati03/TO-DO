const taskBtn = document.querySelector("#taskBtn")
const taskList = document.querySelector("#taskList")
const taskInput = document.querySelector("#taskInput")

function createSpan(text){
    const span = document.createElement('span');
    span.textContent = text;
    span.addEventListener('click',function(){
        span.classList.toggle('completed')
    })
    return span;
}

function createDeleteButton(li){
    const button = document.createElement('button');
    button.textContent = 'Excluir';

    button.addEventListener('click', function(){
        li.remove();
    });

    return button;    
}

function addTask(){
    const taskInputValue = taskInput.value;

    if (taskInputValue === '') return;

    const li = document.createElement('li');

    const span = createSpan(taskInputValue);
    const button = createDeleteButton(li);

    li.appendChild(span);
    li.appendChild(button);

    taskList.appendChild(li);

    taskInput.value = '';
}

taskBtn.addEventListener("click", addTask);