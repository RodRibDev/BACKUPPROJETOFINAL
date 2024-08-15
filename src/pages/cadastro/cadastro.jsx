import { Link, useNavigate } from 'react-router-dom';
import './cadastro.css';
import logoPreta from "../../assets/logoNaturezaPto.png";
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

export function CadastroPage() {
    const { register, handleSubmit, formState, setValue, watch } = useForm();
    const { errors, isSubmitting } = formState;
    const navigate = useNavigate();
    const [loadingAddress, setLoadingAddress] = useState(false);

    const cep = watch('cep');

    useEffect(() => {
        async function buscaCep() {
            if (cep && cep.length === 8) {
                try {
                    setLoadingAddress(true);
                    const cepresponse = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
                    const data = await cepresponse.json();

                    if (data.address_name) {
                        setValue('rua', data.address_name);
                        setValue('bairro', data.district);
                        setValue('cidade', data.city);
                        setValue('uf', data.state);
                    } else {
                        alert("CEP não encontrado.");
                    }
                } catch (error) {
                    alert("Erro ao buscar o CEP.");
                } finally {
                    setLoadingAddress(false);
                }
            }
        }

        buscaCep();
    }, [cep, setValue]);

    async function onSubmit(data) {
        try {
            const response = await fetch("http://localhost:3333/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert("Usuário cadastrado com sucesso!");
                navigate("/");
            } else {
                alert("Erro ao cadastrar usuário.");
            }
        } catch (error) {
            alert("Erro ao conectar com o servidor.");
        }
    }

    return (
        <div className='container-cadastro'>
            <div className='formSignin'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='logoCadastro'>
                        <img src={logoPreta} alt="Logomarca da aplicação" />
                    </div>
                    
                    <h1 className="h3 mb-3 fw-normal">Preencha todos os campos para efetuar o cadastro.</h1>
                    
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nome</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            placeholder="Insira seu nome" 
                            {...register("nome", { required: "Nome é obrigatório" })}
                        />
                        {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="sexo" className="form-label">Sexo</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="sexo" 
                            placeholder="Defina seu sexo" 
                            {...register("sexo", { required: "Sexo é obrigatório" })}
                        />
                        {errors.sexo && <span className="text-danger">{errors.sexo.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="cpf" className="form-label">CPF</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="cpf" 
                            placeholder="Insira seu CPF" 
                            {...register("cpf", { required: "CPF é obrigatório" })}
                        />
                        {errors.cpf && <span className="text-danger">{errors.cpf.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="dataNascimento" className="form-label">Data de nascimento</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            id="dataNascimento" 
                            placeholder="Insira sua data de nascimento" 
                            {...register("dataNascimento", { required: "Data de nascimento é obrigatória" })}
                        />
                        {errors.dataNascimento && <span className="text-danger">{errors.dataNascimento.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Insira seu email" 
                            {...register("email", { required: "Email é obrigatório" })}
                        />
                        {errors.email && <span className="text-danger">{errors.email.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="senha" className="form-label">Senha</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="senha" 
                            placeholder="Defina uma senha" 
                            {...register("senha", { required: "Senha é obrigatória" })}
                        />
                        {errors.senha && <span className="text-danger">{errors.senha.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="cep" className="form-label">CEP</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="cep" 
                            placeholder="Insira seu CEP" 
                            {...register("cep", { required: "CEP é obrigatório" })}
                        />
                        {errors.cep && <span className="text-danger">{errors.cep.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="rua" className="form-label">Rua</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="rua" 
                            placeholder="Nome da rua" 
                            {...register("rua", { required: "Rua é obrigatória" })}
                        />
                        {errors.rua && <span className="text-danger">{errors.rua.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="bairro" className="form-label">Bairro</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="bairro" 
                            placeholder="Nome do bairro" 
                            {...register("bairro", { required: "Bairro é obrigatório" })}
                        />
                        {errors.bairro && <span className="text-danger">{errors.bairro.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="cidade" className="form-label">Cidade</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="cidade" 
                            placeholder="Nome da cidade" 
                            {...register("cidade", { required: "Cidade é obrigatória" })}
                        />
                        {errors.cidade && <span className="text-danger">{errors.cidade.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="uf" className="form-label">UF</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="uf" 
                            placeholder="UF" 
                            {...register("uf", { required: "UF é obrigatória" })}
                        />
                        {errors.uf && <span className="text-danger">{errors.uf.message}</span>}
                    </div>

                    <button className="btn btn-success w-100 py-2" type="submit" disabled={isSubmitting || loadingAddress}>
                        {isSubmitting || loadingAddress ? "Carregando..." : "Cadastrar"}
                    </button>
                    <p className="mt-5 mb-3 text-body-secondary">Natureza365 &copy; 2024</p>
                    <p>Já possui cadastro? <Link to="/login" className="custom-link">Efetuar login</Link></p>
                </form>
            </div>
        </div>
    );
}
