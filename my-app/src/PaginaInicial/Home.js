import './Home.css';
import TabelaAulas from './../TabelaAulas/TabelaAulas';

function Home() {
    return(
        <div>
            <header>
                <h1 className="title">Nome do projeto</h1>
            </header>
            <body className="body">
                <h3>Sequência didática de Pensamento Computacional para Ensino Fundamental II</h3>
                <p>A sequência didática foi elaborada por <a href='/sobre-o-projeto'>Oto Braz de Assunção em sua Tese de Mestrado </a>  
                e fundamentada nas nas Metáforas de Perspectivas Culturais (MPCs). </p>
                <i className="quote">As metáforas indicam que a interação com o sistema computacional pode ser
                                vista como uma “viagem” e que os seus usuários são “viajantes”. Assim, considera-se
                                que as pessoas utilizando determinado sistema estejam em uma espécie de jornada,
                                onde elas estariam explorando uma cultura desconhecida, o sistema. Um total de cinco
                                metáforas fazem parte da ferramenta: <b>Viajante Doméstico, Observador à Distância,
                                Estrangeiro em Visita Guiada, Estrangeiro com Tradutor e Estrangeiro sem Tradutor.</b></i>
                <p>As metáforas são usadas pelo autor como um guia para se apresentar de forma gradual uma cultura estrangeira, 
                    nesse caso, o Pensamento Computacional, aos usuários. Na sequência, as atividades se iniciam com atividades 
                    associadas ao Viajante Doméstico e, gradativamente, novos conceitos são apresentados e novas atividades são 
                    realizadas, de forma que o aluno percorra o continuum das metáforas até chegar à metáfora Estrangeiro 
                    sem Tradutor.</p>
                 
                <h3 >Visão Geral da Sequência Didática</h3>
                <div className="table">
                    <TabelaAulas></TabelaAulas>
                </div>                
            </body>
        </div>
    );
}

export default Home;