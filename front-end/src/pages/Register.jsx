import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && email && password) {
      try {
        const axiosResponse = await axios.post("/users", {
          name,
          email,
          password,
        });
        setUser(axiosResponse.data);
        setRedirect(true);
      } catch (error) {
        alert(`Erro ao se registrar: ${error}`);
      }
    } else {
      alert("Preencha todos os campos corretamente!");
    }
  };

  if (redirect) return <Navigate to="/" />;

  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4 p-8">
        <h2 className="text-3xl font-bold">Faça seu cadastro</h2>

        <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
          <input
            placeholder="Digite seu nome:"
            type="text"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            onChange={(e) => setName(e.target.value)}
          />
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
            Registre-se
          </button>
        </form>

        <p>
          Já tem uma conta?{" "}
          <Link to="/login" className="font-semibold underline">
            Logue aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
