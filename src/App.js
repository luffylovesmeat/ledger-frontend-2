import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Wallet from "./pages/Wallet";

function App() {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        paddingTop: 62,
        paddingBottom: 62,
        backgroundColor: "#F8F8FE",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
