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

export const dummy3: User = {
    username: 'YodaBestCook',
    name: 'Baby Yoda',
    recipes: {
    },
    description: 'hello, Yoda my name is, baby i am, cook for you i will, with these recipes the force strong is',
    followers: 1000000000,
    following: 1,
    favorites: [],
    image: 'https://i2.wp.com/trecobox.com.br/wp-content/uploads/2019/11/baby-yoda-the-mandalorian-star-wars-estrategia.jpg?fit=740%2C444&ssl=1'
}

export const dummy4: User = {
    username: 'GordonRamsay',
    name: 'Gordon Ramsay',
    recipes: {
    },
    description: 'What are you?',
    followers: 56720,
    following: 326,
    favorites: [],
    image: 'data:image/jpeg;base64,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'
}

export const dummy5: User = {
    username: 'TodTheMan',
    name: 'Tod Motze',
    recipes: {
    },
    description: 'Hey! Im here to share all my recipes with my followers, hope you enjoy! I know i did! ',
    followers: 2,
    following: 589,
    favorites: [],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksnscVuQQOtFg_qVRh3wXf1R1dcMIPpqAZY6_sZO3HpacNPlgWA&s'
}

export const dummy6: User = {
    username: 'AlienWoman',
    name: 'Cassie Fox',
    recipes: {
    },
    description: 'Hello fellow cooks! hope you enjoy my recipes!',
    followers: 2089,
    following: 1902,
    favorites: [],
    image: 'https://i.pinimg.com/236x/f9/47/ba/f947badcf4d14c777a9853af5d9beb6e--stockphotos-photos-google.jpg'
}

export const dummy7: User = {
    username: 'GrampaCarl',
    name: 'Carl Jackson',
    recipes: {
    },
    description: 'Im Carl and im here to help you learn some basic recipes!',
    followers: 50680,
    following: 920,
    favorites: [],
    image: 'https://static.wixstatic.com/media/aa04cd_8577e11bdc6e49f0bacf85d22dca80cb.jpg/v1/fill/w_420,h_658,al_c,lg_1,q_80/aa04cd_8577e11bdc6e49f0bacf85d22dca80cb.webp'
}



export const DummyUsers: User[] = [
    dummy1,
    dummy2,
    dummy3,
    dummy4,
    dummy5,
    dummy6
]