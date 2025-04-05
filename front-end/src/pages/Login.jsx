import React, { use, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const axiosResponse = await axios.post("/users/login", {
          email,
          password,
        });
        setUser(axiosResponse.data);
        setRedirect(true);
      } catch (error) {
        alert(`Deu um erro ao logar: ${error.response.data}`);
      }
    } else {
      alert("Você precisa preencher o e-mail e a senha!");
    }
  };

  if (redirect || user) {
    return <Navigate to="/" />;
  }
  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4 p-8">
        <h2 className="text-3xl font-bold">Faça seu login</h2>

        <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
          <input
            placeholder="Digite seu e-mail:"
            type="email"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Digite sua senha:"
            type="password"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-primary-400 w-full cursor-pointer rounded-full border border-gray-300 px-4 py-2 font-bold text-white">
            Login
          </button>
        </form>

        <p>
          Ainda não tem uma conta?{" "}
          <Link to="register" className="font-semibold underline">
            Registre-se aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
