import ProjectCard from '../ProjectCard/index.js'
import {Swiper, SwiperSlide} from 'swiper/react'

const ProjectContainer = ({projects}) => {

    return(
        <Swiper id='main'
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>{slides}</Swiper>
    )
};

export default ProjectContainer