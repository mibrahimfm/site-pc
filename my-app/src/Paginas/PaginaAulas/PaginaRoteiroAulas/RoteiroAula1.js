import './RoteiroAula1.css';
import pdf1Aula1 from '../../../Arquivos/aula1/Exercícios - Iniciante.pdf'
import pdf2Aula1 from '../../../Arquivos/aula1/Aula 1 - Apresentação.pptx'
import pdf3Aula1 from '../../../Arquivos/aula1/Desafios.docx'

function RoteiroAula1() {
    return(
        <div>
            <header>
                <h1 className="title">Aula 1 - Exercitando o Raciocínio Lógico</h1>
            </header>
            <body className="body">
                <p>Na primeira aula do GTD os alunos praticarão o raciocínio lógico através de um jogo de
            lógica desplugado chamado Estacionamento Algorítmico, que é um jogo simples de ser
            explicado e entendido. No jogo, os alunos devem movimentar os veículos para permitir
            que o carro vermelho consiga sair do tabuleiro.</p>
              
            <h3>Descrição da Aula</h3>
            <p>
            Esta aula é estruturada em quatro momentos principais: apresentação do curso, apre-
            sentação da atividade, resolução dos desafios e registro das soluções e teste de soluções.
            </p>
            <h5>Apresentação do Curso</h5>
            <p>
            No momento inicial da aula o(s) professor(es) e alunos devem se apresentar e conversar
            brevemente sobre as motivações dos alunos, o que eles esperam aprender no curso, a
            área da Computação, o Pensamento Computacional e a importância que a Computação
            e as habilidades do Pensamento Computacional têm no mundo de hoje. Em seguida,
            o professor deve apresentar uma visão geral do curso e das atividades que os alunos
            realizarão.
            </p>
            <p>
            Os alunos podem ter expectativas que utilizarão os computadores em todas as
            aulas do GTD. Assim, é recomendado lembrá-los que embora o curso esteja focado na
            Computação e no Pensamento Computacional, atividades desplugadas serão conduzi-
            das nas aulas iniciais e que eles também podem aprender sobre a Computação através
            delas.
            </p>
            <h5>Apresentação do Jogo</h5>
            <p>Após a apresentação inicial, o professor deve introduzir a atividade que os alunos
            estarão fazendo na primeira aula: o Estacionamento Algorítmico. A utilização de
            um projetor de vídeo e uma apresentação de slides com animações é recomendável
            para apresentar o jogo aos alunos. A Aula 1 - Apresentação pode ser utilizada e, caso
            necessário, adaptada. Ela contém slides apresentando o jogo, suas regras e um exemplo
            interativo de resolução e registro da solução.</p>
            <h5>Resolução e Registro de Soluções</h5>
            <p>No terceiro momento da aula os alunos devem resolver pelo menos dois dos cinco
            desafios contidos na Folha de Desafios. Os desafios podem ser conduzidos tanto indi-
            vidualmente quanto em dupla. A resolução individual é recomendada para que todos
            os alunos pratiquem igualmente a resolução dos desafios. É importante frisar que os
            alunos anotem os passos na folha de rascunho a cada movimento ou conjunto pequeno
            de movimentos testados para que eles não se esqueçam no final os passos que eles se-
            guiram para resolver o desafio. Além disso, o professor deve pedi-los que os a resolução
            seja registrada assim que eles finalizarem o desafio antes de passarem para o próximo.
            Talvez não seja possível registrar a solução de todos os cinco desafios devido ao tempo 
            disponível, porém é importante que pelo menos uma solução seja registrada por cada
            aluno. O registro deve ser feito conforme indicado na apresentação do jogo, infor-
            mando os veículos na ordem em que eles devem ser movimentados para que o desafio
            seja resolvido.</p>
            <h5>Teste de Soluções</h5>
            <p>Nos 20 minutos finais da aula, o professor deve pedir para que os alunos troquem suas
            soluções com um colega de turma e que eles verifiquem se anotaram no topo das folhas
            de resolução o número do desafio. Em seguida, o professor deve dizer aos alunos que
            eles devem testar as soluções que eles receberam seguindo o passo a passo registrado
            pelo seu colega de classe. Caso haja erros, peça que os alunos indiquem na folha de
            resolução qual dos passos está errado.</p>
            
            <h5>Download de Materiais</h5>
            <ul>  
            <a id="simple-modal-description" href={pdf2Aula1} download>
            Apresentação 
            </a>
            </ul>
            <ul>  
            <a id="simple-modal-description" href={pdf1Aula1} download>
            Desafio 
            </a>
            </ul>
            <ul>  
            <a id="simple-modal-description" href={pdf3Aula1} download>
            Exercícios 
            </a>
            </ul>
            </body>
        
        </div>
    );
}

export default RoteiroAula1;