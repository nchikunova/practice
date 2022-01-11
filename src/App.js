import './App.css';
import Menu from './components/Menu';
import Content from './components/Content';
import Header from './components/Header';

function App() {
  return (
    <div className="body">
      <Header />
      <Menu />
      <Content />
    </div>
  );
}

export default App;
