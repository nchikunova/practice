import './App.css';
import Menu from './components/Menu';
import Content from './components/Content';
import Header from './components/Header';

function App() {
  return (
    <div className="main-container">
      <Header />
      <div className="body">
        <Menu />
        <Content />
      </div>
    </div>
  );
}

export default App;
