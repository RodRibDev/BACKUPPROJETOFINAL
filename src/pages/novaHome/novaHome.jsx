import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./novaHome.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marcadores } from "../../components/Marcadores";
import { Sidebar } from "../../components/sidebar/sidebar";


const initialCoord = [-27.593754013143972, -48.565280761841805];

export function NovaHome() {  
  const [loggedInUsersCount, setLoggedInUsersCount] = useState(0);
  const [locais, setLocais] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
      
        const responseUsers = await axios.get("https://m3p-backend-squad3-6iew.onrender.com/usuario/ativos");
        console.log(responseUsers.data);
      
        setLoggedInUsersCount(responseUsers.data);
        
        const responseLocais = await axios.get("https://m3p-backend-squad3-6iew.onrender.com/local/all");
        console.log(responseLocais.data.listarAll);
        setLocais(responseLocais.data.listarAll);

      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container-private">
<Sidebar />
    <div className="home-content">
    <img className="img-home" src="./imgHome.png" alt="Logo" />
            <div className="stats">
        <div className="card-stats">
          <p style={{ color: "white" }}>Usuários logados</p>
          <span className="fw-bolder fs-2">{loggedInUsersCount}</span>
        </div>
        <div className="card-stats">
          <p style={{ color: "white" }}>Locais</p>
          <span className="fw-bolder fs-2">{locais.length}</span>
        </div>
      </div>

      <div className="table-container">
        <div className="lista-locais">
          <h2>Locais</h2>
          <p>Listagem das localidades cadastradas</p>
          <table>
            <thead>
              <tr>
                <th>Local</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              {locais.map((local) => (
                <tr key={local.id}>
                  <td>{local.nome}</td>
                  <td>{local.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mapa-locais">
        <h2>Mapa</h2>
        <p>Localização dos locais cadastrados</p>
        <MapContainer center={initialCoord} zoom={13} className="map-container">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marcadores locais={locais}></Marcadores>
        </MapContainer>
      </div>
    </div>
    </div>
  );
}
