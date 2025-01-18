import { BrowserRouter , Route  , Routes , HashRouter } from "react-router-dom"
import { Home } from "./Home"
import { Projetos } from "./Projetos"
import { Habilidades } from "./Habilidades"
import { Certificado } from "./certificado"

const AppRoutes = () => {
    const SupportsHistory = () => {
        return !!(window.history && window.history.pushState);
    }

    const Router = SupportsHistory() ? BrowserRouter : HashRouter;

    return(
        <Router basename="/">
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/Projetos" element={<Projetos/>} />
                <Route exact path="/Habilidades" element={<Habilidades/>} />
                <Route exact path="/Certificados" element={<Certificado/>}/>
            </Routes>
        </Router>
    )
}

export {AppRoutes}