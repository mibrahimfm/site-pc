import './PaginaTese.css';
import TabelaMetaforas from './../TabelaMetaforas/TabelaMetaforas';
import DissertacaoCompleta from '../Dissertacao/Dissertacao.pdf';

function PaginaTese(){
    return(
        <div>
            <header>
                <div className="title">Sobre o projeto</div>
            </header>
            <body className="body">
                <h3>O projeto</h3>
                <p>O material didático disponível no site faz parte de um projeto da UFMG
                    que tem como objetivo auxiliar na evolução do ensino do pensamento computacional no ensino básico e fundamental no Brasil.
                </p>
                <p>Esse material foi desenvolvido por Oto Braz Assunção, durante seu mestrado. Essa sequência foi inicialmente desenvolvida 
                    à luz das Metáforas de Perspectivas Computacionais
                    e testada em salas de aula em uma pesquisa-ação em conjunto com o Centro Pedagógico da UFMG, 
                    com a motivaçãode foi criar uma sequência didática que permitisse a professores(mesmo aqueles não muito familiarizados com a área)
                    introduzirem a área de computação aos alunos do Ensino Fundamental II.
                </p>
                <h3>Metáforas de Perspectivas Computacionais</h3>
                <p>
                    A principal base teórica para esse trabalho são as Metáforas de Perspectivas Computacionais(MPCs).
                    As MPCs foram criadas por Salgado em 2011 com fundamentação na Engenharia Semiótica, e definidas como como
                    "uma ferramenta conceitual criada por cujo
                    propósito é informar e guiar o projeto e avaliação da interação sempre que comunicações
                    explícitas sobre diversidade cultural fazem parte da intenção de design."
                </p>
                <p>
                    Logo, as MPCs consideram que usuários do sistema são viajantes, e a viagem é a interação que eles têm com o sistema.
                    Desse ponto, são definidas cinco metáforas: o Viajante Doméstico, o Observador à Distância,
                    o Estrangeiro em Visita Guiada, o Estrangeiro com Tradutor e o Estrangeiro sem Tradutor.
                </p>
                <p>
                    A partir disso, o designer do sistema pode usar essas metáforas como base para definir
                    o nível de imersão cultural que ele espera do usuário em sua "viagem". 
                </p>
                <p>
                    Ao unir a ideia de imersão cultural ao pensamento computacional, é possível entender as metáforas da seguinte maneria:
                    <br></br><br></br>
                    <dl>
                    <dt>Viajante doméstico</dt>
                    <dd className="list-item">
                        O aluno não é diretamente exposto à computação nem conduz atividades que exigem algum conhecimento dela.
                        <br></br>
                        Um exemplo aplicável dessa metáfora são jogos de lógica.
                    </dd>
                    <dt>Observador à Distância</dt>
                    <dd className="list-item">
                        O aluno é apresentado ao pensamento computacional do ponto de vista informacional, mas ainda não prático.
                        <br></br>
                        Um exemplo é explicar ao aluno que, em um jogo de lógica, os passos que você usa para solucionar o problema é um algoritmo.
                    </dd>
                    <dt>Estrangeiro em Visita Guiada</dt>
                    <dd className="list-item">
                        O aluno já é introduzido a atividades práticas dentro da computação, mas apenas de forma limitada. Ou seja, ele não realiza atividades da mesma forma que alguém da área de computação.
                        <br></br>
                        Um exmeplo seria apresentar ao aluno com um conjunto de comandos limitado, e o aluno deve usar esses comandos para montar um algoritmo que faça um personagem se mover na tela.
                    </dd>
                    <dt>Estrangeiro com Tradutor</dt>
                    <dd className="list-item">
                        O aluno já experiencia computação da mesma forma que alguém da área, mas ainda com um intermediário que facilita sua interação.
                        <br></br>
                        Um exemplo é já utilizar ferramentas que apresentam linguagens de programação de forma visual, como o Scratch.
                    </dd>
                    <dt>Estrangeiro sem Tradutor</dt>
                    <dd className="list-item">
                        O aluno é exposto às mesmas atividades e ferramentas que um profissional de computação.
                        <br></br>
                        Por exemplo, o aluno já passa a utilizar as mesmas IDEs que alguém da área.
                    </dd>
                </dl>

                </p>

                <h3>Metodologia</h3>
                <h5>Geração da Sequência Didática</h5> 
                <p>
                    Como já mencionado, a sequência didática foi criada com base nas MPCs. Isso foi feito com o objetivo de introduzir gradativamente a computação a alunos do Ensino Fundamental II
                    e fomentar o Pensamento Computacional. Essa proposta foi, então, estruturada em 5 etapas, seguindo as 5 metáforas, que permitem que o aluno experiencie a cultura estrangeira de forma gradualmente mais intensiva,
                    como representado na tabela abaixo.
                </p>
                <TabelaMetaforas></TabelaMetaforas>
                <p>
                    Para definir quais seriam as atividades realizadas em cada etapa da proposta, foi realizada uma classificação de recursos didáticos utilizados no Brasil para o ensino
                    da computação e do PC a alunos do Ensino Fundamental, e essa classificação foi tomada como base para seleção dos recursos didáticos utilizados em cada etapa da sequência didática. 
                </p>
                <h5>Aplicação</h5>
                <p>
                    Para validar a sequência didática gerada no projeto, foi realizada uma Pesquisa-Ação, constituída de três estudos realizados com alunos do 6º ano do Ensino Fundamental II.
                    Os dois primeiros estudos foram para o ensino de Pensamento Computacional I, realizados nos semestres 2019/1 e 2019/2, com grupos diferentes de alunos, enquanto o terceiro estudo,
                    para o ensino de Pensamento Computacional II, foi realizado em 2019/2, com alunos do primeiro grupo que decidiram seguir com o estudo de Pensamento Computacional.
                </p>
                <dl>
                    <dt>Estudo I</dt>
                    <dd className="list-item">
                        <p>O estudo I foi realizado em 2019/1 com 16 alunos, seguindo uma sequência didática composta por 14 aulas. Após a condução das aulas, foram realizadas pesquisas e grupos focais
                            para coletar dados com relação à experiência dos alunos. Majoritariamente, a avaliação foi positiva e os alunos alegaram gostar dos recursos utilizados nas aulas e compreender o material ensinado.
                            O principal ponto negativo tirado foi que alguns recursos (especialmente de programação em blocos), estavam presentes em muitas aulas e as atividades ficaram repetitivas.
                        </p>
                    </dd>
                    <dt>Estudo II</dt>
                    <dd className="list-item">
                        <p>
                            O estudo II foi realizado em 2019/2 com 14 alunos, planejado a partir de uma versão revisada da sequência didática utilizada no estudo I, composta por 11 aulas, devido a alterações no calendário e imprevistos.
                            Da mesma forma que o estudo I, foram realizadas pesquisas e grupos focais para entender a percepção dos alunos.
                             Os resultados foram bem parecidos com os do estudo I, com a programação em papel e programação em blocos tendo avaliações mistas, mas ainda uma reação em maior parte positiva dos alunos.
                        </p>
                    </dd>
                    <dt>Estudo III</dt>
                    <dd className="list-item">
                       <p>
                            O estudo III foi realizado em 2019/2 com 8 alunos, todos que fizeram parte do primeiro grupo e decidiram seguir com o aprendizado do Pensamento Comutacional,
                            composto também por 14 aulas. Segundo entrevistas realizadas com alunos que participaram do estudo I e não do estudo III, o principal motivo para não seguirem com o estudo
                            foi pela oportunidade de estudar outras áreas, e 6 desses 8 alunos disseram que ainda tem interesse em aprender mais sobre a área de computação.
                            A coleta de dados do estudo III indica que a recepção dos alunos ainda foi bem positiva, mas com um conteúdo um pouco mais complicado, o que é de se esperar.
                            Os pontos negativos encontrados foram a menor diversidade de ferramentas e recursos utilizados ao longo do programa, o que tornou as atividades mais monótonas, 
                            e a proposta de uma atividade desenvolvida individualmente por cada aluno na ferramenta Scratch, que era a única que não apresentava um roteiro que poderia ser seguido pelos alunos.
                            Isso tornou a atividade muito complexa considerando o que havia sido ensinado e gerou menos interesse.                            
                       </p>
                    </dd>
                </dl>

                <h3>Consolidação da sequência</h3>
                <p>
                    Após a conclusão dos três estudos, foi criado o <i>Curso de Introdução à Computação e ao Pensamento Computacional</i>, que é constituído majoritariamente de aulas
                    dos dois primeiros estudos, mais alguns conteúdos do estudo III, com algumas partes revisadas após a avaliação prática da sequência didática inicial.
                    Essa curso é a sequência didática cujo material está disponível <a href='/aulas'>aqui na plataforma</a>, com detalhes sobre a classificação de cada aula dentro das MPCs
                    e sobre os recursos didáticos que são utilizados em cada aula.
                </p> 

                <h3>A dissertação</h3>
                <p>Para ainda mais detalhes sobre o projeto, a criação da sequência e os estudos realizados, aqui está a <a href={DissertacaoCompleta} download='Dissertacao_Completa.pdf'>dissertação completa de Oto Braz Assunção.</a></p>
            </body>
        </div>
    );
}

export default PaginaTese;