import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import axios from "axios";
import { useEffect, useState } from "react";
import Register from "./pages/Register";
import Account from "./pages/Account";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const axiosGet = async () => {
      const axiosResponse = await axios.get("/users/profile");
      setUser(axiosResponse.data);
    };

    axiosGet();
  }, []);

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
        <Route
          path="/account/:subpage?"
          element={<Account user={user} setUser={setUser} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//"email":"algumteste@teste.com",
//"password":"teste123"
