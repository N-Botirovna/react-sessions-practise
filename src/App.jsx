import { useState } from "react";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/login" element={<Login/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
