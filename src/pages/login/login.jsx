import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useAuth } from "../../contexts/auth";
import { useForm } from "react-hook-form";
import imgLogin from "../../assets/imgLogin.png";
import { useEffect } from "react";

export function LoginPage() {
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm();

  const { errors, isSubmitting } = formState;

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  async function onSubmit(dados) {
    try {
      const isSucess = await signIn(dados);
    
      if (isSucess) {
        navigate("/dashboard");
      } else {
        alert('Email ou senha inválidos');
      }

    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="container-login">
      
      <div>
        <img className="imgLogin" src={imgLogin} 
        alt="Imagem tema da aplicação" />
      </div>
      
      <div className="formSignin-login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="h3 mb-3 fw-normal">Faça o login</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              {...register("email", {
                required: {
                  value: true,
                  message: "Esse campo é obrigatório",
                },
              })}
            />
            <label htmlFor="floatingInput">Insira seu email</label>
          </div>
          {errors.email && (
            <span className="text-danger text-sm">{errors.email.message}</span>
          )}
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              {...register("senha",{
                required: {
                  value: true,
                  message: "A senha é obrigatória",
                },
              })}
            />
            <label htmlFor="floatingPassword">Insira sua senha</label>
          </div>
          <button
            className="btn btn-success w-100 py-2"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Carregando..." : "Entrar"}
          </button>
          <p className="mt-5 mb-3 text-body-secondary">
            Natureza365 &copy; 2024
          </p>
          <p>
            Não possui cadastro? <Link to="/cadastro" className="custom-link">Cadastre-se</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
