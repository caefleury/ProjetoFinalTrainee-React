import {Container} from './styles.js'
import { Link } from 'react-router-dom';
import rightarrow from '../../assets/rightarrow.png'

const Navbar = () => {
    const struct = "{ STRUCT }"

    return(
        //<a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Stockio - Flaticon</a>-->
        <Container>
            <nav class="navbar__container">
                <Link class="logo" to="/">{struct}</Link>
                <ul class="navbar__menu">
                    <li class="navbar__item">
                        <Link to="/" class="navbar__link">Home</Link>
                    </li>
                    <li class="navbar__item">
                        <Link to="/portfolio" class="navbar__link">Portfolio</Link>
                    </li>
                    <li class="navbar__item">
                        <Link to="/sobre" class="navbar__link">Sobre</Link>
                    </li>
                </ul>
                <div class="navbar__btn__container">
                    <Link to="/contato" id="navbar__btn">CONTATO</Link>
                    <img class='arrow__img' src={rightarrow} alt='rightarrow'/>
                </div>
                </nav>    
        </Container>
    )
};

export default Navbar