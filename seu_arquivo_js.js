const quotes = [
    {

        quote: "Meça duas vezes, corte uma vez.",
        author: "E você ainda vai errar."
    },
    {
        quote: "Se depuramos o código, por que adicionamos bugs?",
        author: "Provérbio de desenvolvedor"
    },
    {
        quote: "Programação é a arte de organizar e dominar a complexidade.",
        author: "Edsger W. Dijkstra"
    },
    {
        quote: "É mais fácil mudar a especificação do que mudar o código.",
        author: "E você vai mudar a especificação."
    },
    {
        quote: "Existem apenas dois problemas difíceis na ciência da computação: invalidação de cache e nomeação de coisas.",
        author: "Phil Karlton"
    },
    {
        quote: "Na minha última reencarnação, eu quero ser um script em vez de um programa.",
        author: "L. Peter Deutsch"
    },
    {
        quote: "Seja a mudança que você deseja ver no código do mundo.",
        author: "Gandhi (com uma pequena adaptação)"
    },
    {
        quote: "Programadores são a ferramenta mais eficiente de transformação de café em código.",
        author: "Desconhecido"
    },
    // Adicione mais citconst quotes = [
    {
        quote: "Código limpo sempre parece que foi escrito por alguém que se importava.",
        author: "Michael Feathers"
    },
    {
        quote: "Não se preocupe se ele não funciona direito. Se tudo estivesse correto, seria chamado de hardware.",
        author: "Desconhecido"
    },
    {
        quote: "Em ciência da computação, somos treinados para sermos precavidos com generalizações.",
        author: "Donald Knuth"
    },
    {
        quote: "Existem apenas dois hardwares no mundo: o que está na nuvem e o que não está.",
        author: "Antonio Regalado"
    },
    {
        quote: "Sempre haverá apenas dois tipos de linguagens de programação: aquelas que as pessoas reclamam e aquelas que ninguém usa.",
        author: "Bjarne Stroustrup"
    },
    {
        quote: "A depuração de código é duas vezes mais difícil do que escrevê-lo. Portanto, se você escrever o código tão inteligente quanto possível, não será suficientemente inteligente para depurá-lo.",
        author: "Brian W. Kernighan"
    },
    {
        quote: "A melhor maneira de prever o futuro é implementá-lo.",
        author: "David Heinemeier Hansson"
    },
    {
        quote: "Há apenas dois tipos de programadores: aqueles que sempre fazem backup e aqueles que ainda vão fazer backup.",
        author: "Desconhecido"
    },
];

// Adicione mais citações à list

const quoteDisplay = document.getElementById('quoteDisplay');
const authorDisplay = document.getElementById('authorDisplay');
const newQuoteButton = document.getElementById('newQuoteButton');

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = `"${randomQuote.quote}"`;
    authorDisplay.textContent = `- ${randomQuote.author}`;
}

newQuoteButton.addEventListener('click', generateRandomQuote);

// Exibir uma citação aleatória ao carregar a página
generateRandomQuote();

