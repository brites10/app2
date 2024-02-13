const perguntas = [
    {
        pergunta: "Qual é o lema da Casa Stark?",
        respostas: [
            "A) O inverno está chegando",
            "B) Nós não semeamos",
            "C) O fogo e o sangue" 
        ],
        correta: 0
    },
    {
        pergunta: "Quem é conhecido como 'A Mãe dos Dragões'?",
        respostas: [
            "A) Cersei Lannister",
            "B) Daenerys Targaryen",
            "C) Sansa Stark"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome da espada de Jon Snow?",
        respostas: [
            "A) Lamento de Viúva",
            "B) Garralonga",
            "C) Agulha"
        ],
        correta: 1
    },
    {
        pergunta: "Quem é o filho mais velho de Cersei Lannister?",
        respostas: [
            "A) Joffrey Baratheon",
            "B) Tommen Baratheon",
            "C) Jaime Lannister"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o nome do continente principal onde a maior parte da história de 'Game of Thrones' se passa?",
        respostas: [
            "A) Essos",
            "B) Westeros",
            "C) Sothoryos"
        ],
        correta: 1
    },
    {
        pergunta: "Quem é conhecido como 'O Perfeito Estranho'?",
        respostas: [
            "A) Sandor Clegane",
            "B) Varys",
            "C) Petyr Baelish"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome da cidade onde está localizado o Trono de Ferro?",
        respostas: [
            "A) Porto Real",
            "B) Winterfell",
            "C) Meereen"
        ],
        correta: 0
    },
    {
        pergunta: "Quem é o pai biológico de Jon Snow?",
        respostas: [
            "A) Eddard Stark",
            "B) Robert Baratheon",
            "C) Rhaegar Targaryen"
        ],
        correta: 2
    },
    {
        pergunta: "Quem assassinou Joffrey Baratheon durante seu casamento?",
        respostas: [
            "A) Sansa Stark",
            "B) Tyrion Lannister",
            "C) Olenna Tyrell"
        ],
        correta: 2
    },
    {
        pergunta: "Quem é o líder dos Caminhantes Brancos?",
        respostas: [
            "A) O Rei da Noite",
            "B) Viserion",
            "C) Night's King"
        ],
        correta: 0
    }
];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laços de repetição
for(const item of perguntas){ 
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta 
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
  const respostaSelecionada = parseInt(event.target.value)
  const estaCorreta = respostaSelecionada === item.correta
  
  corretas.delete(item)
  if (estaCorreta) {
    corretas.add(item)
  }
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
}


    quizItem.querySelector('dl').appendChild(dt)
  }
   

   
   //remove os clones
   quizItem.querySelector('dl dt').remove()
 
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
  

