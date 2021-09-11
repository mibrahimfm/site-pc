import * as IconBS from "react-bootstrap-icons";
import './RoteiroAula10.css';
import TabelaAula10 from './TabelaAula10';
import figura2A from '../../../../images/roteiro_aula_10.PNG';

function RoteiroAula10() {
    return(
        <div>
            <header>
                <h1 className="title">Aula 10 - Introdução às Variáveis</h1>
            </header>
            <body className="body">
                <TabelaAula10></TabelaAula10>
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/drive/folders/14YAB41hJb9I7DHXBWnQs8Ra2co34_t3N">
                    Drive com todos os materiais da aula 10
                </a>

                <p>Nesta aula os alunos aprendem sobre variáveis e praticam a sua utilização ao desen-
volver um sistema de pontuação no Scratch para o Jogo de Clicar, Jogo da Coleta e o
Pong.</p>
              
            <h3>Descrição da Aula</h3>
            <p>
            Estruturamos esta aula em 2 partes: Introdução às variáveis, Implementando sistemas
de pontuação.
            </p>
            <h5>Introdução às variáveis</h5>
            <p>
            Antes do professor apresentar o conceito de variáveis e suas utilizações, é interessante
            que uma rápida revisão dos principais scripts que os alunos tiveram que desenvolver
            na aula anterior seja conduzida. Na Aula 10 - Apresentação, foram incluídos os scripts
            responsáveis pela configuração do estado inicial do jogo quando a bandeira verde é
            clicada, pela movimentação da bola e por fazer com que a bola quique na raquete (i.e.:
            paddle).
            <br></br>
            <br></br>
            Em seguida, o professor apresenta a definição formal de variáveis, indicando que
            elas são responsáveis pelo armazenamento de informações. O professor diz que as
            variáveis serão utilizadas pelos alunos na aula para que eles criem um sistema de
            pontuação para ambos o jogo de clicar, jogo da coleta e o pong desenvolvidos nas aulas
            anteriores. O restante dos slides na Aula 10 - Apresentação contém o passo a passo
            <br></br>
            <br></br>
            Por fim, o professor introduz os dois blocos de comando para fazer a manipulação
            de variáveis que os alunos utilizarão na atividade prática .
            <br></br>
            <br></br>

            <img src={figura2A}></img>

            <br></br>
            <br></br>
            O professor explica o funcionamento dos comandos adicione [valor] a [variável] e
            mude [variável] para [valor], indicando que os alunos podem digitar valores nos campos
            em branco e que eles podem clicar em minha variável para selecionar qual variável será
            manipulada pelo comando.
            </p>

            <h5>Implementando sistemas de pontuação</h5>
            <p>
            Finalmente, o professor apresenta aos alunos o que eles farão na aula utilizando o
            último slide da Aula 10 - Apresentação para ilustrar o funcionamento das variáveis e
            quando elas são incrementadas durante os jogos.
            <br></br>
            <br></br>
            Na atividade prática, os alunos terão que incrementar os valores das variáveis
            quando o personagem for clicado no Jogo de Clicar, quando o personagem coletar o
            objeto no Jogo da Coleta e quando a bola tocar na raquete no Pong. Além disso, eles
            terão que mudar o valor das variáveis para 0 quando o jogo for iniciado, caso contrário,
            o jogo é iniciado com o valor da variável armazenado através de execuções anteriores
            do jogo.
            <br></br>
            <br></br>
            O professor, então, distribui as folhas Aula 10 - Roteiro aos alunos para eles
            darem início a atividade prática enquanto eles estão acessando suas contas.
            Caso alguns dos alunos não tenham conseguido terminar a implementação do
            Pong na aula anterior, os ajude rapidamente após o início da atividade prática.
            <br></br>
            <br></br>
                <i>
                    <b>Recomendação:</b>a princípio, distribua apenas as partes 1, 2 E 3 da primeira folha do roteiro
                    aos alunos. Quando os alunos terminarem estas duas partes, distribua a parte MODIFICAÇÕES da
                    primeira folha. E finalmente, a segunda folha do roteiro com outras sugestões para que eles tentem
                    implementar algumas delas.               
                </i>
            <br></br>
            <br></br>
                <i>
                    <b>Obs.:Acesse os projetos através seguintes links:</b>
                </i>
                <ul>
                    <li><a href="https://scratch.mit.edu/projects/475727950">Aula 10 - Jogo de Clicar com Pontuação </a></li>
                    <li><a href="https://scratch.mit.edu/projects/476016148">Aula 10 - Jogo da Coleta com Pontuação </a></li>
                    <li><a href="https://scratch.mit.edu/projects/475740616"> Aula 10 - Pong com Pontuação</a></li>
                </ul>
            </p>
            </body>
            <footer class='footer'>
                <div class='row'>
                    <div class="col">
                        <a href='/aula-9'><IconBS.ChevronDoubleLeft/>Aula 9</a>
                    </div>
                    <div class="col text-right">
                        <a href='/aula-11'>Aula 11<IconBS.ChevronDoubleRight/></a>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default RoteiroAula10;