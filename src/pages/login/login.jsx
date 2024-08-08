import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useAuth } from "../../contexts/auth";
import { useForm } from "react-hook-form";
import imgLogin from "../../assets/imgLogin.png";

export function LoginPage() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm();

  const { errors, isSubmitting } = formState;

  async function onSubmit(dados) {
    try {
      await signIn(dados);
      navigate("/dashboard");
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
            <label htmlFor="floatingInput">Email address</label>
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
              {...register("password")}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button
            className="btn btn-success w-100 py-2"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Carrengado..." : "Entrar"}
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
