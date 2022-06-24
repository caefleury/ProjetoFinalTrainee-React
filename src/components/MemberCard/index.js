import {Container} from './styles.js'
import { photo } from '../../services/photo.js'

const MemberCard =  ({name,image_url,role}) =>{
    let role_color = 'white__role'
    let circle_color = 'gray__circle'
    if (role === 'Diretor'){
        role_color = 'blue__role'
        circle_color = 'blue__circle'
    }
    else if (role === 'Presidente'){
        role_color = 'orange__role'
        circle_color = 'orange__circle'
    }
    return(
        <Container>
            <div className="member__container">
                <div className='circle' id={circle_color}>
                    <img className='member__photo' src={image_url ? photo.defaults.baseURL + image_url : `https://source.unsplash.com/random?book`} alt='Imagem do Membro'/>
                </div>
                <p className='member__name'>{name}</p>
                <p className='member__role' id={role_color} >{role}</p>
            </div>
        </Container>
    )
}

export default MemberCard