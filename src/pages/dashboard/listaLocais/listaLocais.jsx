import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function ListaLocais() {
    const [locais, setLocais] = useState([]);
    const userLoggedStorage = localStorage.getItem('@nature365:user');
    const user = userLoggedStorage ? JSON.parse(userLoggedStorage) : null;
    const userId = user ? user.id : null;
    
    useEffect(() => {
        if (userId) {
            async function fetchLocais() {
                try {
                    const responseLocais = await axios.get("http://localhost:3000/local/all");
                    
                    const locaisFiltrados = responseLocais.data.listarAll.filter(local => local.usuarios_id === userId);
                    
                    setLocais(locaisFiltrados);
                } catch (error) {
                    alert("Erro ao carregar os locais.");
                }
            }

            fetchLocais();
        }
    }, [userId]);

    async function handleDelete(id) {
        const confirmDelete = window.confirm("Tem certeza que deseja apagar este local?");
        if (confirmDelete) {
            try {
                const response = await axios.delete(`http://localhost:3000/local/${id}`);
                if (response.status === 200) {
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
                                    <Link to={`/dashboard/local/${local.id}`} className="app-link2">
                                        {local.nome}
                                    </Link>
                                </td>
                                <td>{local.usuarios_id}</td>
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
