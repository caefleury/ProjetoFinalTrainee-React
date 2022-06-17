import MemberCard from '../MemberCard/index.js'
import {Container} from './styles.js'

const MembersContainer =  ({members}) =>{
    return(
        <Container>
            <h1 className="title">Membros</h1>
            <div className="members__container">
                {members.map((item,index)=>(
                    <MemberCard key={index} name={item.name} image_url={item.photo_url} role={item.role.name}/>
                ))}
            </div>
        </Container>
    )
}

export default MembersContainer