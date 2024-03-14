import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
