import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProjectContainer from '../../components/ProjectContainer';
import {useState, useEffect} from 'react'
import { api } from '../../services/api';

const Portfolio = () => {
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        api.get('/projects/index')
        .then(response => setProjects(response.data))
    },[])
    return(
        <>
            {console.log(projects)}
            <Navbar/>
            <ProjectContainer projects={projects} />
            <Footer/>
        </>
    );
}

export default Portfolio