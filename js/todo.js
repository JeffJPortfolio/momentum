const todoForm = document.getElementById("todo-form") ;
const todoInput = document.querySelector("#todo-form input") ;
const todoList = document.getElementById("todo-list") ;

const TODOS_KEY = "todos"

let toDos = [] ;

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)) ;
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id  !== parseInt(li.id)) ;
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li") ;
    li.id = newTodo.id ;
    const span = document.createElement("span") ;
    span.innerText = newTodo.text;
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
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj) ;
    paintTodo(newTodoObj) ;
    saveTodos();
}


todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos != null) {
    const parsedTodos =JSON.parse(savedTodos) ;
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo) ;
}

function sexyFiter(item) {
}