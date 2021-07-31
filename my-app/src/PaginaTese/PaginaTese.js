import './PaginaTese.css';


function PaginaTese(){
    return(
        <div>
            <header>
                <div className="title">Sobre o projeto</div>
            </header>
            <body className="body">
                <h3>O projeto</h3>
                <p>O material didático disponível no site faz parte do projeto <i>[Nome do projeto]</i>  da UFMG,
                    que tem como objetivo auxiliar na evolução do ensino do pensamento computacional no ensino básico e fundamental no Brasil
                </p>
                <p>Esse material foi desenvolvido por Oto Braz Assunção, durante seu mestrado. A motivação para esse trabalho foi 
                    criar uma sequência didática que permitisse a professores(mesmo aqueles não muito familiarizados com a área)
                    introduzirem a área de computação aos alunos do Ensino Fundamental II
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
            </body>
        </div>
    );
}

export default PaginaTese;