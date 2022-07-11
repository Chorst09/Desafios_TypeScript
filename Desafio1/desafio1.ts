// Como podemos rodar isso em um arquivo .ts sem causar erros? 
/*R: Em primeiro lugar, todo código JavaScript é um código TypeScript válido, 
então não há necessidade de transpilação inversa do ponto de vista do compilador.*/

/*let employee = {};
employee.code = 10;
employee.name = "John";*/

const funcionario = {
    codigo: 10,
    nome: 'João'
};

const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'joao'
}

interface Funcionario {  
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'João'
}