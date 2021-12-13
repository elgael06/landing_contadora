
import { useEffect } from 'react';
import contadorSignal from '../signals/contador.signal';
import themeSignal from '../signals/theme.signal';

const AboutPage = () => {
    const numero = contadorSignal.useText();

    useEffect(()=>{
        console.log('value',numero);
        themeSignal.setTheme('is-info');
    },[]);

    const handleChange = (value: number) => () => {
        const newNum = numero+value;
        contadorSignal.setText(newNum>=0 ? newNum : 0);
    };

    return (<>
        <h1>Acerca de mi </h1>
      <hr />
      <b onClick={handleChange(-1)}>restar</b> 
      <h3>contador {numero}</h3>
      <b onClick={handleChange(1)}>agregar</b>
    </>);
};


export default AboutPage;