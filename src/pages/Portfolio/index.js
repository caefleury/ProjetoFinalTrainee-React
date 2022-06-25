import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import {useState, useEffect} from 'react'
import { api } from '../../services/api';
import "swiper/css"
import ProjectContainer from '../../components/ProjectContainer';

const Portfolio = () => {
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        api.get('/projects/index')
        .then(response => setProjects(response.data))
    },[])

    //<ProjectContainer projects={projects} />
    //{console.log(projects)}
    return(
        <>
            <Navbar/>
            <ProjectContainer projects={projects}/>
            <Footer/>
        </>
    );
}

export default Portfolio