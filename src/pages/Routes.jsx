import { BrowserRouter , Route  , Routes , HashRouter } from "react-router-dom"
import { Home } from "./Home"
import { Projetos } from "./Projetos"
import { Habilidades } from "./Habilidades"

const AppRoutes = () => {
    const SupportsHistory = () => {
        return !!(window.history && window.history.pushState);
    }

    const Router = SupportsHistory() ? BrowserRouter : HashRouter;

    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/Projetos" element={<Projetos/>} />
                <Route exact path="/Habilidades" element={<Habilidades/>} />
            </Routes>
        </Router>
    )
}

export {AppRoutes}