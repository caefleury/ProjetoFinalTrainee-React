import { Route, Routes } from "react-router-dom"
import Contato from "../pages/Contato"
import Homepage from "../pages/Homepage"
import LoginPage from "../pages/Login"
import Portfolio from "../pages/Portfolio"
import Sobre from "../pages/Sobre"
import PortfolioCreate from "../pages/PortfolioCreate";
import PortfolioUpdate from "../pages/PortfolioUpdate";
import PortfolioPhoto from "../pages/PortfolioPhoto";
import PartnersCreate from "../pages/PartnersCreate"
import PartnersUpdate from "../pages/PartnersUpdate";
import MemberCreate from "../pages/MemberCreate";
import MemberPhoto from "../pages/MemberPhoto";
import MemberUpdate from "../pages/MemberUpdate";

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/PortfolioCreate" element={<PortfolioCreate/>}/>
            <Route path="/PortfolioUpdate/:id" element={<PortfolioUpdate/>}/>
            <Route path="/PortfolioPhoto/:id" element={<PortfolioPhoto/>}/>
            <Route path="/PartnersCreate" element={<PartnersCreate/>}/>
            <Route path="/PartnersUpdate/:id" element={<PartnersUpdate/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/contato" element={<Contato/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/MemberCreate" element={<MemberCreate/>}/>
            <Route path="/MemberPhoto/:id" element={<MemberPhoto/>}/>
            <Route path="/MemberUpdate/:id" element={<MemberUpdate/>}/>
        </Routes>
    )
}

export default MyRoutes