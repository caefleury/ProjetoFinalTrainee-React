import Home from '../../components/Home';
import ServicesContainer from '../../components/ServicesContainer';
import PartnersContainer from '../../components/PartnersContainer';
import {useState, useEffect} from 'react'
import { api } from '../../services/api';

const Homepage = () =>{
    const [partners, setPartners] = useState([])

    useEffect(()=>{
        api.get('/partners/index')
        .then(response => setPartners(response.data))
    },[])

    return(
        <>
            <Home/>
            <ServicesContainer/>
            <PartnersContainer partners={partners}/>
        </>
    )
}

export default Homepage