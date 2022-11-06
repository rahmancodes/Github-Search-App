import "./App.css";
import React, {useState} from "react";
import Home from "./components/pages/Home/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Repos from "./components/pages/Repos/Repos";
import SingleRepo from "./components/pages/SingleRepo/SingleRepo";

export const MyContextApi = React.createContext({});

function App() {
  const [repository, setRepository] = useState([]);
  return (
    <MyContextApi.Provider
      value={{ repository, setRepository }}
    >
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/repos">Repos</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repos" element={<Repos />} />
          <Route path="/repos/:id" element={<SingleRepo />}></Route>
        </Routes>
      </BrowserRouter>
    </MyContextApi.Provider>
  );
}

export default App;
