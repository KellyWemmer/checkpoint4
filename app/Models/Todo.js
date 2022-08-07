export class Todo {
    constructor ({id, completed, user, description}) {
        this.id = id
        this.completed = completed
        this.user = user
        this.description = description
    }

    get TodoTemplate() {
        return `
        <div class="p-3">
            <input class="mb-3" type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.todosController.toggleTodo('${this.id}')"></input>
            <span>${this.description}</span>
            <button class="btn selectable" onclick="app.todosController.deleteTask('${this.id}')">
                <i class="mdi mdi-delete-forever"></i>
            </button>
            
            
        </div>
        
        `
    }
}