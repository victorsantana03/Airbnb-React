import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import axios from "axios";
import { useState } from "react";
import Register from "./pages/Register";

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route
          path="/login/register"
          element={<Register setUser={setUser} />}
        />
        <Route path="/account" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//"email":"algumteste@teste.com",
//"password":"teste123"
