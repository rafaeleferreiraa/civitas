import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/img/logo.png";

function Home() {
  return (
    <div className="bg-slate-950 text-white overflow-hidden">  
    <header className="fixed w-full flex justify-between items-center px-6 py-3 bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">

  <img src={logo} alt="CIVITAS AI" className="w-24" />

  <div className="space-x-5 hidden md:flex text-sm">
    <a href="#sobre" className="hover:text-blue-400 transition">
      Sobre
    </a>
    <a href="#funcionalidades" className="hover:text-blue-400 transition">
      Funcionalidades
    </a>
    <a href="#seguranca" className="hover:text-blue-400 transition">
      Segurança
    </a>
  </div>

  <div className="space-x-3 text-sm">
    <Link to="/login" className="hover:text-blue-400 transition">
      Login
    </Link>
    <Link
      to="/register"
      className="bg-blue-600 px-4 py-1.5 rounded-lg hover:bg-blue-700 transition font-semibold"
    >
      Começar
    </Link>
  </div>

</header>

      <section className="min-h-screen flex items-center justify-center text-center px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-950 to-black"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl pt-32"
        >
          <h1 className="text-6xl font-extrabold mb-6 leading-tight">
            CIVITAS AI
          </h1>

          <p className="text-2xl text-slate-300 mb-10">
            Civitas.AI é uma plataforma web inteligente voltada para gestão urbana, permitindo que cidadãos registrem problemas urbanos e que gestores públicos utilizem dados e inteligência artificial para prever, priorizar e resolver ocorrências de forma estratégica.
          </p>

          <Link
            to="/register"
            className="bg-blue-600 px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition shadow-2xl"
          >
            Criar Conta
          </Link>
        </motion.div>
      </section>

      <footer className="bg-black text-center py-10 text-slate-500">
        © 2026 CIVITAS AI • Plataforma Inteligente de Gestão Pública
      </footer>
    </div>
  );
}

export default Home;