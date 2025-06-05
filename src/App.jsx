import Header from "./components/Header";
import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;