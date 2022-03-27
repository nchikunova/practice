import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
/*import { HashRouter as Router } from 'react-router-dom';  
Для отображения старницы через hash http://localhost:3000/#/products при загрузке на гитхаб пейджс позволяет ходить между страницами. Не идет запрос на бэкэнд с названием страницы и бэк не возвращает index.js. Используется крайне редко*/
import './index.css';
import 'modern-normalize/modern-normalize.css';
import App from './App';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
