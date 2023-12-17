// App.js
import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        <main>
          <HomePage />
        </main>
      </header>
    </div>
  );
}

export default App;
