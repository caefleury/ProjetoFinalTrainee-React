import {Container} from './styles.js'
import { photo } from '../../services/photo.js'

const PartnerCard = ({image_url}) =>{
    return(
        <Container>
            <img className='partner__img' src={image_url ? photo.defaults.baseURL + image_url : `htttps://source.unsplash.com/random?book`} alt='Imagem do Parceiro'/>
        </Container>
    )
};

export default PartnerCard