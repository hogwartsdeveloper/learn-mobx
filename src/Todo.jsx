import { observer } from "mobx-react-lite";
import todo from "./store/todo";

const Todo = observer(() => {
    console.log('render');
    return (
        <div>
            <button onClick={() => todo.fetchTodos()}>Получить задачи</button>
            {todo.todos.map(t => 
                <div className="todo" key={t.id}>
                    <input type="checkbox" checked={t.complete} onChange={() => todo.complateTodo(t.id)} />
                    {t.title}
                    <button onClick={() => todo.removeTodo(t.id)}>X</button>
                </div>    
            )}
        </div>
    )
});

export default Todo;