import './App.css'; 
import Home from './components/pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Repos from "./components/pages/Repos/Repos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/repos" element={<Repos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
