import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
    const initialState = JSON.parse(localStorage.getItem('todos')) || [];
    const [todos, setTodos] = useState(initialState);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (input) => {
        if (input === '') return;
        let id = 1;
        if (todos.length > 0) {
            id = todos[0].id + 1;
        }
        let todo = { id: id, name: input, completed: false };
        let newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    const removeTodo = (id) => {
        let newTodos = [...todos].filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    const markTodo = (id) => {
        let newTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(newTodos);
    };

    return (
        <div className='App'>
            <h1>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                <TodoItem
                    todo={todo}
                    removeTodo={removeTodo}
                    markTodo={markTodo}
                />
            ))}
        </div>
    );
}

export default App;
