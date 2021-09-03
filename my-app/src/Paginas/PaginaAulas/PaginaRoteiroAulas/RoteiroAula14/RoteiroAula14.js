import './RoteiroAula14.css';
import TabelaAula14 from './TabelaAula14';

function RoteiroAula14() {
    return(
        <div>
            <header>
                <h1 className="title">Aula 14 -  Árvores de Decisão e Estórias I</h1>
            </header>
            <body className="body">
                <TabelaAula14></TabelaAula14>
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/drive/folders/1R2l9sz35e5W2tgnfsrfhSAt9gjh_zpGM">
                    Drive com todos os materiais da aula 14
                </a>

                <p>Nesta aula os alunos aprendem sobre as árvores de decisão e as colocam em prática na 
                    definição de um roteiro de uma estória a ser implementada no Scratch</p>
              
            <h3>Descrição da Aula</h3>
            <p>
            Esta aula está estruturada em 4 partes: <i>introdução às árvores de decisão, criando um
            roteiro para estória, introdução à transmissão de mensagens no Scratch, criando uma
            estória animada no Scratch.</i>
            </p>
            <h5>Introdução às árvores de decisão</h5>
            <p>
            O professor apresenta aos alunos o conceito de árvores de decisão e demonstra um
            exemplo de aplicação de árvore de decisão para criação de um roteiro de uma estória.
            Nesse exemplo, é mostrado a interação entre um morcego e um urso. O urso faz
            perguntas ao morcego e o fluxo da estória é guiado pelas respostas dadas pelo morcego.
            </p>
            <h5>Criando um roteiro para estória</h5>
            <p>
            Nesta parte da aula, o professor distribuí uma cópia da folha <i>Aula 14 - Árvore de
            Decisão</i> aos alunos para que eles definam uma estória simples, utilizando a estrutura
            da árvore de decisão apresentada na primeira parte da aula.
            <br></br>O professor deve dizer aos alunos que a estória dos alunos devem acontecer de
            forma similar ao exemplo. Ou seja, os alunos devem pensar em uma estória com dois
            personagens, onde um dos personagens faz uma pergunta ao outro. O personagem
            pode dar duas respostas e cada resposta leva a um fim diferente.
            </p>
            <h5>Introdução à Transmissão de Mensagens no Scratch</h5>
            <p>
            Na terceira parte da aula, o professor introduz dois blocos de eventos, os quais serão
            necessários para que os alunos implementem suas estórias no Scratch. Os blocos a
            serem apresentados são:
            <br></br><br></br>
            <dl>
                <dt>Transmita [mensagem]</dt>
                <dd>Transmite determinada mensagem aos objetos dos projeto</dd>
                <dt>Quando eu receber [mensagem]</dt>
                <dd>utilizado similarmente ao blocos quando
                bandeira verde for clicada para implementar o que o personagem fará quando ele
                receber determinada mensagem</dd>
            </dl>
            <br></br><br></br>
            A <i>Aula 14 - Apresentação</i> ilustra os blocos e como o usuário pode criar novas 
            mensagens e nomeá-las. Exemplos de utilização dos blocos para implementar a pergunta final do lado esquerdo da árvore de decisão da estória do urso e morcego também 
            foram incluídos na apresentação para facilitar o entendimento dos alunos.
            </p>
            <h5>Criando uma estória animada no Scratch</h5>
            <p>
            Finalmente, na última parte da aula os alunos devem implementar suas respectivas
            estórias no Scratch. Deixe os últimos slides da <i>Aula 14 - Apresentação</i> com os exemplos
            de implementação visíveis para que os alunos consultem caso necessário.
            </p>
            <p>
                <i>
                <b>Obs.:</b> não há roteiros para esta parte dado que as estórias dos alunos serão diferentes. 
                Assim, os alunos podem ter que implementar diferentes tipos de interações (e.g.: mudança de cenários,
                inclusão de sons, inclusão de animações) ou incluir outros personagens/objetos que também deverão
                transmitir ou receber mensagens.
                </i>
                <br></br><br></br>
                <i>
                    <b>Obs.:</b>As implementação da estória do urso e do morcego podem ser acessadas através dos 
                    seguintes links:<a href="https://scratch.mit.edu/projects/521434228/">Aula 14 e 15 - Estória Simplificada</a>
                    <a href="https://scratch.mit.edu/projects/521481384/">Aula 14 e 15 - Estória Completa</a>
                </i>
            </p>
            </body>
        
        </div>
    );
}

export default RoteiroAula14;