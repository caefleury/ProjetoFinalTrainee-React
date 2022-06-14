import { Route, Routes } from "react-router-dom"
import Contato from "../pages/Contato"
import Homepage from "../pages/Homepage"
import Login from "../pages/Login"
import Portfolio from "../pages/Portfolio"
import Sobre from "../pages/Sobre"

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/contato" element={<Contato/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}

export default MyRoutes