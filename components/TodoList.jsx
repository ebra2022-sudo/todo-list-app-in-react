/**
 * Todo List jsx
 */

import { useState } from 'react';
import './TodoList.css'
import { useEffect } from 'react';

export const TodoList = () => {
    // states
    const [todos, setTodos] = useState([]);
    const [inputHeading, setInputHeading] = useState('');
    const [listInputs, setInputLists] = useState({});

    const addTodo = () => {
        if(inputHeading.trim() !== '') {
            setTodos([...todos, {heading: inputHeading, lists: []}]);
            setInputHeading('');
        }
    }

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => index !== i));
    }

    useEffect(() => console.log(todos.map((item, _) =>item.heading)), [todos])
    return(
        <div className='todo-container'>
            <h1 className='titel'>My Todo List</h1>
            <div className='input-container'>
                <input
                 type="text"
                 className='heading-input'
                 placeholder='Enter heading'
                 value={inputHeading}
                 onChange={(e) => setInputHeading(e.target.value)}
                 />
                 <button
                  className="add-list-button" 
                  onClick={() => addTodo()}
                 >Add Heading</button>

            </div>
            <div className='todo_main'>
                {todos.map((todo, index) => (
                    <div key={index} className="todo-card">
                        <div className="heading_todo">
                            <h3>{todo.heading}</h3> {/* Display the heading here */}
                            <button className="delete-button-heading" onClick={() =>deleteTodo(index)}>Delete Heading</button>
                        </div>
                    </div>
                    ))
                }
            </div>

        </div>
    );
}

