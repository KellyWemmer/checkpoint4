import { ProxyState } from "../AppState.js"
import { Todo} from "../Models/Todo.js"
import {api} from "./AxiosService.js"

class TodosService {
    async createTask(taskFormData) {         
        let res = await api.post('/kelly/todos', taskFormData)
        console.log('res', res)
        let task = new Todo(res.data)
        ProxyState.todos = [...ProxyState.todos, task]
    }

    async getTodos() {
        const res = await api.get('/kelly/todos')
        ProxyState.todos = res.data.map(t => new Todo(t))
        console.log(ProxyState.todos)
    }

    async toggleTodo(todoId) {
        let task = ProxyState.todos.find(t => t.id == todoId)

        if(!task) {
            throw new Error('Bad Task Id')
        }

        task.completed = !task.completed
        let taskIndex = ProxyState.todos.indexOf(task)

        let res = await api.put(`/kelly/todos/${todoId}`, task)

        let updatedTask = new Todo(res.data)

        ProxyState.todos.splice(taskIndex, 1, updatedTask)

        ProxyState.todos = ProxyState.todos        
    }

    async deleteTask(id) {
        await api.delete(`/kelly/todos/${id}`)
        ProxyState.todos = ProxyState.todos.filter(s => s.id != id)
    }
}

export const todosService = new TodosService()