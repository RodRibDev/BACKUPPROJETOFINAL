import { Link } from 'react-router-dom'
import './cadastro.css'
import logoPreta from "../../assets/logoNaturezaPto.png";

export function CadastroPage() {
    return (
        <main className='container-cadastro'>
            <div className='formSignin'>
                <form>
                    <div className='logoCadastro'>
                    <img className="" src={logoPreta} 
                    alt="Logomarca da aplicação" />
                    </div>
                    
                    <h1 className="h3 mb-3 fw-normal">Preencha todos os campos para efetuar o cadastro.</h1>
                    
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Insira seu nome" />
                    </div>

                    
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Sexo</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Defina seu sexo" />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">CPF</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Insira seu CPF" />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Data de nascimento</label>
                        <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Insira sua data de nascimento" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Senha</label>
                        <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Defina uma senha" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Endereço</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Insira seu CEP" />
                    </div>

                    <button className="btn btn-success w-100 py-2" type="submit">Entrar</button>
                    <p className="mt-5 mb-3 text-body-secondary">Natureza365 &copy; 2024</p>
                    <p>Já possui cadastro ? <Link to={-1} className="custom-link">Efetuar login</Link></p>
                </form>
            </div>

        </main>
    )
}