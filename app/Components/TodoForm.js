import { Todo } from "../Models/Todo.js";

export function getTodoForm(todo = new Todo({})) {
    let submitTask = 'app.todosController.createTask()'

    return `
    <form onsubmit="${submitTask}">
        <h5>Count: 3/4</h5>
        <div class="row d-flex" id="created-task">
            <p>Todo task</p>
        </div>                  
        <input class="task-form" minlength="1" name="task" id="task" required  type="text" placeholder="New ToDo">
        <button class="btn bg-secondary m-1">add</button>
    </form>
    `
}