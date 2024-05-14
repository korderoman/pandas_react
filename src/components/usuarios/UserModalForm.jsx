import { UserForm } from "./UserForm";
import { useUser } from "../hook/useUser";

export const UserModalForm = () => {

    const  {userSelected, handlerCloseFormUser}= useUser();
    return (
      <div className="abrir-modal animacion fadeIn">
            <div className="modal" style={{display: "block"}} tabIndex="-1" >
              <div className="modal-dialog" role="document" style={{ margin: "auto", textAlign: "center" }}>
                <div className="modal-content">
                  <div className="modal-header" style={{ margin: "auto" }}>
                    <h5 className="modal-title">
                      {userSelected.id>0 ? 'Editar':'Crear'} usuario
                    </h5>
                  </div>
                  <div className="modal-body">
                    <UserForm
                        userSelected={userSelected} 
                        handlerCloseFormUser={handlerCloseFormUser}
                    />  
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }