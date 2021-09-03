import './RoteiroAula11.css';
import TabelaAula11 from './TabelaAula11';

function RoteiroAula11() {
    return(
        <div>
            <header>
                <h1 className="title">Aula 11 - Perguntas e Respostas I</h1>
            </header>
            <body className="body">
                <TabelaAula11></TabelaAula11>
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/drive/folders/1fhFHzjoo3euIzRUsAG1Ouzy_Kh7nlL1k">
                    Drive com todos os materiais da aula 11
                </a>

                <p>Nesta aula os alunos aprendem a utilizar os sensores pergunte e resposta para criar um 
                    jogo de perguntas e respostas simples com perguntas e respostas específicas</p>
              
            <h3>Descrição da Aula</h3>
            <p>
            Estruturamos esta aula em 2 partes: <i>Revisão sobre variáveis, Introdução aos Sensores e Criando um jogo de perguntas e respostas simples.</i>
            </p>
            <h5>Revisão sobre variáveis</h5>
            <p>
            O professor conduz nos minutos iniciais da aula uma pequena revisão das variáveis e dos 
            dois blocos de manipulação de variáveis utilizadas na aula anterior para implementar 
            o sistema de pontuação para os três projetos.
            </p>
            <h5>Introdução aos Sensores</h5>
            <p>
            O professor explica brevemente o que são os sensores no Scratch, relembrando os alunos 
            dos sensores que eles utilizaram nas aulas anteriores: <i>tocando em e tecla pressionada.</i> 
            <br></br><br></br>Em seguida, o professor apresenta dois novos sensores que serão utilizados na aula: 
            <i>pergunte e resposta.</i> O sensor pergunte faz o personagem dizer algo e logo em seguida 
            exibe uma caixa de texto para que a resposta seja digitada. A resposta digitada pelo 
            usuário é então armazenada no sensor resposta, sendo que este sensor é basicamente 
            uma variável especial no Scratch que receberá o que foi digitado pelo usuário na caixa de texto da pergunta.
            </p>
            <h5>Criando um jogo de perguntas e respostas</h5>
            <p>
            Por fim, o professor apresenta à turma a animação de um jogo de perguntas e respostas contendo duas perguntas sobre a Computação. 
            O professor deve chamar atenção para a caixa de texto que aparece no jogo, onde o usuário digita as respostas, e que a resposta 
            digitada deve ser exatamente a mesma que a resposta correta, ou seja, a inclusão de acentos é necessária caso a resposta correta contenha acentos gráficos.
            <br></br><br></br>O último slide da <i>Aula 11 - Apresentação</i> contém um link com perguntas da 
            disciplina de ciências, juntamente com suas respostas, para que os alunos utilizem caso eles queiram. 
            No entanto, o professor pode encorajá-los a incluir perguntas relacionadas a temas de interesse, sendo elas relacionadas às disciplinas da escola ou não.
            <br></br><br></br>Finalmente, as folhas <i>Aula 11 - Roteiro</i> são distribuídas aos alunos e eles acessam suas contas para dar início a atividade prática. 
            Da mesma forma que nos roteiros das aulas anteriores, propomos algumas modificações a serem implementadas para os 
            alunos que conseguirem finalizar o desenvolvimento do jogo antes da aula terminar. 
            As modificações propostas não são dependentes, então o professor pode deixar que os alunos escolham quais delas eles querem tentar fazer. 
            As seguintes modificações foram propostas:
            <br></br><br></br>
            <dl>
                <dd>Fazer o personagem introduzir o jogo.</dd>
                <dd>Perguntar ao jogador se ele está pronto ou não para iniciar o jogo.</dd>
                <dd>Adicionar cenários diferentes para cada pergunta</dd>
                <dd>Adicionar um sistema de pontuação</dd>
                <dd>Fazer o jogador perder se ele errar alguma pergunta</dd>
            </dl>
            </p>
            <p>
                <i>
                <b>Recomendação:</b> separe as modificações das tarefas básicas da aula e distribua as modificações 
                apenas para os alunos que terminaram as duas primeiras partes do roteiro.
                </i>
                <br></br><br></br>
                <i>
                    <b>Obs.:</b>o projeto de exemplo com as modificações implementadas pode ser acessado através do 
                    seguinte link: <a href="https://scratch.mit.edu/projects/476325237">Aula 11 - Perguntas e respostas I</a>                
                </i>
            </p>
            </body>
        
        </div>
    );
}

export default RoteiroAula11;