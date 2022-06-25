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
            <ProjectContainer projects={projects}/>
        </>
    );
}

export default Portfolio