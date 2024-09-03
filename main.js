

function Aluno(nome, dataDeNascimento, cidadeOndeMora, curso) {
    this.nome = nome;
    this.dataDeNascimento = dataDeNascimento;
    this.cidadeOndeMora = cidadeOndeMora;
    this.curso = curso;
    this.cursar = function () {
        console.log("cursar");
    }
}

const alunoJose = new Aluno("Jose Carlos", 2000, "Brasília-DF", "Front-end");
const alunaCarla = new Aluno("Carla Tavares", 1998, "São Paulo-SP", "UX/UI");

console.log(alunoJose);
console.log(alunaCarla);

function AlunoGraduacao(nome, dataDeNascimento, cidadeOndeMora, curso, semestre) {
    Aluno.call(this, nome, dataDeNascimento, cidadeOndeMora, curso);
    this.semestre = semestre;

    this.fazerCurso = function () {
        console.log(`${this.nome} está fazendo curso em ${this.curso}`);
    }
}


function AlunoPosGraduacao(nome, dataDeNascimento, cidadeOndeMora, curso, areaDeEspecializacao) {
    Aluno.call(this, nome, dataDeNascimento, cidadeOndeMora, curso);
    this.areaDeEspecializacao = areaDeEspecializacao;

    this.fazerDissertacao = function () {
        console.log(`${this.nome} está fazendo dissertação em ${this.areaDeEspecializacao}`);
    }
}


const alunoGrad = new AlunoGraduacao("Maria Silva", 2001, "Rio de Janeiro-RJ", "Ciência da Computação", 5);
const alunoPos = new AlunoPosGraduacao("Pedro Santos", 1995, "Belo Horizonte-MG", "Engenharia de Software", "Inteligência Artificial");

alunoGrad.cursar();
alunoGrad.fazerCurso();

alunoPos.cursar();
alunoPos.fazerDissertacao();