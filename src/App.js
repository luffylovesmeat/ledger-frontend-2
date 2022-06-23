import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Wallet from "./pages/Wallet";
import Dashboard from "./pages/Dashboard";
import GhostID from "./pages/GhostID";


function App()
{
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ghostid" element = {<GhostID/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
