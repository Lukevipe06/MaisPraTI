//Lista 2
//exercício 1

function ehBissexto(a) {
    return (a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0);
}

function ehDataValida(d, m, a) {
    if (m < 1 || m > 12) return false;
    if (d < 1) return false;

    const dsPorMes = [31, (ehBissexto(a) ? 29 : 28), 31, 30, 31, 30,
                        31, 31, 30, 31, 30, 31];

    if (d > dsPorMes[m - 1]) return false;

    return true;
}

//exercício 2
    const numero = Math.floor(Math.random() * 100) + 1;

    let tentativa;
    let tentativas = 0;

while (true) {
    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
    tentativas++;

    if (tentativa < numero) {
        alert("Mais alto!");
    } else if (tentativa > numero) {
        alert("Mais baixo!");
    } else {
        alert(`Parabéns! Você acertou em ${tentativas} tentativa(s).`);
        break;
    }
}

//exercício 3
const texto = "olá olá mundo mundo";
const palavras = texto.split(" ");
const palavrasSemRepeticao = [];

for (let i = 0; i < palavras.length; i++) {
    let palavraAtual = palavras[i];
    let jaExiste = false;
    for (let j = 0; j < palavrasSemRepeticao.length; j++) {
        if (palavrasSemRepeticao[j] === palavraAtual) {
            jaExiste = true;
            break;
        }
    }
    if (!jaExiste) {
        palavrasSemRepeticao.push(palavraAtual);
    }
}

console.log(palavrasSemRepeticao);

//exercício 4
function fatorial(n) {
    if (n < 0) {
        throw new Error("Fatorial não está definido para números negativos.");
    } else if (n === 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

//exercício 5
function mostrarMensagem() {
    console.log("Função executada!");
}

const debounced = debounce(mostrarMensagem, 1000);

function debounce(fn, delay) {
    let timeoutId;

    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

//exercício 6
function memoize(fn) {
    const cache = {};

    return function (...args) {
        const chave = JSON.stringify(args);

        if (cache.hasOwnProperty(chave)) {
            return cache[chave];
        }
        const resultado = fn.apply(this, args);
        cache[chave] = resultado;
        return resultado;
    };
}
function somar(a, b) {
    console.log(`Calculando: ${a} + ${b}`);
    return a + b;
}

const somarMemo = memoize(somar);

console.log(somarMemo(2, 3)); // Calcula e retorna 5
console.log(somarMemo(2, 3)); // Retorna do cache (sem log)
console.log(somarMemo(4, 1)); // Calcula e retorna 5

//exercício 7
const produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 100 },
    { nome: "Monitor", preco: 600 },
    { nome: "Cabo HDMI", preco: 30 }
];
function nomesOrdenadosPorPreco(produtos) {
    return produtos
        .slice()
        .sort((a, b) => a.preco - b.preco)
        .map(produto => produto.nome);
}
const nomesOrdenados = nomesOrdenadosPorPreco(produtos);
console.log(nomesOrdenados); 
// Saída: ["Cabo HDMI", "Mouse", "Teclado", "Monitor"]

//exercício 8
const vendas = [
    { cliente: "Ana", total: 100 },
    { cliente: "Bruno", total: 200 },
    { cliente: "Ana", total: 50 },
    { cliente: "Carlos", total: 300 },
    { cliente: "Bruno", total: 150 }
];

function somarVendasPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {
        const { cliente, total } = venda;

        if (acumulador[cliente]) {
            acumulador[cliente] += total;
        } else {
            acumulador[cliente] = total;
        }

        return acumulador;
    }, {});
}
const resultado = somarVendasPorCliente(vendas);
console.log(resultado);
// Saída: { Ana: 150, Bruno: 350, Carlos: 300 }

//exercício 9
function paresParaObjeto(pares) {
    const obj = {};
    for (let i = 0; i < pares.length; i++) {
        const [chave, valor] = pares[i];
        obj[chave] = valor;
    }
    return obj;
}
function objetoParaPares(obj) {
    const pares = [];
    for (let chave in obj) {
        if (obj.hasOwnProperty(chave)) {
            pares.push([chave, obj[chave]]);
        }
    }
    return pares;
}
const pares = [["nome", "Ana"], ["idade", 30], ["cidade", "São Paulo"]];
const obj = paresParaObjeto(pares);
console.log(obj);
// Saída: { nome: 'Ana', idade: 30, cidade: 'São Paulo' }

const novoPares = objetoParaPares(obj);
console.log(novoPares);
// Saída: [ ['nome', 'Ana'], ['idade', 30], ['cidade', 'São Paulo'] ]