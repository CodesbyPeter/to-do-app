import React from "react";

function Header({ darkMode, toggleDarkMode }) {
    return (
        <header>
           <h1>My To-Do-list</h1>
           <button 
           onClick={toggleDarkMode}
           aria-label={ darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
           title={ darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            
           {darkMode ? '\u1F319' : '\u1F31E'}
           </button>
        </header>
    );
}

export default Header;