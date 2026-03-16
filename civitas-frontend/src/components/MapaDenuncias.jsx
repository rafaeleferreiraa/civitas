import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const icon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32]
});

function MapaDenuncias() {

  const denuncias = [
    {
      id: 1,
      titulo: "Buraco na rua",
      local: "Centro",
      posicao: [-6.605, -39.062]
    },
    {
      id: 2,
      titulo: "Lixo acumulado",
      local: "Bairro Prado",
      posicao: [-6.602, -39.058]
    },
    {
      id: 3,
      titulo: "Poste apagado",
      local: "Centro",
      posicao: [-6.608, -39.064]
    }
  ];

  return (
    <MapContainer
      center={[-6.605, -39.062]}
      zoom={14}
      style={{ height: "400px", width: "100%" }}
      className="rounded-xl"
    >

      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {denuncias.map((d) => (
        <Marker key={d.id} position={d.posicao} icon={icon}>
          <Popup>
            <strong>{d.titulo}</strong> <br />
            📍 {d.local}
          </Popup>
        </Marker>
      ))}
      
    </MapContainer>
  );
}

export default MapaDenuncias;