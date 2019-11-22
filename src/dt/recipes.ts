
export interface Recipe {
    creator: string;
    difficulty: number;
    classification: number;
    ingredients: Ingredient[];
    image: string;
    name: string;
    medTime: number;
    steps: Step[];
    desc: string;
    tags?: string[];
}

export interface Ingredient {
    name: string;
    quantity: number | string;
    measure?: string;
}

export interface Recipes {
    [id: number]: Recipe
}

export interface Step {
    step: string;
    image?: string;
}

export const RecipesObject: Recipes = {
    0: {
        name: 'Picadinho de Frango',
        difficulty: 3,
        creator: 'GordonRamsay',
        classification: 4,
        ingredients: [
            {
                name: 'Peitos de frango',
                quantity: 3
            },
            {
                name: 'Manteiga',
                quantity: '100g',
            },
            {
                name: 'Limões',
                quantity: 3,
            },
            {
                name: 'Salsa',
                quantity: 'A gosto',
            }
        ],
        image: 'https://img.taste.com.au/7PtDfK_I/w720-h480-cfill-q80/taste/2017/07/quick-and-easy-meal-planner-128684-2.jpg',
        medTime: 30,
        steps: [
            {step:'Obtenha um frango e corte o mesmo em cubos',
            image:'https://thumbs.dreamstime.com/b/raw-chicken-knife-wooden-board-gradient-background-66123725.jpg'
            },
            {
            step:'Aqueça uma panela, em fogo médio, com a margarina e doure os cubos de frango. Adicione a cebola, o pimentão e a cenoura e refogue por 5 minutos. Acrescente a abobrinha e refogue por 5 minutos ou até amaciar. Tempere com sal, pimenta e salsa e sirva acompanhado de arroz branco e salada verde.',
            image:'https://cdn3.tmbi.com/toh/GoogleImages/Chicken-Piccata-with-Lemon-Sauce_EXPS_DSBZ17_26212_B01_13_5b.jpg',
            },
    
    ],  
        tags:['carne','frango','salsa','limoes'],
        desc: 'Picadinho de Frango é um dos meus pratos favoritos. Peito de galinha tenrinho mergulhado num molho de limão e grelhado até ficar dourado, yum!'
    },
    1: {
        name: 'Panquecas de Banana',
        difficulty: 3,
        creator: 'YodaBestCook',
        classification: 4,
        ingredients: [
            {
                name: 'Banana Madura',
                quantity: 1
            },
            {
                name: 'Ovos',
                quantity: '2',
            },
            {
                name: 'Canela',
                quantity: '1 Colher de chá',
            },

        ],
        image: 'https://www.iguaria.com/wp-content/uploads/2015/05/Panquecas-Banana-com-Mel-1024x768.jpg',
        medTime: 30,
        steps: [
            {
                step:'Numa tigela grande esmague as bananas. Junte o iogurte, ovos, açúcar e baunilha e misture bem. Polvilhe as farinhas, fermento e bicarbonato por cima. Misture tudo com um garfo e reserve até necessitar.',
                image:'https://www.asweetpeachef.com/wp-content/uploads/2016/05/banana-chia-pudding-8.jpg'
            },
            {
                step:'Aqueça uma frigideira grande anti-aderente em lume médio e unte com manteiga. Use uma colher de gelado para todas as panquecas ficarem do mesmo tamanho – deite 3 ou 4 porções da massa na frigideira e cozinhe por 1 a 2 minutos ou até começar a dourar. Vire e cozinhe por mais um minuto ou até ficarem prontas.',
                image:'https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/1576/letterbox_Sweet-pancakes593.jpg',

            }

        ],
        tags:['panquecas','banana','ovos','canela','saudável','pequeno-almoço'],

        desc: 'A receita de hoje é Panquecas de Banana, uma receita que não tem nem açúcar nem farinha ou leite. Só tem três ingredientes: bananas, ovos e canela. As bananas dão-lhes o toque doce necessário e, além disso, estas panquecas são ricas em proteínas, baixas em calorias (yupi!), sem glúten e, o melhor de tudo, são deliciosas. '
    },
    2: {
        name: 'Geleia de Framboesa',
        difficulty: 3,
        creator: 'Trishaa',
        classification: 4,
        ingredients: [
            {
                name: 'Framboesas',
                quantity: '500g'
            },
            {
                name: 'Açúcar',
                quantity: '200g',
            },

        ],
        image: 'https://www.iguaria.com/wp-content/uploads/2013/04/iguaria-geleia-de-framboesas.jpg',
        medTime: 30,
        steps: [],
        desc: 'A framboesa é um fruto vermelho rico em antioxidantes, o que significa que atua no combate ao envelhecimento das células, ajudando a prevenir doenças como câncer. Além disso a framboesa é deliciosa com o seu sabor delicado e aromático. Se você gosta desta frutinha, preste atenção nesta receita de geleia de framboesa caseira passo a passo e prepare para vender ou oferecer!'
    },
    3: {
        name: 'Mousse de Limão',
        difficulty: 1,
        creator: 'GrampaCarl',
        classification: 5,
        ingredients: [
            {
                name: 'Leite Condensado',
                quantity: '1 lata'
            },
            {
                name: 'Creme de leite',
                quantity: '1 lata',
            },
            {
                name: 'Sumo de limão',
                quantity: '1/2 chávena',
            },
        ],
        image: 'https://assets.almanaquesos.com/wp-content/uploads/2015/10/a-time-for-me-800x638.jpg',
        medTime: 30,
        steps: [],
        desc: 'Uma sobremesa leve e deliciosa, ideal para o final de uma refeição com pratos elaborados. Sirva a mousse de limão bem fresca.'
    },
    4: {
        name: 'Muffin de Bróculos e Cheddar',
        difficulty: 3,
        creator: 'AlienWoman',
        classification: 2,
        ingredients: [
            {
                name: 'Ovos',
                quantity: '4'
            },
            {
                name: 'Bróculos picados',
                quantity: '1 chávena',
            },
            {
                name: 'Queijo cheddar ralado',
                quantity: '1/2 chávena',
            },
        ],
        image: 'https://lar-natural.com.br/laradmin/uploads/2015/05/5-receitas-muffin-de-brocolis.jpg',
        medTime: 30,
        steps: [],
        desc: `Nem todo muffin precisa ser doce! Eu não sei quanto a vocês, mas eu tenho uma queda maior por salgados do que por doces! E também tenho loucura por muffins, acho a textura deles fantástica! Por isso tenho algumas receitinhas de muffins salgados deliciosos que quero dividir com vocês. \n
         Essa receita de muffin de brócolis e cheddar é uma preferidinha, e ela pode ser facilmente alterada, trocando o brocólis por outro legumes ou adicionando bacon ou linguiça, por exemplo. Imaginação na cozinha é tudo! E é sem glúten, por que não precisamos comer glutezinho todo dia não é mesmo? \n
        Continue lendo para saber como fazer muffin de brócolis fit e sem glúten, uma ótima sugestão de lanche da tarde salgado e saudável. Confira o preparo passo a passo em fotos e experimente!`
    },
    5: {
        name: 'Macarrão e queijo com leite de amêndoas',
        difficulty: 2,
        creator: 'GordonRamsay',
        classification: 4,
        ingredients: [
            {
                name: 'Leite de amêndoas',
                quantity: '2 chávenas'
            },
            {
                name: 'Macarrão',
                quantity: '1 chávena',
            },
            {
                name: 'Queijo ralado',
                quantity: '1/2 chávena',
            },
        ],
        image: 'https://lar-natural.com.br/laradmin/uploads/2015/05/5-receitas-macarr%C3%A3o-leite-de-amendoa.jpg',
        medTime: 30,
        steps: [],
        desc: `Eis a receita mais repetida aqui em casa: Mac and Cheese Vegano, ou, em português, Macarrão ao Molho de Queijo Vegano. Fazemos já há alguns anos e, deixa eu dizer, foi uma feliz descoberta. Servimos em diferentes ocasiões para familiares e amigos e é sucesso sempre. Simples, fácil de fazer e cheinho de sabor. \n

        Ele fica especialmente ótimo quando servido com ervas frescas e Parmesão Vegano. Pode ser preparado como prato principal ou como acompanhamento para outro prato. O molho pode até ser usado em outros tipos de preparações, como tortas salgadas e lasanhas. Use e abuse de sua criatividade. 🙂`
    },
    6: {
        name: 'Cheesecake',
        difficulty: 2,
        creator: 'GrampaCarl',
        classification: 5,
        ingredients: [
            {
                name: 'Ovos',
                quantity: '5'
            },
            {
                name: 'Chocolate branco derretido',
                quantity: '200g',
            },
            {
                name: 'Creme de queijo ',
                quantity: '200g',
            },
        ],
        image: 'https://portal-amb-imgs.clubedaana.com.br/2018/10/Cheese-cake-600x400.jpg',
        medTime: 30,
        steps: [],
        desc: 'Olá! Hoje trago-lhe uma receita nova. Desta vez uma sobremesa deliciosa! Cheesecake, gosta? Não está sozinho! Eu adoro! É simplesmente maravilhoso. Então, mãos à obra! Delicie-se e delicie toda a família com esta iguaria que é tão saborosa e, ao mesmo tempo, super fácil de fazer!'
    },
    7: {
        name: 'Suspiros',
        difficulty: 2,
        creator: 'Trishaa',
        classification: 3,
        ingredients: [
            {
                name: 'Ovos',
                quantity: '3'
            },
            {
                name: 'Açúcar',
                quantity: '1 chávena de chá',
            },
        ],
        image: 'https://www.receitax.com/wp-content/uploads/2016/01/suspiro.jpg',
        medTime: 30,
        steps: [],
        desc: `Você ainda tem claras de ovo? Não as jogue fora! Faça esses deliciosos suspiros :-) Uma receita ideal e anti-desperdício para acompanhar o seu chá ou café.
        Com apenas 2 ingredientes, faça esta receita com nossas instruções passo a passo abaixo`
    },
    8: {
        name: 'Brigadeiro de chocolate',
        difficulty: 4,
        creator: 'GrampaCarl',
        classification: 4,
        ingredients: [
            {
                name: 'Leite Condensado',
                quantity: '1 lata'
            },
            {
                name: 'Chocolate em pó',
                quantity: '2 colheres',
            },
            {
                name: 'Manteiga',
                quantity: '1 colher',
            },
        ],
        image: 'https://avidadoce.com/wp-content/uploads/2016/02/brigadeiro-gourmet-receita-e1530740232254.jpg',
        medTime: 30,
        steps: [],
        desc: `O brigadeiro é um dos mais tradicionais doces do Brasil, mas é apreciado em todo o mundo, e Portugal não é excepção! Aprenda a fazê-los!`
    },
    9: {
        name: 'Panini',
        difficulty: 2,
        creator: 'AlienWoman',
        classification: 5,
        ingredients: [
            {
                name: 'Ovos',
                quantity: '1'
            },
            {
                name: 'Requeijão',
                quantity: '2 colheres',
            },
            {
                name: 'Fermento',
                quantity: '1 colher de chá',
            },
        ],
        image: 'https://t1.rg.ltmcdn.com/pt/images/3/5/7/panini_na_frigideira_8753_600.jpg',
        medTime: 30,
        steps: [],
        desc: `Olá pessoal, a receita que ensinaremos hoje é um bom panini low carb

        Ela é uma ótima receita para comer de café da manhã e começar seu dia maravilhosamente bem com essa receita que eu amo!
        
        E pro seu bem, ele também se encaixa na dieta low carb
        
        Eu particularmente amo essa receita, ela é super simples, prática e rápida de se fazer
        
        Além de ela ser super deliciosa e crocante!!
        
        Ele fica super macio e crocante, além de ser delicioso
        
        Vamos a receita então!`
    },
    10: {
        name: 'Frozen yogurt de framboesa',
        difficulty: 2,
        creator: 'YodaBestCook',
        classification: 5,
        ingredients: [
            {
                name: 'Iogurte',
                quantity: '1'
            },
            {
                name: 'Frutas vermelhas congeladas',
                quantity: '1 chávena',
            },
            {
                name: 'Adoçante',
                quantity: 'a gosto',
            },
        ],
        image: 'http://cdn.blogdamimis.com.br/wp-content/uploads/2012/09/frozen.jpeg',
        medTime: 30,
        steps: [],
        desc: `Essa é a receita mais fácil que já realizei!

        Perfeita para um lanche da tarde, ou uma sobremesa saudável.
        
        Você pode usar frutas da sua preferência!`
    },
    11: {
        name: 'Barra energética',
        difficulty: 3,
        creator: 'YodaBestCook',
        classification: 3,
        ingredients: [
            {
                name: 'Tâmaras sem caroço',
                quantity: '1 chávena'
            },
            {
                name: 'Frutas secas',
                quantity: '1 chávena',
            },
            {
                name: 'Castanhas',
                quantity: '1 chávena',
            },
        ],
        image: 'https://i0.wp.com/panelaterapia.com/wp-content/uploads/2013/07/barrinhas.jpg?fit=640%2C547&ssl=1',
        medTime: 30,
        steps: [],
        desc: `Manter a forma não é tarefa fácil: exige disciplina, força de vontade, consciência e foco. É, ainda, preciso concordar que o objetivo pode parecer impossível de alcançar quando comemos de forma errada ou, ainda pior, quando seguimos uma dieta que não nos agrada. Se se identifica com problema e é fã dos snacks inteligentes, vai gostar de experimentar as nossas receitas de barras energéticas para fazer em casa.

        Sim, estes são um dos melhores snacks para complementar uma dieta e acompanhar uma rotina de exercício físico, e se está farto de comprar as suas, coloque mãos à obra e descubra como preparar estas pequenas delícias fit na sua cozinha.`
    },
    12: {
        name: 'Massa de pizza',
        difficulty: 1,
        creator: 'GordonRamsay',
        classification: 5,
        ingredients: [

            {
                name: 'sal',
                quantity: '1 colher',
            },
            {
                name: 'Farinha com fermento',
                quantity: '1 chávena',
            },
        ],
        image: 'https://i0.wp.com/panelaterapia.com/wp-content/uploads/2014/07/pizza_massa.jpg?zoom=1.25&resize=466%2C262',
        medTime: 30,
        steps: [],
        desc: `É bom`
    },
    13: {
        name: 'Mousse de chocolate',
        difficulty: 2,
        creator: 'TodTheMan',
        classification: 5,
        ingredients: [
            {
                name: 'Chocolate preto',
                quantity: '170g'
            },
            {
                name: 'Chantilly',
                quantity: '100g',
            },
        ],
        image: 'https://www.teleculinaria.pt/wp-content/uploads/2018/07/mousse-de-chocolate-saudavel-1-768x577.jpg',
        medTime: 30,
        steps: [],
        desc: ``
    },
    14: {
        name: 'Patê de Atum',
        difficulty: 2,
        creator: 'TodTheMan',
        classification: 3,
        ingredients: [
            {
                name: 'Atum em óleo',
                quantity: '1 lata'
            },
            {
                name: 'Requeijão cremoso',
                quantity: '2 chávenas de chá',
            },
        ],
        image: 'https://t2.rg.ltmcdn.com/pt/images/6/6/5/pate_de_atum_caseiro_6566_600.jpg',
        medTime: 30,
        steps: [],
        desc: `É sempre bom ter algumas latas de atum no armário da cozinha para quando quiser preparar uma receita prática, rápida e deliciosa, como é o caso do paté de atum. Este preparado é ótimo para fazer quando receber convidados e quiser servir uma entradinha ou mesmo para barrar em sandes e acompanhar as saladas do dia-a-dia.

        Para além de ser uma receita simples e saborosa, ainda vai tirar partido do valor nutricional do atum, que é um peixe rico em proteínas, potássio, magnésio, para além de outros minerais e vitaminas importantes para a saúde. Sempre que possível, prefira utilizar o atum fresco à versão em lata, pois é ainda mais saudável.`
    },
    15: {
        name: 'Patê de Peito de Peru',
        difficulty: 2,
        creator: 'TodTheMan',
        classification: 2,
        ingredients: [
            {
                name: 'Peito de peru defumado',
                quantity: '100g'
            },
            {
                name: 'Creme de queijo',
                quantity: '1 colher de chá',
            },
        ],
        image: 'https://img.itdg.com.br/tdg/images/recipes/000/049/442/135927/135927_original.jpg?mode=crop&width=710&height=400',
        medTime: 30,
        steps: [],
        desc: `Simples de fazer e toda a gente adora <3`
    },
    16: {
        name: 'Molho para Carne',
        difficulty: 1,
        creator: 'AlienWoman',
        classification: 5,
        ingredients: [
            {
                name: 'Vinagre balsâmico',
                quantity: '1 copo'
            },
            {
                name: 'Whiskey',
                quantity: '1 copo',
            },
        ],
        image: 'http://g.glbimg.com/og/gs/gsat5/f/thumbs/tag/2015/07/15/molho-carnes-620.jpg',
        medTime: 30,
        steps: [],
        desc: `As receitas de carne ficam ainda mais gostosas se forem servidas com um molho caseiro que complementa ou intensifica o sabor da carne usada. Existem várias receitas de molhos para carne que você pode experimentar, mas esta é a melhor!!!`
    },
    17: {
        name: 'Biscoitos de banana e aveia',
        difficulty: 3,
        creator: 'YodaBestCook',
        classification: 1,
        ingredients: [
            {
                name: 'Bananas',
                quantity: '2'
            },
            {
                name: 'Aveia',
                quantity: '1 chávena',
            },
        ],
        image: 'https://www.guiadasemana.com.br/contentFiles/image/2018/09/FEA/thumbnail/48283_w380h235_1537207893shutterstock-716366560.jpg',
        medTime: 30,
        steps: [],
        desc: `Receita de Cookies de banana e aveia
 
        Por Nídia do Carmo, Editora e redatora no TudoReceitas. 18 julho 2016
        Receita de Cookies de banana e aveiaImagem: lovelyascharged.wordpress.com
        Os cookies de banana e aveia são uma opção saudável, simples e rápida para quem busca um lanche ou café da manhã nutritivo e saboroso. Como são naturalmente doces, não é necessário acrescentar açúcar. Além disso, estes biscoitinhos de banana são ainda perfeitos para vegetarianos ou veganos. Se você gostaria de saber como preparar esse cookie saudável, veio ao sitío certo!`
    },
    18: {
        name: 'Bombocado',
        difficulty: 3,
        creator: 'ClaireBA',
        classification: 5,
        ingredients: [
            {
                name: 'Coco ralado',
                quantity: '500g'
            },
            {
                name: 'Leite condensado',
                quantity: '1 lata',
            },
        ],
        image: 'https://www.guiadasemana.com.br/contentFiles/image/2018/09/FEA/thumbnail/48283_w380h235_1537208403shutterstock-446439268.jpg',
        medTime: 30,
        steps: [],
        desc: `O bombocado é um daqueles doces que dá vontade de comer aos montes. Seja no café-da-manhã ou no lanche da tarde, este docinho é demais!`
    },
    19: {
        name: 'Torta de nutella',
        difficulty: 2,
        creator: 'ClaireBA',
        classification: 5,
        ingredients: [
            {
                name: 'Ovos',
                quantity: '4'
            },
            {
                name: 'Nutella',
                quantity: '240g',
            },
        ],
        image: 'https://abrilmdemulher.files.wordpress.com/2016/10/receita-torta-macia-de-nutella.jpg?quality=90&strip=info',
        medTime: 30,
        steps: [],
        desc: `Uma das melhores sobremesas da vida!!! É cremosa, é geladinha e é doce na medida, aquela receita pra quem ama Nutella assim como eu!`
    },
}