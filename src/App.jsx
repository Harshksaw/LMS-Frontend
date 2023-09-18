import "./App.css";

import { Route, Routes } from "react-router-dom";

import About from "./Pages/About";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    //using layout
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>


      </Routes>
    </>
  );
}

export default App;
