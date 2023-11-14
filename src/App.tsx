import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <TodoList />
      <TodoList />
      <TodoList />
    </div>
  );
}

function TodoList() {
  return (
    <div>
      <h3>What to Learn</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        <li><input type="checkbox"  checked={true} /><span>CSS&HTML</span></li>
        <li><input type="checkbox"  checked={true} /><span>JS</span></li>
        <li><input type="checkbox"  checked={false} /><span>REACT</span></li>
      </ul>
    </div>
  )
}
export default App;
