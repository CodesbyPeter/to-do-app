import React from "react";

function Header({ darkMode, toggleDarkMode }) {
    return (
        <header>
           <h1>My To-Do-list</h1>
           <button 
           onClick={toggleDarkMode}
           aria-label={ darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
           title={ darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            
           {darkMode ? String.fromCodePoint(0x1F319) : String.fromCodePoint(0x1F31E)}
           </button>
        </header>
    );
}

export default Header;