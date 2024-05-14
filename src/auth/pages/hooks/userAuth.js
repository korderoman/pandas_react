import Swal from "sweetalert2";
import { loginUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout } from "../../../store/slices/auth/authSlice";

export const userAuth = () => {
    const {user, isAdmin, isAuth, id} = useSelector(state => state.auth);
    const dispatch = useDispatch();
  //const [login, dispatch] = useReducer(loginReducer, initialLogin);
    const navigate = useNavigate();

    const handlerLogin = async ({username, password}) =>{
        
        try{
          const response = await loginUser({username, password})
          console.log(response);
          const token=response.data.jwt;
          const claims = JSON.parse(window.atob(token.split(".")[1])); //el token se separa por puntos cabezera, claims, firma./viene en base 64->atob nos permite decodificar un script en base 64
          const user = {username: response.data.username}
          const id = {idUser: response.data.idUser}
          dispatch(onLogin({id,user, isAdmin: claims.isAdmin}));
          sessionStorage.setItem('login', JSON.stringify({
            isAuth: true,
            isAdmin: claims.idAdmin,
            user,
            id
          }));
          sessionStorage.setItem('token', `Bearer ${token}`)
          navigate('/users')
      } catch(error){
        if(error.response?.status ==401){
          Swal.fire('Error Loign','username y password inválidos', 'error');
        }else if(error.response?.status ==403){
          Swal.fire('Error Loign','No tiene acceso al recurso o permisos!', 'error');
        } else {
          throw error;
        }
      }
      }
    
      const handlerLogout=()=>{
        dispatch(onLogout({type: 'logout'}));
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('login');
        sessionStorage.clear();
      }

  return {
    login:{
      user,
      isAdmin,
      isAuth,
      id
    },
    handlerLogin,
    handlerLogout
  }
}
