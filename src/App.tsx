import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css'
import 'bulma/css/bulma.css';
import contadorSignal from './signals/contador.signal';

const PublicRoutes = lazy(() => import('./routers'));
const NavBar = lazy(() => import("./components/navbar"));
const Layout = lazy(() => import("./components/layout"));

function App() {
  const numero = contadorSignal.useText();

  useEffect(()=>{
    console.log('value app->',numero);
  });

  return (<Suspense fallback={<div>cargando...</div>}>
    <Layout>
      <BrowserRouter>
        <NavBar />
        <PublicRoutes />
      </BrowserRouter>
    </Layout>
  </Suspense>);
}

export default App
