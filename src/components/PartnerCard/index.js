import {Container} from './styles.js'
import { photo } from '../../services/photo.js'

const PartnerCard = ({image_url,partner_url}) =>{
    return(
        <Container>
            <a href={partner_url}>
                <img className='partner__img' src={image_url ? photo.defaults.baseURL + image_url : `htttps://source.unsplash.com/random?book`} alt='Imagem do Parceiro'/>
            </a>
        </Container>
    )
};

export default PartnerCard