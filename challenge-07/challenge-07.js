/*
Crie um array com 5 items (tipos variados).
*/
var newArr = ['caio' , 12 , 'nao tem funcao',  null, 12.3 ];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
var x= 0;
function addItem(item){
    newArr.push(item);
    console.log(newArr);
    }   

console.log(addItem('tavares'));


/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

console.log(addItem(['30','caique','1.3']));


/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(newArr[6][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('o primeiro array tem '+newArr.length + ' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('o segundo array tem '+newArr[6].length + ' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var numPar=10;
while (numPar <= 20){
    if (numPar%2 === 0){
        console.log(numPar);
    }
    numPar++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
var numImpar=10;
while (numImpar <= 20){
    if (numImpar%2 === 1){
        console.log(numImpar);
    }
    numImpar++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );

var num2;
for (num2= 100; num2 <= 120; num2++){
    if (num2%2 === 0){
        console.log(num2);
    }
    num2++
}

console.log( 'Números ímpares entre 111 e 125:' );

for (num2= 111; num2 <= 125; num2++){
    if (num2%2 === 1){
        console.log(num2);
    }
    num2++
}