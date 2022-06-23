import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import {useState, useEffect} from 'react'
import { api } from '../../services/api';
import {Swiper, SwiperSlide} from 'swiper/react'
import ProjectCard from '../../components/ProjectCard';

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
            {console.log(projects)}
            <Navbar/>
            <Swiper id='main' onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
                {projects.map((item,index)=>(
                    <SwiperSlide key={index}>
                            <ProjectCard projects={projects} key={index} name={item.name} image_url={item.photo_url} 
                            project_description={item.description} project_link={item.link} membersInProject={item.membersInProject}/>
                    </SwiperSlide>
                ))} 
            </Swiper>
            <Footer/>
        </>
    );
}

export default Portfolio