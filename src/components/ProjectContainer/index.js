import ProjectCard from '../ProjectCard/index.js'
import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectFade, Navigation } from 'swiper';
import "swiper/css"
const ProjectContainer = ({projects}) => {

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
                </SwiperSlide>
            ))} 
        </Swiper>
    )
};

export default ProjectContainer