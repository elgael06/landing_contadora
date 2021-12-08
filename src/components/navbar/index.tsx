import { Link } from "react-router-dom";

const links = [
    { name: 'acerca de mi', uri: '/about', icon: 'fas fa-info' },
    { name: 'mis servicios', uri: '/services', icon: 'fas fa-bars' },
    { name: 'resumen', uri: '/resumen', icon: 'fas fa-file-alt' },
    { name: 'Portfolio', uri: '/Portfolio', icon: 'fas fa-th-list' },
    { name: 'Contacto', uri: '/Contact', icon: 'fas fa-envelope' },
];

const NavBar = () => {

    return (<nav className='navbar is-link is-fixed-top'>
        <div className='navbar-brand'>
            <div className='navbar-burger burger' data-target="navbar">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div id='navbar' className='navbar-menu'>

                <div className='navbar-start'>
                    <Link to='/' className='navbar-item' >
                        <span className="icon">
                            <i className='fas fa-home'></i>
                        </span>
                        <span> Inicio </span>
                    </Link>
                </div>
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