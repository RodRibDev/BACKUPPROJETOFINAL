import { Link } from "react-router-dom";
import "./listaLocais.css";
import { useState, useEffect } from "react";

export function ListaLocais() {
    const [locais, setLocais] = useState([]);

    useEffect(() => {
        async function fetchLocais() {
            try {
                const response = await fetch("http://localhost:3333/locais");
                const data = await response.json();
                setLocais(data);
            } catch (error) {
                alert("Erro ao carregar os locais.");
            }
        }

        fetchLocais();
    }, []);

    async function handleDelete(id) {
        const confirmDelete = window.confirm("Tem certeza que deseja apagar este local?");
        if (confirmDelete) {
            try {
                const response = await fetch(`http://localhost:3333/locais/${id}`, {
                    method: "DELETE",
                });
                if (response.ok) {
                    alert("Local apagado com sucesso!");
                    setLocais(locais.filter(local => local.id !== id));
                } else {
                    alert("Erro ao apagar o local.");
                }
            } catch (error) {
                alert("Erro ao conectar com o servidor.");
            }
        }
    }

    return (
        <div className="main-content">
            <div className="table-containerLista">
                <h2>Locais Cadastrados</h2>
                <p>Listagem e edição das localidades cadastradas</p>
                <table>
                    <thead>
                        <tr>
                            <th>Local</th>
                            <th>Criado por</th>
                            <th>Alterar</th>
                            <th>Apagar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {locais.map((local) => (
                            <tr key={local.id}>
                                <td>
                                    <Link to={`/dashboard/local/${local.id}`} className="custom-link">
                                        {local.nome}
                                    </Link>
                                </td>
                                <td>{local.usuario}</td>
                                <td>
                                    <Link to={`/dashboard/editarlocal/${local.id}`}>
                                        <button className="btn btn-success">Editar</button>
                                    </Link>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => handleDelete(local.id)}>
                                        Deletar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
