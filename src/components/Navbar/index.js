import {Container} from './styles.js'
import { Link } from 'react-router-dom';
import rightarrow from '../../assets/rightarrow.png'

const Navbar = () => {
    const struct = "{ STRUCT }"

    return(
        //<a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Stockio - Flaticon</a>-->
        <Container>
            <nav className="navbar__container">
                <Link className="logo" to="/"  onClick={() => {window.location.href="/"}}>{struct}</Link>
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <Link to="/" className="navbar__link" onClick={() => {window.location.href="/"}} >Home</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/portfolio" className="navbar__link" onClick={() => {window.location.href="/portfolio"}}>Portfolio</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/sobre" className="navbar__link" onClick={() => {window.location.href="/sobre"}}>Sobre</Link>
                    </li>
                </ul>
                <Link to="/contato" className="navbar__btn__container">
                    <div id="navbar__btn">CONTATO</div>
                    <img className='arrow__img' src={rightarrow} alt='rightarrow'/>
                </Link>
                </nav>    
        </Container>
    )
};

export default Navbar