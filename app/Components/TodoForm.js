import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";

export function getTodoForm(todo = new Todo({})) {
    let checkedTodos = 0
    let totalTodos = ProxyState.todos.length

    for (let t = 0; t < ProxyState.todos.length; t++) {
        const checkedTodo = ProxyState.todos[t];
        if (checkedTodo.completed == true) {
            checkedTodos++
        }        
    }

    let submitTask = 'app.todosController.createTask()'

    return `
    <form class="centered"onsubmit="${submitTask}">
        <h5>Count: ${checkedTodos}/${totalTodos}</h5>
        <div class="row d-flex" id="created-task">
            <p>Todo task</p>
        </div>                  
        <input class="task-form" minlength="1" name="task" id="task" required  type="text" placeholder="New ToDo">
        <button class="btn bg-secondary m-3 d-flex centered">Add</button>
        
    </form>
    `
}