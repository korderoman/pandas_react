import { CamionForm } from "./CamionForm";
import { useCamiones } from "../hook/useCamiones";

export const CamionModalForm = () => {

    const  {camionSelected, handlerCloseFormCamion}= useCamiones();
    return (
      <div className="abrir-modal animacion fadeIn">
            <div className="modal" style={{display: "block"}} tabIndex="-1">
              <div className="modal-dialog" role="document" style={{ margin: "auto", textAlign: "center" }}>
                <div className="modal-content">
                  <div className="modal-header" style={{ margin: "auto" }}>
                    <h5 className="modal-title">
                      {camionSelected.id>0 ? 'Editar':'Crear'} Camión
                    </h5>
                  </div>
                  <div className="modal-body">
                    <CamionForm
                        camionSelected={camionSelected} 
                        handlerCloseFormCamion={handlerCloseFormCamion}
                    />  
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }