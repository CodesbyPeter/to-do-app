import Header from "./components/Header";
import React, { useState } from "react";
import TodoInput from "./components/TodoInput";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <TodoInput addTodo={addTodo} />
    </div>
  );
}

export default App;