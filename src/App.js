import Menu from './components/Menu';
import Content from './components/Content';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <Header />
      <div className="body">
        <Menu />
        <Content />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
