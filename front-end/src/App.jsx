import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import axios from "axios";

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/register" element={<Register />} />
          <Route path="/account/:subpage?" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;

//"email":"algumteste@teste.com",
//"password":"teste123"
