import {Container} from './styles.js'
import foguetinho from '../../assets/foguetinho.png'

const Home = () => {
    return(
        <Container>
            <div class="home__container">
                <div class="text__container">
                    <div class="title__foguetinho">
                        <h1 class="title">{"{struct}"}</h1>
                        <img id='foguetinho__img' src={foguetinho} alt='foguetinho'/>
                    </div>
                    <p class="subtitle">
                        Empresa júnior especializada em desenvolvimento web. Atuando no
                        mercado desde 2014.
                    </p>
                </div>
            </div>
        </Container>
    )
}
export default Home