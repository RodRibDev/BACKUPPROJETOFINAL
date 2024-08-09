import "./home.css"

export function HomePage() {
    return (
        <div className="main-content">
        
        <div className="stats">
          <div className="card-stats">
            <p style={{ color: 'white' }}>Usuários</p>
            <span>25</span>
          </div>
          <div className="card-stats">
            <p style={{ color: 'white' }}>Locais</p>
            <span>3</span>
          </div>
        </div>
        
        <div className="table-container">
          <h2>Locais</h2>
          <p>Listagem das localidades cadastradas</p>
          <table>
            <thead>
              <tr>
                <th>Local</th>
                <th>Usuário</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Trilha da Lagoinha</td>
                <td>André Silva</td>
              </tr>
              <tr>
                <td>Lagoa do Peri</td>
                <td>Rafael Santos</td>
              </tr>
              <tr>
                <td>Praia Brava</td>
                <td>Rodrigo Ribeiro</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
}