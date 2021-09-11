import * as IconBS from "react-bootstrap-icons";
import './RoteiroAula12.css';
import TabelaAula12 from './TabelaAula12';

function RoteiroAula12() {
    return(
        <div>
            <header>
                <h1 className="title">Aula 12 - Perguntas e Respostas II</h1>
            </header>
            <body className="body">
                <TabelaAula12></TabelaAula12>
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/drive/folders/1yI4BUQwVpe4hVGOMkHIHe7b_sijsRsiA">
                    Drive com todos os materiais da aula 12
                </a>

                <p>Nesta aula os alunos desenvolvem um jogo de perguntas e respostas dinâmicas para 
                    praticar a utilização de variáveis para fazer as perguntas e fazer a verificação das respostas.</p>
              
            <h3>Descrição da Aula</h3>
            <p>
            Estruturamos esta aula em 3 partes: <i>Revisão, Introdução aos Operadores e Criando um jogo de perguntas e respostas dinâmicas.</i>
            </p>
            <h5>Revisão</h5>
            <p>
            O professor inicia a aula com uma curta revisão sobre os sensores pergunte e resposta 
            utilizados na aula anterior.
            </p>
            <h5>Introdução aos Operadores</h5>
            <p>
            O professor explica a funcionalidade dos operadores que os alunos terão que utilizar na 
            aula para criar o jogo de perguntas e respostas de tabuada: igual (=), vezes (*), número 
            aleatório entre e junte. Destes blocos, o bloco junte é o mais complicado de entender 
            e utilizar, podendo ser confuso para os alunos visualizarem o que está acontecendo quando ele é utilizado. 
            <br></br>Para facilitar o entendimento por parte dos alunos em relação aos operadores e 
            a como eles podem ser combinados, foram incluídos slides com exemplos de combinação dos operadores igual (=), vezes (*) e junte. Além disso, para o operador junte, 
            incluímos dois exemplos de uso no Scratch para que os alunos pensem em qual será o resultado.
            </p>
            <h5>Criando um jogo de perguntas e respostas dinâmicas</h5>
            <p>
            Após apresentar os operadores e exemplos de usos aos estudantes, o professor introduz
            o jogo que eles criarão. O professor deve fazer um paralelo entre o jogo de perguntas e
            respostas desenvolvido na aula passada com o jogo de perguntas e respostas que será
            desenvolvido nesta aula. A grande diferença é que no jogo da Aula 11, as perguntas eram específicas e sempre as mesmas e, consequentemente, também as respostas
            também eram. Contudo, no jogo da Aula 12, as perguntas sendo exibidas dependerão
            dos valores aleatórios armazenados nas variáveis, logo, tanto as perguntas quanto as
            respostas terão valores diferentes a cada iteração do jogo. Desta forma, a verificação
            das respostas deve ser feita de tal forma que ela funcionará para quaisquer sejam os
            valores das variáveis. Utilize a animação do jogo incluída na <i>Aula 12 - Apresentação</i> 
            para ilustrar o funcionamento do jogo para os alunos            
            <br></br><br></br>Por fim é feita a distribuição das folhas <i>Aula 12 - Roteiro</i> aos alunos para que
            eles deem início ao desenvolvimento da primeira versão do jogo. Para o roteiro da
            Aula 12, nós propomos três versões do jogo de perguntas e respostas de matemática,
            sendo que a primeira é a mais simples de ser implementada. Na versão I, os alunos
            devem fazer o personagem perguntar qual o resultado da multiplicação de um número
            aleatório com um número fixo escolhido por eles. Na segunda versão, o personagem
            deve perguntar o resultado da multiplicação de dois números aleatórios. E por fim,
            na terceira versão, o personagem primeiro pergunta ao usuário qual a tabuada que ele
            quer praticar para que o personagem sempre pergunte o resultado da multiplicação de
            um número aleatório com o número informado pelo usuário.
            </p>
            <p>
                <i>
                <b>Recomendação:</b> Distribua a folha com as modificações apenas quando os alunos terminarem de implementar a primeira versão do jogo
                </i>
                <br></br><br></br>
                <i>
                    <b>Obs.:</b>As três versões do Jogo de Perguntas e Respostas de Matemática podem ser acessada 
                    através dos links abaixo: <br></br>
                    &emsp;<a href="https://scratch.mit.edu/projects/476584444">Aula 12 - Perguntas e respostas II - V1</a> <br></br>               
                    &emsp;<a href="https://scratch.mit.edu/projects/476851972">Aula 12 - Perguntas e respostas II - V2</a> <br></br>
                    &emsp;<a href="https://scratch.mit.edu/projects/476846859">Aula 12 - Perguntas e respostas II - V3</a>
                </i>
            </p>
            </body>
            <footer class='footer'>
                <div class='row'>
                    <div class="col">
                        <a href='/aula-11'><IconBS.ChevronDoubleLeft/>Aula 11</a>
                    </div>
                    <div class="col text-right">
                        <a href='/aula-13'>Aula 13<IconBS.ChevronDoubleRight/></a>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default RoteiroAula12;