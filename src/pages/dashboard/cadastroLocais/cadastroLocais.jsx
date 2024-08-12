import { Link, useNavigate } from "react-router-dom";
import "./cadastroLocais.css";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

export function CadastroLocais() {
  const { register, handleSubmit, formState, setValue, watch } = useForm();
  const { errors, isSubmitting } = formState;
  const navigate = useNavigate();
  const [loadingAddress, setLoadingAddress] = useState(false);

  const cep = watch("cep");

  useEffect(() => {
    async function buscaCep() {
      if (cep && cep.length === 8) {
        try {
          setLoadingAddress(true);
          const cepresponse = await fetch(
            `https://cep.awesomeapi.com.br/json/${cep}`
          );
          const data = await cepresponse.json();
          console.log(data);

          if (data.address_name) {
            setValue("rua", data.address_name);
            setValue("bairro", data.district);
            setValue("cidade", data.city);
            setValue("uf", data.state);
            setValue("latitude", data.lat);
            setValue("longitude", data.lng);
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
        
        const userLoggedStorage = localStorage.getItem('@nature365:user');
        if (userLoggedStorage) {
            const user = JSON.parse(userLoggedStorage);
            data.usuario = user.nome;
        }
        const response = await fetch("http://localhost:3333/locais", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Local cadastrado com sucesso!");
        navigate("/dashboard");
      } else {
        alert("Erro ao cadastrar local.");
      }
    } catch (error) {
      alert("Erro ao conectar com o servidor.");
    }
  }

  return (
    <main className="container-cadastroLocais">
      <div className="formSignin">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="h3 mb-3 fw-normal">
            Preencha todos os campos para cadastrar o local.
          </h1>

          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Nome do Local
            </label>
            <input
              type="text"
              className="form-control"
              id="nome"
              placeholder="Insira o nome do local"
              {...register("nome", { required: "Nome do local é obrigatório" })}
            />
            {errors.nome && (
              <span className="text-danger">{errors.nome.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="descricao" className="form-label">
              Descrição
            </label>
            <textarea
              className="form-control"
              id="descricao"
              placeholder="Descreva o local"
              rows="4"
              {...register("descricao", {
                required: "A descrição é obrigatória",
              })}
            ></textarea>
            {errors.descricao && (
              <span className="text-danger">{errors.descricao.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="cep" className="form-label">
              CEP
            </label>
            <input
              type="text"
              className="form-control"
              id="cep"
              placeholder="Insira o CEP do local"
              {...register("cep", { required: "CEP é obrigatório" })}
            />
            {errors.cep && (
              <span className="text-danger">{errors.cep.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="rua" className="form-label">
              Rua
            </label>
            <input
              type="text"
              className="form-control"
              id="rua"
              placeholder="Nome da rua"
              {...register("rua", { required: "Rua é obrigatória" })}
            />
            {errors.rua && (
              <span className="text-danger">{errors.rua.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="bairro" className="form-label">
              Bairro
            </label>
            <input
              type="text"
              className="form-control"
              id="bairro"
              placeholder="Nome do bairro"
              {...register("bairro", { required: "Bairro é obrigatório" })}
            />
            {errors.bairro && (
              <span className="text-danger">{errors.bairro.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="cidade" className="form-label">
              Cidade
            </label>
            <input
              type="text"
              className="form-control"
              id="cidade"
              placeholder="Nome da cidade"
              {...register("cidade", { required: "Cidade é obrigatória" })}
            />
            {errors.cidade && (
              <span className="text-danger">{errors.cidade.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="uf" className="form-label">
              UF
            </label>
            <input
              type="text"
              className="form-control"
              id="uf"
              placeholder="UF"
              {...register("uf", { required: "UF é obrigatória" })}
            />
            {errors.uf && (
              <span className="text-danger">{errors.uf.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="latitude" className="form-label">
              Latitude
            </label>
            <input
              type="text"
              className="form-control"
              id="latitude"
              placeholder="Insira a Latitude"
              {...register("latitude", {
                required: "A Latitude é obrigatória",
              })}
            />
            {errors.latitude && (
              <span className="text-danger">{errors.latitude.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="longitude" className="form-label">
              Longitude
            </label>
            <input
              type="text"
              className="form-control"
              id="longitude"
              placeholder="Insira a Longitude"
              {...register("longitude", {
                required: "A longitude é obrigatória",
              })}
            />
            {errors.longitude && (
              <span className="text-danger">{errors.longitude.message}</span>
            )}
          </div>

          <button
            className="btn btn-success w-100 py-2"
            type="submit"
            disabled={isSubmitting || loadingAddress}
          >
            {isSubmitting || loadingAddress
              ? "Carregando..."
              : "Cadastrar Local"}
          </button>
          <p className="mt-5 mb-3 text-body-secondary">
            Natureza365 &copy; 2024
          </p>
          <p>
            Deseja ver os locais cadastrados?{" "}
            <Link to="/dashboard/listalocais" className="custom-link">
              Ver Locais
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
