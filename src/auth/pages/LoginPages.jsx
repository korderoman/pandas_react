import pandaImg from '../../images/panda-icon.png';
import usuariolIcon from '../../images/usuario-icon.png';
import passwordlIcon from '../../images/password-icon.png';
import './login.css'
import Swal from 'sweetalert2';
import { useState } from 'react';
import { userAuth } from './hooks/userAuth';

const initialLoginForm={
    username: '',
    password: ''
}
export const LoginPages = () => {
    //login
    const {handlerLogin}= userAuth()
    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const {username, password}= loginForm;
    const [isHovered, setIsHovered] = useState(false);
    const onInputChange = ({target}) =>{
        const {name, value}= target;
        setLoginForm({
            ...loginForm,
            [name] : value,
        })
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        if(!username || !password){
            Swal.fire('Error de validación', 'username y password requeridos', 'error')
        }
        handlerLogin({username, password});
        setLoginForm(initialLoginForm);
    }
    const loginAsGuest = () => {
        // Definir las credenciales para invitados
        const guestCredentials = {
            username: "pimpolO",
            password: "RPantaX#."
        };
        // Iniciar sesión con las credenciales de invitado
        handlerLogin(guestCredentials);
        // Limpiar el formulario
        setLoginForm(initialLoginForm);
    }
    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }
  return (
    <>
    <div className='login'>
        <div className='panda'>
            <img src={pandaImg}  alt="" />
            <h1>PANDA</h1>
        </div>
        <form onSubmit={onSubmit}>
            <legend><strong>INICIAR SESIÓN</strong></legend>
            <div className='email'>
                <img className="icon" src={usuariolIcon} alt="usuario-icon" />
                <input 
                    type="text" 
                    name="username"
                    placeholder="username"
                    value={username}
                    onChange={onInputChange} />
            </div>
            
            <div className='password'>
                <img className="icon"  src={passwordlIcon} alt="" />
                <input 
                    type="password"
                    name="password"
                    placeholder="contraseña"
                    value = {password}
                    onChange={onInputChange} />
            </div>
            <div className='invitado'>
                <p 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave} 
                    onClick={loginAsGuest} 
                    style={{cursor: isHovered ? 'pointer' : 'auto'}}>
                    <strong>Ingresar como invitado</strong>
                </p>
            </div>
            <div >
                <button type='submit'>Iniciar Sesión</button>
            </div>
        </form>
    </div>
    </>
    
  );
}
