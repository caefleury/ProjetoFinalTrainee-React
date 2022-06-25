import {Container} from './styles.js'
import foguetinho from '../../assets/foguetinho.png'

const Home = () => {
    return(
        <Container>
            <div className="home__container">
                <div className="text__container">
                    <div className="title__foguetinho">
                        <h1 className="title">{"{struct}"}</h1>
                        <img id='foguetinho__img' src={foguetinho} alt='foguetinho'/>
                    </div>
                    <p className="subtitle">
                        Empresa júnior especializada em desenvolvimento web. Atuando no
                        mercado desde 2014.
                    </p>
                </div>
            </div>
        </Container>
    )
}
export default Home