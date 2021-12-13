import { useEffect } from "react";
import themeSignal from '../signals/theme.signal';

const HomePage = () => {
    useEffect(()=>{
        themeSignal.setTheme('is-link');
    },[]);
    return (<>
        <div className='hero-body'>
            <div className='container'>
                Hola!, yo soy...
                <h1 className='title is-1'>Cristian Val</h1>
                <h2 className='subtitle is-3'>Developer</h2>
            </div>
        </div>
    </>);
};

export default HomePage;