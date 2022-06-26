import {Container} from './styles.js'
import { photo } from '../../services/photo.js'
import ProjectMemberCard from '../ProjectMemberCard/index.js'
import { Link } from 'react-router-dom';

const ProjectCard = ({image_url,name,project_description,link,membersInProject,project_url}) =>{
    // arrumar link da imagem!
    return(
        <Container>
            <div className="project__container">
                <div className='project__content'>
                    <div className='text__container'>
                        <p className='title'>{name}</p>
                        <p className='description'>{project_description}</p>
                    </div>
                    <div className="project__image__container" >
                        <a href={project_url}>
                            <img className='project__photo'src={image_url ? photo.defaults.baseURL + image_url : `htttps://source.unsplash.com/random?book`} alt='Imagem do Projeto'/>
                        </a>
                    </div>
                </div>
            </div>
            <p className='members__title'>Membros Envolvidos</p>
            <div className='projectmembers__container'>
                {membersInProject.map((item,index)=>(
                    <ProjectMemberCard key={index} name={item.name} image_url={item.photo_url} project_role={item.project_role}/>
                ))}
            </div>

        </Container>
    )
};
    
export default ProjectCard