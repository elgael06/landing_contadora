import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import themeSignal from "../signals/theme.signal";


const NotFoundPage = () => {
    let location = useLocation();
    useEffect(()=>{
        themeSignal.setTheme('is-');
    },[]);
    return (<div>
        <article className="notification is-danger">
        <h3 className="title">pagina no encontrada!!!</h3>
            <p >Error al acceder al directorio <code>{location.pathname}</code>.</p>
            <p className="subtitle">
                <Link to='/'> Regresar a Inicio...</Link> 
            </p>
          </article>
    </div>);
};

export default NotFoundPage;