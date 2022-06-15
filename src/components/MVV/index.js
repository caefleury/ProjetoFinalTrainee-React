import { Container } from "./styles";

const MVV = () =>{
    return(
        <Container>
            <h1 className="title">MVV</h1>
            <div className="mvv__container">
                <div className="missao__container">
                    <h1><span className="bru">M</span>issão</h1>
                    <p className="text__content">Formar estudantes mais profissionais e mais capacitados por meio da vivência empresarial.</p>
                </div>
                <div className="visao__container">
                    <h1><span className="bru">V</span>isão</h1>
                    <p className="text__content">Proporcionar os melhores produtos e experiência ao cliente. Fortalecer a representatividade da EC no ambiente acadêmico e no mercado.</p>
                </div>
                <div className="valores__container">
                    <h1><span className="bru">V</span>alores</h1>
                    <ul className="list__container">
                        <li className="list__item"><span className="bru">S</span>inergia</li>
                        <li className="list__item"><span className="bru">T</span>ransparência</li>
                        <li className="list__item"><span className="bru">R</span>espeito</li>
                        <li className="list__item"><span className="bru">U</span>nião</li>
                        <li className="list__item"><span className="bru">C</span>ompromisso</li>
                        <li className="list__item"><span className="bru">T</span>ransformadora</li>
                    </ul>
                </div>
            </div>
        </Container>
    )
};

export default MVV