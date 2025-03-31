/**
 * Todo List jsx
 */

import { useState } from 'react';
import './TodoList.css'
import { useEffect } from 'react';

export function TodoList() {
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

    const handleAddList = (index) => {
        if (listInputs[index] && listInputs[index].trim() !== '') {
            const newTodos = [...todos];
            newTodos[index].lists.push(listInputs[index]);
            setTodos(newTodos);
            setInputLists({ ...listInputs, [index]: '' });
        }
    };
    const handleListInputChange = (index, value) => {
        setInputLists({ ...listInputs, [index]: value });
    };

    useEffect(() => console.log(todos.map((item, _) =>item.heading)), [todos])

    let content;
    if (todos.length ===0) {
        content = <h4>No todo list availiable</h4>
    }
    else {
        content = todos.map((todo, index) => (
             <div key={index} className="todo-card">
             <div className="heading_todo">
               <h3>{todo.heading}</h3>
               <button className="delete-button-heading" onClick={() => deleteTodo(index)}>Delete Heading</button>
               <div className='add_list'>
               
        </div>
             </div>
             <ul>
             {todo.lists.map((list, listIndex) => (
               <li key={listIndex} className='todo_inside_list'>
                <p>{list}</p>
               </li>
             ))}
           </ul>
          
             <div>
             <input
            type="text"
            className="list-input"
            placeholder="Add List"
            value={listInputs[index] || ''}
            onChange={(e) => handleListInputChange(index, e.target.value)}/>
             <button className="add-list-button" onClick={() => handleAddList(index)}>Add List</button>
             </div>
           
           </div>)
        );
    }
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
                {content}


            
            </div>

        </div>
    );
}

