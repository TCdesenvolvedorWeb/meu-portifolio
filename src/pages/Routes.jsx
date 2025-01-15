import { BrowserRouter, Routes , Route} from "react-router-dom"
import { Home } from "./Home"
import { Projetos } from "./Projetos"
import { Habilidades } from "./Habilidades"

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/Projetos" element={<Projetos/>} />
                <Route exact path="/Habilidades" element={<Habilidades/>} />
            </Routes>
        </BrowserRouter>
    )
}

export {AppRoutes}