import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext(null);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const axiosGet = async () => {
      const axiosResponse = await axios.get("/users/profile");
      setUser(axiosResponse.data);
    };

    axiosGet();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
