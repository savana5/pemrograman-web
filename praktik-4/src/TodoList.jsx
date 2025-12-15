import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('all'); // all, active, completed

    const addTodo = () => {
        if (inputValue.trim()) {
            const newTodo = {
                id: Date.now(),
                text: inputValue.trim(),
                completed: false
            };
            setTodos(prevTodos => [...prevTodos, newTodo]);
            setInputValue('');
        }
    };

    const deleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    const activeTodosCount = todos.filter(todo => !todo.completed).length;

    return (
        <div className="todo-container">
            <h2>Todo List</h2>
            
            <div className="todo-input-section">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Tambahkan todo baru..."
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                />
                <button onClick={addTodo}>
                    Tambah
                </button>
            </div>

            <div className="todo-stats">
                <p>Total: {todos.length} | Aktif: {activeTodosCount}</p>
            </div>

            <div className="filter-buttons">
                <button
                    onClick={() => setFilter('all')}
                    className={filter === 'all' ? 'active' : ''}
                >
                    Semua
                </button>
                <button
                    onClick={() => setFilter('active')}
                    className={filter === 'active' ? 'active' : ''}
                >
                    Aktif
                </button>
                <button
                    onClick={() => setFilter('completed')}
                    className={filter === 'completed' ? 'active' : ''}
                >
                    Selesai
                </button>
            </div>

            <div className="todo-list">
                {filteredTodos.map(todo => (
                    <div key={todo.id} className="todo-item">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleComplete(todo.id)}
                        />
                        <span className={todo.completed ? 'completed' : ''}>
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>
                            Hapus
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;