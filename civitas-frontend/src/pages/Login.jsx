import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import AuthContext from "../context/AuthContext";
import bg from "../assets/img/bg.png";
import logo from "../assets/img/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      login(response.data.token);
      navigate("/dashboard");
    } 
    catch (error) { console.error(error); alert("Email ou senha inválidos");
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
        Entrar no Civitas
      </h2>

      <form onSubmit={handleLogin} className="space-y-4">
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
          Entrar
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        Não tem conta?{" "}
        <Link to="/register" className="text-blue-600 hover:underline">
          Cadastre-se
        </Link>
      </p>
    </div>
  </div>
);
}

export default Login;