import React from 'react';
import Weather from './Weather';
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />
      <footer>
        <p>This project was coded by Anastasiia Titovska <a href='https://github.com/stasiia-ti/my-awsome-app' target="_blank" rel="noreferrer">Open-sourced on GitHub</a></p>
      </footer>
      </div>
    </div>
  );
}

