import * as IconBS from "react-bootstrap-icons";
import './RoteiroAula15.css';
import TabelaAula15 from './TabelaAula15';

function RoteiroAula15() {
    return(
        <div>
            <header>
                <h1 className="title">Aula 15 -  Árvores de Decisão e Estórias II</h1>
            </header>
            <body className="body">
                <TabelaAula15></TabelaAula15>
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/drive/folders/14gMCa7DZ-X_ek6HuN5v_3AsUasdf41QL">
                    Drive com todos os materiais da aula 15
                </a>

                <p>Nesta aula é dada continuação a implementação e extensão da estória animada dos
                alunos. É esperado que todos os alunos consigam ao menos finalizar a parte simplificada
                da estória, ou seja, estória com uma pergunta e dois fins.</p>
              
            <h3>Descrição da Aula</h3>
            <p>
            A Aula 15 foi dividida em 2 partes: <i>revisão e continuação a implementação da estória</i>
            </p>
            <h5>Revisão</h5>
            <p>
            Nos minutos iniciais da aula o professor faz uma revisão dos tópicos apresentados na
            aula anterior: árvores de decisão, blocos de transmissão de mensagens e os exemplos
            de uso dos blocos.
            </p>
            <h5>Continuação a implementação da estória</h5>
            <p>
            Em seguida, o professor distribui os roteiros das estórias definidas pelos alunos na aula
            anterior e pede que eles deem continuidade às atividades iniciadas na aula anterior.
            Os alunos devem finalizar a implementação da estória simplificada definida por eles na
            Aula 14.
            <br></br>Para os alunos que conseguirem terminar a implementação de suas estórias simples, disponibilize a implementação completa da estória do urso e morcego para que os
            alunos testem e, em seguida, peça que eles tentem estender seus projetos e deixá-los
            mais sofisticados. Algumas sugestões que o professor pode dar são:
            <br></br><br></br>
            <dl>
                <dd>- Inclusão de continuações para a estória depois dos dois fins originais</dd>
                <dd>- Inclusão de cenário para representar o fim da estória</dd>
                <dd>- Inclusão de diálogos iniciais entre os personagens da estória</dd>
            </dl>
            </p>
            <p>
                <i>
                    <b>Obs.:</b>As implementação da estória do urso e do morcego podem ser acessadas através dos 
                    seguintes links:<br/>
                    &emsp;<a href="https://scratch.mit.edu/projects/521434228/">Aula 14 e 15 - Estória Simplificada</a><br/>
                    &emsp;<a href="https://scratch.mit.edu/projects/521481384/">Aula 14 e 15 - Estória Completa</a>
                </i>
            </p>
            </body>
            <footer class='footer'>
                <div class='row'>
                    <div class="col">
                        <a href='/aula-14'><IconBS.ChevronDoubleLeft/>Aula 14</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default RoteiroAula15;