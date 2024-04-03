import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Signup from './components/Signup';
import Login from './components/Login';

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
