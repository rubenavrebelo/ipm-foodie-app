import { Recipes, Recipe } from "./recipes";

export interface User {
    username: String;
    name: String;
    recipes: Recipes;
    description: String;
    followers: Number;
    following: Number;
    favorites: Recipe[];
    image?: string
}

export const dummy1: User = {
    username: 'Trishaa',
    name: 'Trisha',
    recipes: {
        2: {
            name: 'Geleia de Framboesa',
            difficulty: 3,
            creator: 'Trisha',
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
        }, 7: {
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
            image: 'http://cozinhatravessa.com.br/wp-content/uploads/2015/04/DSC26841.jpg'
        }
    },
    description: 'I am the best cooker in the universe!!!! Unicorns will reign!!!!',
    followers: 1,
    following: 1002,
    favorites: [],
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2019-10-08-at-11-29-56-1570530611.png'
}

export const dummy2: User = {
    username: 'ClaireBA',
    name: 'Claire Saffitz',
    recipes: {
    },
    description: 'Hi, Im Claire from Bon Appetit and this is Gourmet Makes... something?',
    followers: 10033,
    following: 50,
    favorites: [],
    image: 'https://external-preview.redd.it/rf2Z2kCnjR_X6vRmcZ9ep01PYxwz6K8F-oPEZsVicGk.png?auto=webp&s=1ddc95fa82b12606902b2ff24decb17425b991e1'
}

export const DummyUsers: User[] = [
    dummy1,
    dummy2
]