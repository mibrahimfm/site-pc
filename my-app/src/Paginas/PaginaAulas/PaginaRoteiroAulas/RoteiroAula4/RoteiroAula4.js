import './RoteiroAula4.css';
import TabelaAula4 from './TabelaAula4';

function RoteiroAula4() {
    return(
        <div>
            <header>
                <h1 className="title">Aula 4 - Introdução ao Sequenciamento de Ações</h1>
            </header>
            <body className="body">
                <TabelaAula4></TabelaAula4>
                <a target="_blank" href="https://drive.google.com/drive/folders/1tehgg3CzMwyUPrVmJaK4LyrOpAg04iO_">
                    Drive com todos os materiais da aula 4
                </a>

                <p>Nesta aula, é dada continuidade a lição Labirinto: Ciclos iniciada na aula anterior para
                que os alunos tenham mais tempo para resolver os desafios mais complexos da lição de
                forma eficiente e explorem alguns dos desafios das outras lições do curso envolvendo os
                laços de repetição.</p>
              
            <h3>Descrição da Aula</h3>
            <p>
            Nesta aula, além da continuação da lição Labirinto: Ciclos, é apresentado aos alunos
            uma forma de identificar ações ou conjunto de ações que se repetem para auxiliá-los
            na resolução dos desafios da lição.
            </p>
            <h5>Revisão e identificação de ações ou grupo de ações repetidas</h5>
            <p>
            No início da aula de continuação, o professor faz uma curta revisão dos laços de re-
            petição e de sua utilização na lição do Code.org e em seguida apresenta a dica para
            identificar ações que se repetem e para evitar a utilização de mais blocos que o neces-
            sário.
            </p>
            <p>
            A dica consiste em: (i) resolver o desafio sem a utilização dos blocos de repetição,
            (ii) analisar o algoritmo para identificar o conjunto de ações que se repetem, (iii) utilizar
            o bloco de repetição para repetir o conjunto de ações que se repete. Um exemplo foi
            incluído na Aula 4 - Apresentação para que os alunos visualizem a realização deste
            processo.
            </p>
            <p>
            O professor também deve relembrar os alunos que os círculos preenchidos com
            verde mais escuro indicam que a lição foi completada com o menor número de blocos
            e que os círculos preenchidos com verde mais claro indicam que eles utilizaram mais
            blocos que o necessário no desafio (Figura A.1). 
            </p>

            {/* TODO inserir imagem */}
            <p>
            Durante o restante da aula, os alunos devem continuar resolvendo os desafios da lição
            Labirinto: Ciclos sempre buscando utilizar o número mínimo de blocos. Conforme
            indicado na aula anterior, o Curso 2 do Code.org possui outras lições que abordam a 
            utilização dos laços de repetição (i.e.: Artista: Ciclos e Abelha: Ciclos). Disponibilize
            estas lições para a turma para e deixe que os alunos que conseguiram finalizar todos os
            desafios da lição Labirinto: Ciclos as explorem e tentem resolver alguns dos desafios.
            </p>

            </body>
        
        </div>
    );
}

export default RoteiroAula4;