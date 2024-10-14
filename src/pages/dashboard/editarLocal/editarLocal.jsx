import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";

export function EditarLocal() {
  const { register, handleSubmit, formState, setValue, watch } = useForm();
  const { errors, isSubmitting } = formState;
  const navigate = useNavigate();
  const { id } = useParams();
  const [loadingAddress, setLoadingAddress] = useState(false);

  const cep = watch("cep");

  useEffect(() => {
    async function fetchLocal() {
      let token = localStorage.getItem('token');
      try {
        const response = await axios.get(`https://m3p-backend-squad3-n6s0.onrender.com/local/${id}`, {
          headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
          },
        });
        const data = response.data.listarLocal;

        setValue("nome", data.nome);
        setValue("descricao", data.descricao);
        setValue("cep", data.cep);
        setValue("rua", data.rua);
        setValue("bairro", data.bairro);
        setValue("cidade", data.cidade);
        setValue("uf", data.uf);
        setValue("latitude", data.latitude);
        setValue("longitude", data.longitude);
      } catch (error) {
        alert("Erro ao carregar os dados do local.");
      }
    }

    if (id) {
      fetchLocal();
    }
  }, [id, setValue]);

  useEffect(() => {
    async function buscaCep() {
      if (cep && cep.length === 8) {
        try {
          setLoadingAddress(true);
          const cepresponse = await fetch(
            `https://cep.awesomeapi.com.br/json/${cep}`
          );
          const data = await cepresponse.json();

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
    let token = localStorage.getItem('token');
    try {
      const localData = {
        nome: data.nome,
        descricao: data.descricao,
        cep: data.cep,
        rua: data.rua,
        bairro: data.bairro,
        cidade: data.cidade,
        uf: data.uf,
        latitude: data.latitude,
        longitude: data.longitude,
      };

      const response = await axios.put(`https://m3p-backend-squad3-n6s0.onrender.com/local/${id}`, localData, {
        headers: {
          'Authorization': `${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        alert("Local alterado com sucesso!");
        navigate("/dashboard");
      } else {
        alert("Erro ao editar local.");
      }
    } catch (error) {
      alert("Erro ao conectar com o servidor.");
    }
  }

  return (
    <div className="main-content">
      <div className="formSignin">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="h3 mb-3 fw-normal">Altere os campos que desejar.</h1>

          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome do Local</label>
            <input
              type="text"
              className="form-control"
              id="nome"
              placeholder="Insira o nome do local"
              {...register("nome", { required: "Nome do local é obrigatório" })}
            />
            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="descricao" className="form-label">Descrição</label>
            <textarea
              className="form-control"
              id="descricao"
              placeholder="Descreva o local"
              rows="4"
              {...register("descricao", {
                required: "A descrição é obrigatória",
              })}
            ></textarea>
            {errors.descricao && <span className="text-danger">{errors.descricao.message}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="cep" className="form-label">CEP</label>
            <input
              type="text"
              className="form-control"
              id="cep"
              placeholder="Insira o CEP do local"
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

          <div className="mb-3">
            <label htmlFor="latitude" className="form-label">Latitude</label>
            <input
              type="text"
              className="form-control"
              id="latitude"
              placeholder="Insira a Latitude"
              {...register("latitude", {
                required: "A Latitude é obrigatória",
              })}
            />
            {errors.latitude && <span className="text-danger">{errors.latitude.message}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="longitude" className="form-label">Longitude</label>
            <input
              type="text"
              className="form-control"
              id="longitude"
              placeholder="Insira a Longitude"
              {...register("longitude", {
                required: "A Longitude é obrigatória",
              })}
            />
            {errors.longitude && <span className="text-danger">{errors.longitude.message}</span>}
          </div>

          <button
            className="btn btn-primary w-100 py-2"
            type="submit"
            disabled={isSubmitting || loadingAddress}
          >
            {isSubmitting || loadingAddress
              ? "Carregando..."
              : "Salvar Alterações"}
          </button>
          <p className="mt-5 mb-3 text-body-secondary">Natureza365 &copy; 2024</p>
          <p>
            Deseja ver os locais cadastrados?{" "}
            <Link to="/dashboard/listalocais" className="custom-link">
              Ver Locais
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
