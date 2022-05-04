import { makeAutoObservable } from "mobx"

class Todo {
    todos = [
        {id:1, title: 'Изучи mobx', complete: false},
        {id:2, title: 'Спать в обеде', complete: false},
        {id:3, title: 'Сделать навигацию в меню', complete: false},
        {id:4, title: 'Соединить бэк авторизации с фронтом', complete: false},
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        console.log('remove');
    }

    complateTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, complete: !todo.complete} : todo);
        console.log('complate');
    }

    fetchTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.todos = [...this.todos, ...json]
            })
    }
}

export default new Todo();