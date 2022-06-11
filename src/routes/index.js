import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage"
import Portfolio from "../pages/Portfolio"
import Sobre from "../pages/Sobre"

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
    )
}

export default MyRoutes