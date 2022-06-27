import {Container} from './styles.js'
import { photo } from '../../services/photo.js'
import ProjectMemberCard from '../ProjectMemberCard/index.js'
import { api } from '../../services/api.js';
import { useEffect, useState } from 'react';
import {useUserContext} from '../../context/useUserContext'

const ProjectCard = ({image_url,name,project_description,link,membersInProject,project_url, project_id}) =>{

    const {user} = useUserContext()

    const removeMemberFromProject = async (member_id) => {
        const ProjectMember = [member_id, project_id]
        console.log(ProjectMember)
        await api.delete(`projects/removeMemberFromProject/${member_id}/${project_id}`)
    }

    return(
        <Container user={Object.keys(user).length !== 0}>
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
                {membersInProject.map((member,index)=>(
                    <div>
                    <ProjectMemberCard key={index} name={member.name} image_url={member.photo_url} project_role={member.project_role} member_id={member.member_id}/>
                    <button className='butão' type="button" onClick={() => {removeMemberFromProject(member.member_id)}}> Apagar </button>
                    </div> ))}
            </div>

        </Container>
    )
};
    
export default ProjectCard