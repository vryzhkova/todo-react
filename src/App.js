import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]); // [ ] - начальное значение пустой массив (задач у нас нет на старте приложения)
  // addTodoHandler - обработчик добавления новой задачи,
  // text - текст для новой задачи
  // setTodos - передаем обновленный сет задач
  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isComleted: false,
      id: uuidv4(),
    };
    if (text) {
      setTodos([...todos, newTodo]);
    }
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isComleted: !todo.isComleted } : { ...todo }
      )
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteComplitedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isComleted));
  };

  const completedTodosCount = todos.filter((todo) => todo.isComleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      {/* В компоненте TodoForm мы будем добавлять новые задачи, 
      переменную todos мы передаем в TodoForm чтобы менять его состояние,
      setTodos вызываем в TodoForm*/}

      {/* {todos.length === 0 ? <TodoForm addTodo={addTodoHandler} /> : null} */}

      <TodoForm addTodo={addTodoHandler} />
      {/* В компоненте TodoList мы будем отображать в интерфейсе новые задачи,
      список задач todos мы должны передавать в TodoList */}
      {todos.length ? (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteComplitedTodos={deleteComplitedTodosHandler}
        />
      ) : null}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? "todos" : "todo"
        }`}</h2>
      )}
    </div>
  );
}

export default App;
