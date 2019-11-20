
export interface Recipe {
    creator: string;
    difficulty: number;
    classification: number;
    ingredients: Ingredient[];
    image: string;
    name: string;
    medTime: number;
    steps: string[]
}

export interface Ingredient {
    name: string;
    quantity: number | string;
}

export interface Recipes {
    [id: number]: Recipe
}


export const RecipesObject: Recipes = {
    0: {
        name: 'chicken piccata',
        difficulty: 3,
        creator: 'Maria',
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
        steps: []
    },
    1: {
        name: 'Panqueca de Banana',
        difficulty: 3,
        creator: 'Chefe da esquina',
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
                name: 'Fermento',
                quantity: '1 Colher de chá',
            },

        ],
        image: 'https://www.iguaria.com/wp-content/uploads/2015/05/Panquecas-Banana-com-Mel-1024x768.jpg',
        medTime: 30,
        steps: []
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
        steps: []
    },
    3: {
        name: 'Mousse de Limão',
        difficulty: 1,
        creator: 'Vizinha da esquina',
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
        steps: []
    },
    4: {
        name: 'Muffin de Bróculos e Cheddar',
        difficulty: 3,
        creator: 'Chefe da esquina',
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
        steps: []
    },
    5: {
        name: 'Macarrão e queijo com leite de amêndoas',
        difficulty: 2,
        creator: 'Chefe da esquina',
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
        steps: []
    },
    6: {
        name: 'Cheesecake',
        difficulty: 2,
        creator: 'Vizinha da esquina',
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
        steps: []
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
        image: 'http://cozinhatravessa.com.br/wp-content/uploads/2015/04/DSC26841.jpg',
        medTime: 30,
        steps: []
    },
    8: {
        name: 'Brigadeiro de chocolate',
        difficulty: 4,
        creator: 'Chefe da esquina',
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
        image: 'https://naminhapanela.com/wp-content/uploads/2010/09/brigadeiro.jpg',
        medTime: 30,
        steps: []
    },
    9: {
        name: 'Panini',
        difficulty: 2,
        creator: 'Chefe da esquina',
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
        steps: []
    },
    10: {
        name: 'Frozen yogurt de framboesa',
        difficulty: 2,
        creator: 'Chefe da esquina',
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
        steps: []
    },
    11: {
        name: 'Barra energética',
        difficulty: 3,
        creator: 'Vizinha da esquina',
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
        steps: []
    },
    12: {
        name: 'Massa de pizza',
        difficulty: 1,
        creator: 'Chefe da esquina',
        classification: 1,
        ingredients: [
            {
                name: 'Iogurte grego',
                quantity: '100 g'
            },
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
        steps: []
    },
    13: {
        name: 'Mousse de chocolate',
        difficulty: 2,
        creator: 'Chefe da esquina',
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
        image: 'https://naminhapanela.com/wp-content/uploads/2012/05/IMG_0871.jpg',
        medTime: 30,
        steps: []
    },
    14: {
        name: 'Patê de Atum',
        difficulty: 2,
        creator: 'Chefe da esquina',
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
        image: 'https://www.pingodoce.pt/wp-content/uploads/2016/10/patedeatum-516x310.jpg',
        medTime: 30,
        steps: []
    },
    15: {
        name: 'Patê de Peito de Peru',
        difficulty: 2,
        creator: 'Chefe da esquina',
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
        steps: []
    },
    16: {
        name: 'Molho para Carne',
        difficulty: 1,
        creator: 'Chefe da esquina',
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
        image: 'http://delarosa.com.br/wp-content/uploads/2014/03/3.jpg',
        medTime: 30,
        steps: []
    },
    17: {
        name: 'Biscoitos de banana e aveia',
        difficulty: 3,
        creator: 'Vizinha da esquina',
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
        steps: []
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
        steps: []
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
        image: 'https://www.guiadasemana.com.br/contentFiles/image/2018/09/FEA/thumbnail/48283_w380h235_1537208458shutterstock-253206406.jpg',
        medTime: 30,
        steps: []
    },
}