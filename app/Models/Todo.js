export class Todo {
    constructor ({id, completed, user, description}) {
        this.id = id
        this.completed = completed
        this.user = user
        this.description = description
    }

    get TodoTemplate() {
        return `
        
        <input type="checkbox">${this.description}</input>
        
        `
    }
}