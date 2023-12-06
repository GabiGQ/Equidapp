import imagenLogin from "../img/generales/imagen-login.png";
import '../register.css';
import { useForm } from 'react-hook-form'
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Login.css"


export default function Registro() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/PlataformaCursos')

  }, [isAuthenticated])


  const onSubmit = handleSubmit(async (values) => {
    signup(values);
    console.log(registerErrors);
  });

  return (

    <section id="about">
      {
        registerErrors.length !== 0 ? registerErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        )):null
        }
      <div className="container mt-4 p-4">
        <div className="row mt-4">
          <div className="col-lg-8 col-md-12">
            <h3 id="subtituloRegistro" className="textLogin">Regístrate para ser parte de nuestra comunidad</h3>
            <div className="row">
              <div className="col-md-12">
                <form onSubmit={onSubmit} style={{ width: '80%', margin: 'auto' }}> {/* Agregado onSubmit aquí */}
                  <div className="row pt-2 pb-3">
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Nombre" aria-label="First name"  {...register('name', { required: true })} />
                      {errors.name && (
                        <p className="text-red-500">nombre es requerido</p>
                      )}
                    </div>
                    <div className="col">

                      <input type="text" className="form-control" placeholder="Apellido" aria-label="Last name"  {...register('lastname', { required: true })} />
                      {errors.lastname && (
                        <p className="text-red-500">apellido es requerido</p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <h6>Fecha de Nacimiento</h6>
                  </div>
                  <div className="row p-3">
                    <input type="date" {...register('date', { required: true })} />
                    {errors.date && (
                      <p className="text-red-500">fecha de nacimiento es requerida</p>
                    )}
                  </div>
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
                  <button type="submit" className="btn botonlogin mb-2">Registrarse</button>
                  <div>
                    <Link to="/login" className="btn botonlogin">¿Ya tienes cuenta?</Link>
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
