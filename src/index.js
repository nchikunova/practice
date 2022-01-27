import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
/*import { HashRouter as Router } from 'react-router-dom';  
Для отображения старницы через hash http://localhost:3000/#/products при загрузке на гитхаб пейджс позволяет ходить между страницами. Не идет запрос на бэкэнд с названием страницы и бэк не возвращает index.js. Используется крайне редко*/
import './index.css';
import 'modern-normalize/modern-normalize.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
