const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:
        "1. Qual dos impactos a IA vai causar no mercado futuro?",

        alternativas:[
            "Substituir totalmente empregos humanos.",
             "Criar novos tipos de empregos."
        ]
    },
    {
        enunciado:
        "2. Qual dessas áreas é considerada uma das maiores tendências futuras da IA nos próximos anos?",

        alternativas:[
            "Realidade aumentada aplicada apenas a jogos",
             "Modelos multimodais que combinam texto, imagem, som e vídeo"
        ]
    },
    {
        enunciado:
        "3. O que se espera que aumente com o avanço da IA generativa nos próximos anos?",

        alternativas:[
            "A criação automática de conteúdo em diversas mídias (texto, imagem, vídeo, áudio)",
             "A diminuição do uso de redes neurais profundas"
        ]
    },
    {
        enunciado:
        "4. Em relação à ética na IA, qual tendência está ganhando mais atenção globalmente?",

        alternativas:[
            "Tornar todos os modelos de IA de código fechado obrigatoriamente",
             "Desenvolvimento de regulamentações e IA responsável"
        ]
    },
    {
        enunciado:
        "5. Qual é uma tendência no uso de IA em ambientes corporativos?",

        alternativas:[
            "Automação inteligente de processos (como RH, jurídico, finanças)",
             "Exclusivamente uso da IA em marketing e vendas"
        ]
    },
    {
        enunciado:
        "6. O que se espera sobre os modelos de linguagem no futuro próximo?",

        alternativas:[
            "Serão mais eficientes, personalizados e com menor consumo de energia",
             "Serão sempre maiores, mais lentos e inacessíveis ao público geral"
        ]
    },
]