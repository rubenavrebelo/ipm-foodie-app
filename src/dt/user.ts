import { Recipes } from "./recipes";

export interface User {
    username: String;
    name: String;
    recipes: Recipes;
    description: String;
    followers: Number;
    following: Number;
    favorites: Recipes;
}