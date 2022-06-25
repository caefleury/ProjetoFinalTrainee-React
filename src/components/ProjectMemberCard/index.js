import {Container} from './styles.js'
import { photo } from '../../services/photo.js'

const ProjectMemberCard = ({name,image_url,project_role}) =>{
    return(
        <Container>
            <div className="member__container">
                <div className='circle' >
                    <img className='member__photo' src={image_url ? photo.defaults.baseURL + image_url : 'https://source.unsplash.com/random?book'} alt='Imagem do Membro'/>
                </div>
                <p className='member__name'>{name}</p>
                <p className='member__role'>{project_role}</p>
            </div>
        </Container>
    )
};

export default ProjectMemberCard