import ProjectCard from '../ProjectCard/index.js'
import {Container} from './styles.js'

const ProjectContainer = ({projects}) => {
    
    return(
        <Container>
            {projects.map((item,index)=>(
                <ProjectCard projects={projects} key={index} name={item.name} image_url={item.photo_url} 
                    project_description={item.description} project_link={item.link} membersInProject={item.membersInProject}/>
            ))} 
        </Container>
    )
};

export default ProjectContainer