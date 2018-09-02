/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [ 'caio', 8, true, null, 6];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
myFunction = function (arg){
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
myFunction2 = function(arr, x){
    return arr[x];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray2 = [ 'caiota', 2, false, NaN, null];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2 (myArray2, 0));
console.log(myFunction2 (myArray2, 1));
console.log(myFunction2 (myArray2, 2));
console.log(myFunction2 (myArray2, 3));
console.log(myFunction2 (myArray2, 4));


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(livro){
    var todosLivros = {
        'Hitman: A Condenação': { 
            quantidadePaginas: 240,
            autor: 'Raymond Benson',
            editora: 'LeYa'
        },
        'God of War':{ 
            quantidadePaginas: 384,
            autor: 'Matthew Stover',
            editora: 'Casa da Palavra'
        },
        'A Arte de Game Design': { 
            quantidadePaginas: 520,
            autor: 'Jesse Schell',
            editora: 'Campus'
        }
    }
    if (livro === undefined){
        return todosLivros;
    }
    {
        return todosLivros[livro];
    }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log (book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var livro = 'A Arte de Game Design'
console.log('O livro '+ livro +' tem ' + book(livro).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro '+ livro +' é '+ book(livro).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro '+ livro + ' foi publicado pela editora '+ book(livro).editora);
