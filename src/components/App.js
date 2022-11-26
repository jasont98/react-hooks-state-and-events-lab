import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import {useState} from 'react';

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [isDarkMode, setDarkMode] = useState(false);

  function handleDarkMode () {
    setDarkMode(isDarkMode => !isDarkMode)
  }

  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{isDarkMode ? "Dark" : "Light"} Mode </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
