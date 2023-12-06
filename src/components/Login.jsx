import imagenLogin from "../img/generales/imagen-login.png";
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import '../Styles/Login.css'

function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
const navigate = useNavigate()
  const onSubmit = handleSubmit(data => {

    signin(data);
  });

  useEffect(()=>{
    if(isAuthenticated) navigate("/PlataformaCursos");
  },[isAuthenticated]);


  return (
    <section id="about">
      <div className="container mt-4 p-4">
        <div className="row mt-4">
          <div className="col-lg-8 col-md-12">
            <h3 id="subtituloRegistro" className="textLogin">Inicia sesión y conecta con nuestra comunidad.</h3>
            <div className="row">
              <div className="col-md-12">
                {signinErrors.map((error, i) => (
                  <div className="bg-red-500 p-2 text-white" key={i}>
                    {error}
                  </div>
                ))}
                <form onSubmit={onSubmit} style={{ width: '80%', margin: 'auto' }}> {/* Agregado onSubmit aquí */}
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  {...register('email', { required: true })} />
                    {errors.email && (
                      <p className="text-red-500">correo es requerido</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" {...register('password', { required: true })} />
                    {errors.password && (
                      <p className="text-red-500">Contraseña es requerida</p>
                    )}
                  </div>
                  <button type="submit" className="btn botonlogin mb-2"> <b>Iniciar sesion</b></button>
                  <div>
                  <Link to="/registrarse" className="btn botonlogin"> <b>¿No tienes cuenta?</b></Link>
                  
                  </div>
                  
                </form>
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="d-flex justify-content-lg-end justify-content-md-center">
              <img src={imagenLogin} alt="imagen-login-principal" className="img-fluid" id="imagen-login-principal1" style={{ maxWidth: '120%', height: 'auto', marginTop: '250px', marginRight: '10px' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
