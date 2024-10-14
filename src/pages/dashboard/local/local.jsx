import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./local.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marcadores } from "../../../components/Marcadores";
import "leaflet/dist/leaflet.css";

const initialCoord = [-27.593754013143972, -48.565280761841805];

export function Local() {
  const { id } = useParams();
  const [local, setLocal] = useState(null);

  useEffect(() => {
    async function fetchLocal() {
      let token = localStorage.getItem('token');
      try {
      
        const response = await axios.get(`https://m3p-backend-squad3-6iew.onrender.com/local/${id}`, {
          headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
          },
        });
        const data = response.data.listarLocal;
        setLocal(data);
      } catch (error) {
        console.error("Erro ao buscar o local:", error);
      }
    }

    fetchLocal();
  }, [id]);

  if (!local) return <p>Carregando...</p>;

  return (
    <div className="main-contentLocal">
      <div className="info-local">
        <h2 className="fs-1" id="nomelocal">{local.nome}</h2>
        <p className="fw-bold">Descrição:</p>
        <p id="descricaolocal">{local.descricao}</p>
        <p className="fw-bold">CEP:</p>
        <p id="ceplocal">{local.cep}</p>
        <p className="fw-bold">Rua:</p>
        <p id="rualocal">{local.rua}</p>
        <p className="fw-bold">Bairro:</p>
        <p id="bairrolocal">{local.bairro}</p>
        <p className="fw-bold">Cidade:</p>
        <p id="cidadelocal">{local.cidade}</p>
        <p className="fw-bold">UF:</p>
        <p id="uflocal">{local.uf}</p>
        <p className="fw-bold">Latitude:</p>
        <p id="latlocal">{local.latitude}</p>
        <p className="fw-bold">Longitude:</p>
        <p id="longlocal">{local.longitude}</p>
      </div>

      <div className="mapa-locais">
        <h2>Mapa</h2>
        <p>Localização do local cadastrado</p>
        <MapContainer center={initialCoord} zoom={13} className="map-container">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marcadores locais={[local]}></Marcadores>
        </MapContainer>
      </div>
    </div>
  );
}
