import { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';

const links = [
    { name: 'informacion', uri: '/about', icon: 'fas fa-info' },
    { name: 'servicios', uri: '/services', icon: 'fas fa-bars' },
    { name: 'resumen', uri: '/resumen', icon: 'fas fa-file-alt' },
    { name: 'Portafolio', uri: '/Portfolio', icon: 'fas fa-th-list' },
    { name: 'Contacto', uri: '/Contact', icon: 'fas fa-envelope' },
];

const NavBar = () => {
    const [active, setActicve] = useState(false);

    return (<nav className='navbar is-fixed-top'>
        <div className='navbar-brand'>
            <div className='navbar-start'>
                <Link to='/' className='navbar-item' >
                    <span className="icon">
                        <i className='fas fa-home'></i>
                    </span>
                    <span> Inicio </span>
                </Link>
            </div>

            <div role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false" onClick={() => setActicve(!active)}>
                <i className='btn-menu-bar'>
                    <section className="icon">
                        <i className={active ? 'fas fa-minus' : 'fas fa-ellipsis-v'}></i>
                    </section>
                </i>
            </div>

            <div id='navMenu' className={`navbar-menu ${active ? 'is-active' : ''}`}>

                <div className='navbar-end'>
                    {
                        links.map((item, index) => <Link to={item.uri} className='navbar-item' key={`url_${index}`} >
                            <span className="icon">
                                <i className={item.icon}></i>
                            </span>
                            <span> {item.name} </span>
                        </Link>)
                    }
                </div>

            </div>
        </div>
    </nav>);
};

export default NavBar;