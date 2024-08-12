import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

export function HomePage() {
  const [usersCount, setUsersCount] = useState(0);
  const [locais, setLocais] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Buscando o número de usuários
        const responseUsers = await fetch("http://localhost:3333/users");
        const usersData = await responseUsers.json();
        setUsersCount(usersData.length);

        // Buscando os locais cadastrados
        const responseLocais = await fetch("http://localhost:3333/locais");
        const locaisData = await responseLocais.json();
        setLocais(locaisData);

      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="main-content">
      <div className="stats">
        <div className="card-stats">
          <p style={{ color: 'white' }}>Usuários</p>
          <span className="fw-bolder fs-2">{usersCount}</span>
        </div>
        <div className="card-stats">
          <p style={{ color: 'white' }}>Locais</p>
          <span className="fw-bolder fs-2">{locais.length}</span>
        </div>
      </div>

      <div className="table-container">
        <h2>Locais</h2>
        <p>Listagem das localidades cadastradas</p>
        <table>
          <thead>
            <tr>
              <th>Local</th>
            </tr>
          </thead>
          <tbody>
            {locais.map((local) => (
              <tr key={local.id}>
                <td>
                  <Link to={`/dashboard/local/${local.id}`} className="local-link">
                    {local.nome}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

