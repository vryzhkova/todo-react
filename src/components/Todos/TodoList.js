import Todo from "./Todo";
import styles from './TodoList.module.css'

function TodoList({ todos, deleteTodo }) {
    // в ф-ции TodoList у нас будет доступ к массиву строк todos
    return (
        <div className={styles.todoListContainer}>
            {!todos.length && <h2>Todo list is empty</h2>}
            {todos.map((todo, index) => 
                <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />)}
        </div>
    )
}

export default TodoList;