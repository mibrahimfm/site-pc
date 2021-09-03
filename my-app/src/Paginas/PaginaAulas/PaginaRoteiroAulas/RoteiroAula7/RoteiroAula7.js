import './RoteiroAula7.css';
import TabelaAula7 from './TabelaAula7';

function RoteiroAula7() {
    return(
        <div>
            <header>
                <h1 className="title">Aula 7 - Jogo de Clicar</h1>
            </header>
            <body className="body">
                <TabelaAula7></TabelaAula7>
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/drive/folders/1g20T0F1KPGPtlWiMs6mEhcD9alCoYOp-">
                    Drive com todos os materiais da aula 7
                </a>

                <p>Nesta aula os alunos continuam a praticar a utilização dos blocos básicos do Scratch através da criação de um jogo simples de clicar.</p>
              
            <h3>Descrição da Aula</h3>
            <p>
            Esta aula está estruturada em três partes: Revisão e Apresentação de novos blocos de comando,
             Desenvolvimento das mecânicas básicas do jogo, Implementação de modificações
            </p>
            <h5>Revisão e Apresentação de Novos Blocos de Comando</h5>
            <p>
            O professor inicia a aula conduzindo uma pequena revisão através da Aula 7 - Apresentação para relembrar os alunos dos blocos de eventos introduzidos na aula anterior. 
            O professor deve dar mais atenção para os seguintes eventos: quando a bandeira verde 
            for clicada e quando o ator for clicado. Estes dois eventos deverão ser utilizados pelos 
            alunos quando eles forem implementar o jogo durante o restante da aula. 
            Além da revisão dos blocos de eventos, incluímos também na Aula 7 - Apresentação um slide com os principais blocos que os alunos irão utilizar na aula: mostre, 
            esconda, vá para posição aleatória e espere 1 segundo. O professor deve explicar o 
            funcionamento destes blocos para que os alunos já tenham ideia de como utilizá-los 
            quando eles forem seguir as tarefas da folha Aula 7 - Roteiro
                <dl>
                    <dt>Mostre e esconda</dt>
                    <dd>Faz o personagem aparecer e desaparecer respectivamente.</dd>
                    <dt>Vá para posição aleatória</dt>
                    <dd>Muda a posição do personagem para um lugar aleatório do cenário.</dd>
                    <dt>Espere 1 segundo</dt>
                    <dd>Interrompe a execução do script por 1 segundo. Quando um segundo for passado é dada continuação à execução. Este bloco deverá ser 
                    utilizado para fazer com que o personagem permaneça na tela por um segundo antes de desaparecer e com que ele permaneça escondido 
                    por um segundo antes de voltar a aparecer.</dd>
                </dl>
            </p>
            
            <h5>Desenvolvimento do funcionamento básicos do jogo</h5>
            <p>
            O professor agora explica o que os alunos desenvolverão na aula. Avance para o slide da <i>Aula 7 - Apresentação</i> que contém um vídeo demonstrando o funcionamento básico 
            do jogo de clicar enquanto a explicação é dada. É importante indicar que <b>o jogo começa quando a bandeira verde é clicada</b>, que <b>o fantasma permanece por 
            um segundo na tela depois de aparecer e que o fantasma fica escondido por um segundo depois que ele some.</b>
            Após a explicação, o professor pede que os alunos entrem em suas contas e distribui a folha <i>Aula 7 - Roteiro</i> para eles enquanto eles estão fazendo login. O professor 
            deve falar com eles que eles devem tentar conduzir as tarefas do roteiro por conta própria e que só podem pedir ajuda depois de terem ao menos tentado implementar os 
            passos ou solucionar problemas.  
            </p>
            <p>
            Fale com os alunos que alguns destes blocos de eventos serão utilizados por eles
            em seguida quando eles forem conduzir a atividade desta aula.
            </p>

            <p>
                <i>
                    <b>Recomendação:</b>corte a folha Aula 7 - Roteiro e separe as duas partes. Distribua apenas a 
                    PARTE I para os alunos inicialmente para evitar que eles tentem implementar os passos da PARTE 
                    2 antes de concluírem os passos da PARTE II.
                </i>
            </p>

            <h5>Implementação de modificaçõe</h5>
            <p>
            Na folha <i>Aula 7 - Roteiro</i>, foram propostas modificações extras para que os alunos 
            que conseguirem finalizar a primeira parte do roteiro tentem implementá-las. Para os 
            alunos que finalizarem a PARTE I, peça que eles tentem implementar algumas das 
            modificações propostas na PARTE II.
            </p>
            <p>
                <i>
                    <b>Obs.:</b>o projeto com as modificações implementadas pode ser acessado através do seguinte link: <a href="https://scratch.mit.edu/projects/475285085">Aula 7 - Jogo de Clicar</a>                
                </i>
            </p>

            <p>
            Caso um estúdio da turma tenha sido criado para os projetos da aula, peça 
            que os alunos compartilhem seus projetos e os adicionem ao estúdio depois que eles 
            terminarem a implementação do projeto
            </p>            
            </body>
        
        </div>
    );
}

export default RoteiroAula7;