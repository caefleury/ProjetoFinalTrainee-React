import ProjectCard from '../ProjectCard/index.js'
import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectFade, Navigation } from 'swiper';
import "swiper/css"
import { api } from '../../services/api.js';
import { Link } from "react-router-dom";
import { Container } from './styles';
import {useUserContext} from '../../context/useUserContext'
import { useEffect } from 'react';


const ProjectContainer = ({projects, setProjects}) => {

    const {user} = useUserContext()

    const deleteProject = (id) => {
            api.delete(`projects/delete/${id}`)
            .then((response) => {
                alert(`projeto deletado`) 
                setProjects(projects.filter(p => p.id !== id))
        
            })
            }
        useEffect(() => {
            console.log(user)
        },[])
        

    return(
        <Swiper
        modules = {[Navigation,EffectFade]}
        id='main' 
        navigation
        speed={900} 
        slidesPerView={1} 
        SlideChange={() => console.log('slide change')} 
        onSwiper={(swiper) => console.log(swiper)}>
            {projects.map((item,index)=>(
                <SwiperSlide className="swiper-slide">
                        <ProjectCard projects={projects} key={index} name={item.name} image_url={item.photo_url} project_url={item.link} 
                        project_description={item.description} project_link={item.link} membersInProject={item.membersInProject}/>
                        <Container user={user}>
                            <button type="button" onClick={() => {deleteProject(item.id)}}> Apagar </button>
                            <Link to="/PortfolioCreate">Criar</Link>
                            <Link to={`/PortfolioUpdate/${item.id}`} >Editar</Link>
                            <Link to={`/PortfolioPhoto/${item.id}`} >Add Foto</Link>
                        </Container>
                </SwiperSlide>
            ))} 
        </Swiper>
    )
};

export default ProjectContainer