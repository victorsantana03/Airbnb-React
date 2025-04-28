import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

const AccProfile = () => {
  const { user, setUser } = useUserContext();
  const [redirect, setRedirect] = useState(false);

  const handleLogout = async () => {
    try {
      const axiosResponse = await axios.post("/users/logout");
      setUser(null);
      setRedirect(true);
      console.log(axiosResponse.data);
    } catch (error) {
      alert("Erro ao fazer logout");
    }
  };

  if (redirect) return <Navigate to="/" />;
  if (!user) return <></>;
  return (
    <div className="flex flex-col items-center gap-4">
      <p>
        Logado como {user.name} ({user.email})
      </p>
      <button
        onClick={handleLogout}
        className="bg-primary-400 min-w-44 cursor-pointer rounded-full px-4 py-2 text-white transition"
      >
        Logout
      </button>
    </div>
  );
};

export default AccProfile;
