import { useEffect } from "react";
import { Link } from "react-router-dom";
import themeSignal from "../signal/theme.signal";


const NotFoundPage = () => {
    useEffect(()=>{
        themeSignal.setTheme('is-');
    },[]);
    return (<div>
        <article className="notification is-danger">
        <h3 className="title">pagina no encontrada!!!</h3>
            <p >Error al acceder al directorio.</p>
            <p className="subtitle">
                <Link to='/'> Regresar a Inicio...</Link> 
            </p>
          </article>
    </div>);
};

export default NotFoundPage;