import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ServicesPage from '../views/Services';

//pages
const AboutPage = lazy(() => import("../views/About"));
const HomePage = lazy(() => import("../views/Home"));
const NotFoundPage = lazy(() => import("../views/NotFound"));

const PublicRoutes = () => {

    return (<Suspense fallback={<div>cargando...</div>}>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </Suspense>);
};

export default PublicRoutes;