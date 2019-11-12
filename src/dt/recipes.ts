
export interface Recipe {
    creator: string;
    difficulty: number;
    classification: number;
    ingredients: Ingredient[];
    image: string;
    name: string;
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
        creator: 'Vizinha da esquina',
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
        image: 'https://img.taste.com.au/7PtDfK_I/w720-h480-cfill-q80/taste/2017/07/quick-and-easy-meal-planner-128684-2.jpg'
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
        image: 'https://www.iguaria.com/wp-content/uploads/2015/05/Panquecas-Banana-com-Mel-1024x768.jpg'
    },
    2: {
        name: 'Geleia de Framboesa',
        difficulty: 3,
        creator: 'Chefe da esquina',
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
        image: 'https://www.iguaria.com/wp-content/uploads/2013/04/iguaria-geleia-de-framboesas.jpg'
    },
}