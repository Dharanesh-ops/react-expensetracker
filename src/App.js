import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path  = "/" element={<HomePage/>} />
      </Routes>
      </Router>
  );
}

export default App;