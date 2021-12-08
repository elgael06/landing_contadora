
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import 'bulma/css/bulma.css';
import PublicRoutes from './routers';
import NavBar from "./components/navbar";
import Layout from "./components/layout";
function App() {

  return (<Layout>
    <BrowserRouter>
      <NavBar />
      <PublicRoutes />
    </BrowserRouter>
  </Layout>);
}

export default App
