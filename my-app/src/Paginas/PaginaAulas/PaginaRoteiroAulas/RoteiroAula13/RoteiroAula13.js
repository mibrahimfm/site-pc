import './RoteiroAula13.css';
import TabelaAula13 from './TabelaAula13';

function RoteiroAula13() {
    return(
        <div>
            <header>
                <h1 className="title">Aula 13 -  Jogo de Desviar</h1>
            </header>
            <body className="body">
                <TabelaAula13></TabelaAula13>
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/drive/folders/18bVsTSiOU18CkxqHsuM9-Nad5ls5RkE6">
                    Drive com todos os materiais da aula 13
                </a>

                <p>Nesta aula os alunos aprendem sobre clones no Scratch e desenvolvem um jogo em que 
                    eles devem controlar um personagem para evitar objetos caindo do céu. Estes objetos 
                    são criados utilizando os blocos responsáveis por gerenciar os clones.</p>
              
            <h3>Descrição da Aula</h3>
            <p>
            Estruturamos esta aula em 2 partes: <i>Introdução aos Clones e Criando um jogo de desviar.</i>
            </p>
            <h5>Introdução aos Clones</h5>
            <p>
            O professor apresenta aos alunos o conceito de clones no contexto do Scratch. Os clones
            são cópias de personagens ou objetos, que apresentarão o mesmo comportamento após
            serem criados. Por exemplo, no jogo de desviar, o jogador controla um personagem
            para evitar os objetos caindo do céu. Esses objetos sempre farão as mesmas coisas,
            logo, os blocos para gerenciar clones podem ser utilizados para criar esses objetos em
            tempo real enquanto o jogo está sendo executado.
            <br></br>Os blocos de gerenciamento de clones a serem apresentados são:
            <br></br><br></br>
            <dl>
                <dt>Crie clone de [este ator]</dt>
                <dd>Cria um clone do ator onde este bloco é utilizado</dd>
                <dt>Quando eu começar como um clone</dt>
                <dd>Utilizado para programar o que o clone 
                    faz depois que ele é criado. Note que a forma deste bloco é a mesma do bloco 
                    Quando a bandeira verde for clicada. Chame a atenção dos alunos para isso e diga que ele funciona de maneira similar.</dd>
                <dt>Apague este clone</dt>
                <dd>Exclui o clone em questão</dd>
            </dl>
            </p>
            <h5>Criando um jogo de perguntas e respostas dinâmicas</h5>
            <p>
            Após o conceito de clones e os blocos para gerenciá-los serem apresentados aos estudantes, o professor introduz o jogo que será criado na aula. 
            Utilize a animação do jogo incluída na Aula 13 - Apresentação para ilustrar o funcionamento do jogo para os alunos.
            </p>
            <p>
            <i>
                    <b>Obs.:</b>o personagem no jogo será movimentado da mesma forma que o personagem que eles
                    programaram no Jogo da Coleta na Aula 8. Assim, acrescentamos um slide após o slide ilustrando o
                    funcionamento do jogo para relembrar os alunos do funcionamento do script que controla o personagem.
                </i>
            </p>                        
            <p>
            Por fim é feita a distribuição das folhas <i>Aula 13 - Roteiro</i> aos alunos para que
            eles deem início ao desenvolvimento do jogo de desviar. O roteiro foi divido em três
            seções. Na primeira seção, os alunos programam o objeto que será clonado. Na segunda
            seção, os alunos programam o personagem que será controlado pelo jogador. Por fim,
            na última seção, propomos algumas modificações para o jogo como a adição de tempo
            para o jogador saber quando tempo ele conseguiu sobreviver, a adição de outros objetos
            que devem ser evitados e a modificação de como os objetos se movimentam no cenário
            </p>
            <p>
                <i>
                <b>Recomendação:</b> Distribua a folha com as modificações apenas quando os alunos terminarem de implementar a primeira versão do jogo
                </i>
                <br></br><br></br>
                <i>
                    <b>Obs.:</b>As versões do Jogo de Desviar implementados podem ser acessadas através dos seguintes
                    links: <a href="https://scratch.mit.edu/projects/521241182/">Aula 13 - Jogo de Desviar</a>
                    <a href="https://scratch.mit.edu/projects/521322546/">Aula 13 - Jogo de Desviar com Modificações</a>
                </i>
            </p>
            </body>
        
        </div>
    );
}

export default RoteiroAula13;