import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import MapaDenuncias from "../components/MapaDenuncias";
import NovaDenunciaModal from "../components/NovaDenunciaModal";

function PublicHome() {

  const [denuncias, setDenuncias] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);

  useEffect(() => {

    // Simulação (depois vem da API)

    setDenuncias([
      {
        id: 1,
        titulo: "Buraco na Rua",
        descricao: "Grande buraco na avenida principal",
        local: "Centro",
        status: "Pendente"
      },
      {
        id: 2,
        titulo: "Poste apagado",
        descricao: "Iluminação pública não funciona",
        local: "Bairro Prado",
        status: "Em análise"
      },
      {
        id: 3,
        titulo: "Lixo acumulado",
        descricao: "Coleta de lixo atrasada",
        local: "Centro",
        status: "Resolvido"
      }
    ]);

  }, []);

  return (

    <div className="bg-slate-950 text-white min-h-screen">
      <header className="flex justify-between items-center px-6 py-3 border-b border-slate-800">

        <img src={logo} alt="Civitas" className="w-24" />

      </header>

      <section className="text-center py-20 px-6">

        <h1 className="text-5xl font-bold mb-6">
          Denuncie Problemas da Sua Cidade
        </h1>

        <button
          onClick={() => setModalAberto(true)}
          className="bg-blue-600 px-8 py-4 rounded-xl text-lg hover:bg-blue-700"
        >
          Registrar Denúncia
        </button>

      </section>

      <section className="px-10 py-10">

        <h2 className="text-3xl font-bold mb-6">
          Mapa de Denúncias
        </h2>

        <MapaDenuncias />

      </section>


      <section className="px-10 py-10">

        <h2 className="text-3xl font-bold mb-10">
          Denúncias Recentes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {denuncias.map((d) => (

            <div
              key={d.id}
              className="bg-slate-900 p-6 rounded-xl border border-slate-800"
            >

              <h3 className="text-xl font-semibold mb-2">
                {d.titulo}
              </h3>

              <p className="text-slate-400 mb-3">
                {d.descricao}
              </p>

              <p className="text-sm text-slate-500 mb-2">
                📍 {d.local}
              </p>

              <span className="text-xs bg-blue-600 px-3 py-1 rounded">
                {d.status}
              </span>

            </div>

          ))}

        </div>

      </section>

      <footer className="bg-black text-center py-8 text-slate-500">

        © 2026 CIVITAS AI • Plataforma de Gestão Urbana Inteligente

      </footer>


      <NovaDenunciaModal
        aberto={modalAberto}
        fechar={() => setModalAberto(false)}
      />

    </div>

  );

}

export default PublicHome;