import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PostList from './Api/PostList'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostForm from './Api/PostForm';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import PostForm from './Api/PostForm';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>  
    
    <Routes>
      <Route path="/" element={<PostList />}/>
      <Route path='/PostForm' element={<PostForm/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
