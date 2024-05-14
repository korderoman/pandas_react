import { Button } from "antd";
import { useEffect } from "react";
import { CamionList } from "../components//camiones/CamionList";
import { CamionModalForm } from "../components/camiones/CamionModalForm";
import { useCamiones } from "../components/hook/useCamiones";


export const CamionesPage = () => {
  const {
    visibleForm,
    handlerOpenFormCamion,
    getCamiones,
  } = useCamiones();

  useEffect(() => {
    getCamiones();
  }, []);

    return (
    <>
    {!visibleForm || 
        <CamionModalForm/>
      }
      <div className="container my-4">
          <h2 style={{ textAlign:"center"}}>Registro de Camiones</h2>
          <div className="row">

              <div className="col">
                {
                (visibleForm) || <Button style={{ marginBottom:10}} onClick={handlerOpenFormCamion}>
                Crear Camion</Button>
                }
                {
                    <CamionList />
                }
              </div>
          </div>
      </div>
    </>
  );
}