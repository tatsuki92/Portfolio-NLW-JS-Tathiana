const perguntas = [
  {
    pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
    respostas: [
      "let",
      "var",
      "const",
    ],
    correta: 1 // "var"
  },
  {
    pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
    respostas: [
      "push()",
      "append()",
      "addToEnd()",
    ],
    correta: 0 // "push()"
  },
  {
    pergunta: "Qual é a função do operador '===' em JavaScript?",
    respostas: [
      "Comparação estrita",
      "Atribuição",
      "Concatenação",
    ],
    correta: 0 // "Comparação estrita"
  },
  {
    pergunta: "Qual é a forma correta de escrever um comentário de uma única linha em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "<!-- Este é um comentário -->",
      "/* Este é um comentário */",
    ],
    correta: 0 // "// Este é um comentário"
  },
  {
    pergunta: "O que o método 'parseInt()' faz em JavaScript?",
    respostas: [
      "Analisa uma string e retorna um número inteiro",
      "Converte um número em uma string",
      "Remove espaços em branco de uma string",
    ],
    correta: 0 // "Analisa uma string e retorna um número inteiro"
  },
  {
    pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
    respostas: [
      "console.log()",
      "print()",
      "display()",
    ],
    correta: 0 // "console.log()"
  },
  {
    pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
    respostas: [
      "for (i = 0; i < 5; i++)",
      "loop (i = 0; i < 5; i++)",
      "for (i = 0; i < 5)",
    ],
    correta: 0 // "for (i = 0; i < 5; i++)"
  },
  {
    pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
    respostas: [
      "pop()",
      "removeLast()",
      "delete()",
    ],
    correta: 0 // "pop()"
  },
  {
    pergunta: "Qual símbolo é usado para indicar igualdade em JavaScript?",
    respostas: [
      "==",
      "===",
      "!=",
    ],
    correta: 1 // "==="
  },
  {
    pergunta: "Qual é o resultado da expressão 'typeof null' em JavaScript?",
    respostas: [
      "object",
      "null",
      "undefined",
    ],
    correta: 0 // "object"
  }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição
for(const item of perguntas) {
   const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
//coloca as respostas na tela
for(let resposta of item.respostas){
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name','pergunta-' * perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
const estaCorreta = event.target.value == item.correta

corretas.delete(item)
if (estaCorreta){
  corretas.add(item)
}
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas  
    }
  
  quizItem.querySelector('dl').appendChild(dt)
}

//remove a resposta a
quizItem.querySelector('dl dt').remove()
  
  //coloca as perguntas na tela
  quiz.appendChild(quizItem)
}