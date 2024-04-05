const todoForm = document.getElementById("todo-form") ;
const todoInput = document.querySelector("#todo-form input") ;
const todoList = document.getElementById("todo-list") ;

const toDos = [] ;

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(toDos)) ;
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li") ;
    const span = document.createElement("span") ;
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span) ;
    li.appendChild(button) ;
    todoList.appendChild(li);
}

function handleToDoSubmit (event) {
    event.preventDefault() ;
    const newTodo = todoInput.value;
    todoInput.value = "";
    toDos.push(newTodo) ;
    paintTodo(newTodo) ;
    saveTodos();
}


todoForm.addEventListener("submit", handleToDoSubmit);