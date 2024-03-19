import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/CustomNavbar/CustomNavbar'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Services from './pages/Services';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />}/>
        <Route path="Signup" element={<Signup />}/>
        <Route path="services" element={<Services />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;