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

}

export const todosService = new TodosService()