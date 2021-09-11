import * as IconBS from "react-bootstrap-icons";
import './RoteiroAula9.css';
import TabelaAula9 from './TabelaAula9';

function RoteiroAula9() {
    return(
        <div>
            <header>
                <h1 className="title">Aula 9 - Condicionais e Pong</h1>
            </header>
            <body className="body">
                <TabelaAula9></TabelaAula9>
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/drive/folders/1TY5M_G37Yd95IDxuIcccAMuFs3qsXOWU">
                    Drive com todos os materiais da aula 9
                </a>

            <p>Nesta aula os alunos continuam a prática e utilização das estruturas condicionais atra-
            vés do jogo Pong, onde eles devem controlar uma raquete para não deixar que uma
            bola caia no chão.</p>
                            
            <h3>Descrição da Aula</h3>
            <p>
            A Aula 9 foi estruturada em 3 partes: Revisão e Implementação do Jogo Pong.
            </p>
            <h5>Revisão</h5>
            <p>
            O professor inicia a aula conduzindo uma rápida revisão das condicionais e suas fina-
            lidades e os blocos que os alunos utilizaram na aula anterior pela primeira vez.
            <br></br>
            <br></br>
            Em seguida, devem ser introduzidos os blocos que serão utilizados pelos alunos
            para implementação do Jogo Pong durante o restante da aula e o próprio jogo através
            do vídeo ilustrativo no fim da Aula 9 - Apresentação.</p> 

            <h5>Implementação do Jogo Pong</h5>
            <p>
            O professor avança para o último slide da Aula 9 - Apresentação para apresentar e
            explicar o jogo que os alunos desenvolverão na parte prática da aula. Finalmente após
            a apresentação do projeto, o professor pede para que os alunos acessem suas contas e
            entrega as folhas Aula 8 - Roteiro para cada um deles. Similarmente a aula anterior,
            frise novamente que os alunos devem tentar ao máximo desenvolver, testar, resolver os
            problemas sozinhos.
            <br></br>
            <br></br>
            Caso um estúdio da turma tenha sido criado para os projetos da aula, peça
            que os alunos compartilhem seus projetos e os adicionem ao estúdio depois que eles
            terminarem a implementação do projeto.
            <br></br>
            <br></br>
                <i>
                    <b>Obs.:</b>o projeto implementado pode ser acessado através do seguinte link:<a href="https://scratch.mit.edu/projects/475466923"> Aula 9 - Pong </a>                
                </i>
            </p>
            </body>
            <footer class='footer'>
                <div class='row'>
                    <div class="col">
                        <a href='/aula-8'><IconBS.ChevronDoubleLeft/>Aula 8</a>
                    </div>
                    <div class="col text-right">
                        <a href='/aula-10'>Aula 10<IconBS.ChevronDoubleRight/></a>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default RoteiroAula9