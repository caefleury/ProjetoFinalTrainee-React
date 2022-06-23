import { Container } from "./styles";

const Stats = () =>{
    return(
        <Container>
            <div className="stats__container">
                <div className="stats__content">
                    <p className="stats__title">Projetos Concluidos</p>
                    <p className="stats__number">+20</p>
                </div>
                <div className="stats__content">
                    <p className="stats__title">Membros ativos</p>
                    <p className="stats__number">14</p>
                </div>
                <div className="stats__content">
                    <p className="stats__title">Anos ativos</p>
                    <p className="stats__number">+8</p>
                </div>
            </div>
        </Container>
    )
};

export default Stats