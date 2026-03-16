import { useState } from "react";

function NovaDenunciaModal({ aberto, fechar }) {
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [foto, setFoto] = useState(null);

  async function buscarCEP(valor) {
    const cepLimpo = valor.replace(/\D/g, "");
    setCep(cepLimpo);

    if (cepLimpo.length === 8) {
      try {
        const res = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
        const data = await res.json();

        if (!data.erro) {
          setRua(data.logradouro || "");
          setBairro(data.bairro || "");
          setCidade(data.localidade || "");
        }
      } catch (erro) {
        console.error("Erro ao buscar CEP:", erro);
      }
    }
  }

  function enviarDenuncia(e) {
    e.preventDefault();

    const denuncia = {
      cep,
      rua,
      bairro,
      cidade,
      descricao,
      categoria,
      foto
    };

    console.log("Denúncia enviada:", denuncia);

    fechar();
  }

  if (!aberto) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]">

      <div className="bg-slate-900 p-8 rounded-2xl w-full max-w-lg relative z-[10000] border border-slate-700 shadow-2xl">

        <h2 className="text-2xl font-bold mb-6 text-white">
          Registrar Denúncia
        </h2>

        <form onSubmit={enviarDenuncia} className="space-y-4">

          <input
            type="text"
            placeholder="CEP"
            value={cep}
            onChange={(e) => buscarCEP(e.target.value)}
            className="w-full p-3 rounded bg-slate-800 text-white outline-none"
          />

          <input
            type="text"
            placeholder="Rua"
            value={rua}
            readOnly
            className="w-full p-3 rounded bg-slate-800 text-white"
          />

          <input
            type="text"
            placeholder="Bairro"
            value={bairro}
            readOnly
            className="w-full p-3 rounded bg-slate-800 text-white"
          />

          <input
            type="text"
            placeholder="Cidade"
            value={cidade}
            readOnly
            className="w-full p-3 rounded bg-slate-800 text-white"
          />

          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full p-3 rounded bg-slate-800 text-white"
          >
            <option value="">Selecione a categoria</option>
            <option>Buraco na rua</option>
            <option>Iluminação pública</option>
            <option>Lixo acumulado</option>
            <option>Esgoto</option>
            <option>Água</option>
            <option>Outro</option>
          </select>

          <textarea
            placeholder="Descrição do problema"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="w-full p-3 rounded bg-slate-800 text-white"
            rows="4"
          />

          <input
            type="file"
            onChange={(e) => setFoto(e.target.files[0])}
            className="w-full text-white"
          />

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={fechar}
              className="px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 font-semibold"
            >
              Enviar Denúncia
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default NovaDenunciaModal;