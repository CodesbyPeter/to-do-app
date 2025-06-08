import React, { useState } from "react";


function TodoInput({ addTodo}) {

    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();      // Prevents page reload
        if (!inputValue.trim()) return;    // Ignores empty inputs
            addTodo(inputValue);   // Calls the addTodo function with the input value
            setInputValue("");     // Clears the input field
        }

    
    return (
        <form onSubmit={handleSubmit}>
          <input 
          type="text"
          value={inputValue}
          onChange={ (e) => setInputValue(e.target.value) }
          placeholder="Add a new task...."
          onKeyPress={ (e) => {
            if (e.key === 'Enter') {
                handleSubmit(e); }
          }}/>
          <button type="submit">+</button>
        </form>
    );
}

export default TodoInput;