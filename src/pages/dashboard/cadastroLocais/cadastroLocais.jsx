import { Link } from 'react-router-dom'
import './cadastroLocais.css'
import logoPreta from "../../../assets/logoNaturezaPto.png";

export function CadastroLocais() {
    return (
        <main className='container-cadastroLocais'>
            <div className='formSignin'>
                <form>                    
                    <h1 className="h3 mb-3 fw-normal">Faça o cadastro de um local</h1>
                    
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Nome do Local</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Insira o nome do local" />
                    </div>

                    
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Descrição do local</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Descreva o local" />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">CEP</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Insira o CEP" />
                    </div>

                    <button className="btn btn-success w-100 py-2" type="submit">Cadastrar</button>
                    <p className="mt-5 mb-3 text-body-secondary">Natureza365 &copy; 2024</p>
                </form>
            </div>

        </main>
    )
}