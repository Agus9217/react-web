import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
