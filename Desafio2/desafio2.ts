// Como podemos melhorar o esse código usando TS? 

/*let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}*/

enum Trabalho {
    Secretaria,
    Motorista
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'ana',
    idade: 31,
    profissao: Trabalho.Secretaria
};

let pessoa2: Humano = {
    nome: 'pedro',
    idade: 22,
    profissao: Trabalho.Motorista
};

let pessoa3: Humano = {
    nome: 'mariana',
    idade: 32,
    profissao: Trabalho.Secretaria
};

let pessoa4: Humano = {
    nome: "marcos",
    idade: 29,
    profissao: Trabalho.Motorista
}