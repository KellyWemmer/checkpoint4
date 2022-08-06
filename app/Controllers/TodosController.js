import { ProxyState } from "../AppState.js";
import { getTodoForm } from "../Components/TodoForm.js";
import { todosService } from "../Services/TodosService.js";
import { Pop} from "../Utils/Pop.js"

function _drawTodos() {
    let template = ''
    let tasks = ProxyState.todos
    tasks.forEach(t => template += t.TodoTemplate)
    console.log('drawing tasks', template)

    document.getElementById('todo-form').innerHTML = getTodoForm()//This is first to fill form
    document.getElementById('created-task').innerHTML = template
    
}

export class TodosController {
    constructor() {          
        ProxyState.on('todos', _drawTodos)
        this.getTodos()
    }

    async createTask() { //cant declare function inside constructor
        try {
            window.event.preventDefault()
            let form = window.event.target

            let newTask = {
                id: '',
                completed: false,
                user:'',
                description: form.task.value
            }
            await todosService.createTask(newTask)

            form.reset()
        } catch (error) {
            console.log('[creating task]', error)
            Pop.error(error)       
            
        }
    }

    async getTodos() {
        try {
            await todosService.getTodos()
        } catch (error) {
          Pop.error(error)  
          console.log('[getTasks]', error)
            
        }
        
    }
    
}