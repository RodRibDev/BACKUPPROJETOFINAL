import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./local.css";

export function Local() {
  const { id } = useParams();
  const [local, setLocal] = useState(null);

  useEffect(() => {
    async function fetchLocal() {
      try {
        const response = await fetch(`http://localhost:3333/locais/${id}`);
        const data = await response.json();
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
  );
}
