import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/CustomNavbar/CustomNavbar'
import Login from './pages/Login';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;