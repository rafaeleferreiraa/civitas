import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import bg from "../assets/img/bg.png";
import logo from "../assets/img/logo.png";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    try {
      await api.post("/auth/register", {
        name,
        email,
        password,
      });

      alert("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) { console.error(error); alert("Erro ao Cadastrar");
    }
  }

  return (
  <div
    className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <div className="absolute inset-0 bg-black/50"></div>

    <div className="absolute top-6 left-6 z-20">
      <img src={logo} alt="Civitas Logo" className="w-32" />
    </div>

    <div className="relative z-10 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-96">
      <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">
        Criar Conta
      </h2>

      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          placeholder="Nome"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Cadastrar
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        Já tem conta?{" "}
        <Link to="/" className="text-blue-600 hover:underline">
          Fazer login
        </Link>
      </p>
    </div>
  </div>
);
}

export default Register;