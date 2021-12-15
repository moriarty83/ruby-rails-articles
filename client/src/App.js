import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import Home from './components/pages/Home';
import Header from './components/Header';
import Login from './components/pages/Login';

function App() {
  return (
    <Main />
  );
}

export default App;
