import "./listaLocais.css"

export function ListaLocais() {
    return (
        <div className="main-content">
        
        <div className="table-container">
          <h2>Locais Cadastrados</h2>
          <p>Listagem e edição das localidades cadastradas</p>
          <table>
            <thead>
              <tr>
                <th>Local</th>
                <th>Usuário</th>
                <th>Alterar</th>
                <th>Apagar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Trilha da Lagoinha</td>
                <td>André Silva</td>
                <td><button className="btn btn-success">Editar</button></td>
                <td><button className="btn btn-danger">Deletar</button></td>
              </tr>
              <tr>
                <td>Lagoa do Peri</td>
                <td>Rafael Santos</td>
                <td><button className="btn btn-success">Editar</button></td>
                <td><button className="btn btn-danger">Deletar</button></td>
              </tr>
              <tr>
                <td>Praia Brava</td>
                <td>Rodrigo Ribeiro</td>
                <td><button className="btn btn-success">Editar</button></td>
                <td><button className="btn btn-danger">Deletar</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
}