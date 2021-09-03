import './RoteiroAula8.css';
import TabelaAula8 from './TabelaAula8';

function RoteiroAula8() {
    return(
        <div>
            <header>
                <h1 className="title">Aula 8 - Introdução às Condicionais</h1>
            </header>
            <body className="body">
                <TabelaAula8></TabelaAula8>
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/drive/folders/1kqqL-PkA3GsB85Nrmnk1bwlFsHitiLsz">
                    Drive com todos os materiais da aula 8
                </a>

                <p>Nesta aula os alunos aprendem sobre as estruturas condicionais e as colocam em prática através do desenvolvimento do Jogo da Coleta.</p>
              
            <h3>Descrição da Aula</h3>
            <p>
            Aula 8 foi estruturada em 3 partes: Introdução às estruturas condicionais e Implementação do Jogo da Coleta.
            </p>
            <h5>Introdução às estruturas condicionais</h5>
            <p>
            Na parte introdutória da Aula 8, o professor apresenta o que são condições e as estruturas condicionais aos alunos e os questiona sobre o que é uma condição e se eles 
            conseguem pensar em algum exemplo de condição. <br></br>Em seguida, o professor conduz a Dinâmica da Palma. A dinâmica é uma atividade simples e tem como objetivo fazer com que os alunos pratiquem a verificação 
            de uma condição e que reajam de acordo com o resultado da verificação. A dinâmica foi dividida em duas partes: a primeira faz o uso de uma condicional única (e.g.: se o número na tela for maior que 5, bata uma palma),
             já a segunda az o uso de duas condicionais (e.g.: se o número na tela for maior que 5, bata uma palma. Senão, bata duas palmas). A apresentação Aula 8 - Apresentação possui cinco números para cada 
             parte da dinâmica. O número 5 está presente em ambas as partes com o objetivo de confundir os alunos, pois ele não é nem menor e nem maior que 5, sendo este um caso 
             que não cai em nenhuma das condições. Desta forma, os alunos não devem nenhuma palma em ambas as partes da dinâmica. 
             <br></br>Para finalizar a parte introdutória, o professor dá alguns exemplos de usos das condicionais referenciando as ferramentas que eles utilizaram no curso até o momento tais como:
                <dl>
                    <dt>Login no Site do Scratch</dt>
                    <dd>Verificação se o usuário e a senha estão corretos. Se estiver correto, a plataforma deixa o usuário acessar a conta. Senão, uma mensagem de erro é exibida informando o usuário que as credenciais informadas estão erradas.</dd>
                    <dt>Kahoot!</dt>
                    <dd>Verificar SE as respostas dadas estão corretas ou não.</dd>
                    <dt>Code.org</dt>
                    <dd>Verificar SE o algoritmo está correto ou SE o número de blocos utilizados é o mínimo.</dd>
                </dl>
            </p>
            <p>E depois, apresenta brevemente os blocos que serão utilizados pelos alunos para implementação do Jogo Pong durante o restante da aula.</p> 

            <h5>Implementação do Jogo da Coleta</h5>
            <p>
            Agora, o professor apresenta o que os alunos estarão utilizando e desenvolvendo na parte prática da aula. Os novos blocos a serem utilizados nesta aula são os seguintes:  
            
            <dl>
                <dt>Bloco SE</dt>
                <dd>Condicional simples que verifica se uma condição é verdadeira.</dd>
                <dt>Sensor TOCANDO EM</dt>
                <dd>Indica se o objeto está tocando em algo</dd>
                <dt>Sensor TECLA PRESSIONADA:</dt>
                <dd>Indica se determinada tecla está sendo pressionada.</dd>
            </dl>

            </p>
            <p>
            Similarmente a aula anterior, antes de pedir para os alunos acessarem suas contas 
            do Scratch e distribuir as folhas <i>Aula 8 - Roteiro</i>, o professor explica aos alunos o 
            projeto que eles desenvolverão na aula com o auxílio de uma animação demonstrando 
            o projeto final em funcionamento. 
            <br></br>O professor deve relacionar o que está acontecendo 
            nas animações com os blocos apresentados previamente para que os alunos tenham 
            uma ideia inicial do que eles devem fazer. 
            <br></br>O professor deve encorajar os alunos a tentar ao máximo implementar os passos 
            e resolver os problemas que eles enfrentarem sozinhos. Nas folhas <i>Aula 8 - Roteiro</i> foram incluídas algumas modificações que podem ser 
            implementadas pelos alunos que terminarem de implementar as funcionalidades básicas do projeto.
            </p>
            <p>
                <i>
                    <b>Obs.:</b>o projeto implementado pode ser acessado através do seguinte link: <a href="https://scratch.mit.edu/projects/475974434">Aula 7 - Jogo de Clicar</a>                
                </i>
            </p>
            </body>
        
        </div>
    );
}

export default RoteiroAula8;