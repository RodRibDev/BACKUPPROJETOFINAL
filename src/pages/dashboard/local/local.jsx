import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./local.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Marcadores } from "../../../components/Marcadores";
import "leaflet/dist/leaflet.css";


const initialCoord = [-27.593754013143972, -48.565280761841805];

export function Local() {
  const { id } = useParams();
  const [locais, setLocais] = useState(null);

  useEffect(() => {
    async function fetchLocal() {
      try {
        const response = await fetch(`http://localhost:3333/locais/${id}`);
        const data = await response.json();
        setLocais(data);
      } catch (error) {
        console.error("Erro ao buscar o local:", error);
      }
    }

    fetchLocal();
  }, [id]);

  if (!locais) return <p>Carregando...</p>;

  return (
    <div className="main-contentLocal">
      <div className="info-local">
      <h2 className="fs-1" id="nomelocal">{locais.nome}</h2>
      <p className="fw-bold">Descrição:</p>
      <p id="descricaolocal">{locais.descricao}</p>
      <p className="fw-bold">CEP:</p>
      <p id="ceplocal">{locais.cep}</p>
      <p className="fw-bold">Rua:</p>
      <p id="rualocal">{locais.rua}</p>
      <p className="fw-bold">Bairro:</p>
      <p id="bairrolocal">{locais.bairro}</p>
      <p className="fw-bold">Cidade:</p>
      <p id="cidadelocal">{locais.cidade}</p>
      <p className="fw-bold">UF:</p>
      <p id="uflocal">{locais.uf}</p>
      <p className="fw-bold">Latitude:</p>
      <p id="latlocal">{locais.latitude}</p>
      <p className="fw-bold">Longitude:</p>
      <p id="longlocal">{locais.longitude}</p>
      </div>

      <div className="mapa-locais">
        <h2>Mapa</h2>
        <p>Localização dos locais cadastrados</p>
        <MapContainer center={initialCoord} zoom={13} className="map-container">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marcadores locais={[locais]}></Marcadores>
        </MapContainer>
      </div>


      
    </div>
    
  );
}
