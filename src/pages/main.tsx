import * as React from 'react';
import Navbar from '../components/navbar';
import Homepage from './homepage';
import ProfilePage from './profile';
import { User, DummyUsers } from '../dt/user';
import { Router, navigate } from '@reach/router';
import { RecipesObject, Recipe, Recipes, UserRecipes } from '../dt/recipes';
import MyFavoritesPage from './myfavorites-page';
import SearchResultsPage from './search-results';
import RecipePage from './recipe-page';
import { isUndefined } from 'util';

interface State {
    user: User;
    searchResults: Recipe[];
    recipeSelected?: Recipe;
    searched: String;
    goBackPath: string;
}

class MainPageHandler extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            user: {
                name: '',
                followers: 0,
                following: 0,
                username: '',
                recipes: [],
                description: '',
                favorites: [],
            },
            searchResults: [],
            searched: '',
            recipeSelected: undefined,
            goBackPath:'/'
        };
    }

    createUser = (user: User) => {
        const newUser = user;
        const userRecipes = UserRecipes(user.username)
        user.recipes = userRecipes;
        user.image = 'https://cdn1-www.dogtime.com/assets/uploads/2015/10/cook-for-your-pets-day.jpg';
        this.setState({
            user
        })
    }

    addRecipeToUser = (recipe: Recipe) => {
        const user = this.state.user
        user.recipes = {
            ...user.recipes,
            [Object.keys(RecipesObject).length]: recipe
        }

        console.log(user)

        this.setState({
            user
        })
    }

    selectViewRecipe = (recipe: Recipe) => {
        this.setState({
            recipeSelected: recipe
        }, () => navigate('/recipe'))
    }

    filterSearch = (search: String) => {
        this.setState({ searched: search })
        this.setState({
            searchResults: Object.values(RecipesObject).filter((recipe) => recipe.name.toLowerCase().includes(search))
        }, () => navigate('/search'))
    }

    advancedFilterSearch = (search: string, classification?: number, difficulty?: number, time?: number[], tags?: string[]) => {
        let initialSearch = Object.values(RecipesObject).filter((recipe: Recipe) => recipe.name.toLowerCase().includes(search))

        if (tags) {

        }
        if (!isUndefined(difficulty)) {
            initialSearch = Object.values(initialSearch).filter((recipe) => recipe.difficulty <= difficulty)
        }

        if (classification) {
            initialSearch = Object.values(initialSearch).filter((recipe: Recipe) => recipe.classification >= classification)
        }

        if (time) {
            initialSearch = Object.values(initialSearch).filter((recipe: Recipe) => recipe.medTime >= time[0] && recipe.medTime <= time[1])

        }

        if (tags) {
            initialSearch = Object.values(initialSearch).filter((recipe: Recipe) => recipe.tags && recipe.tags.some((tag) => tags.includes(tag)
            ))
        }

        this.setState({
            searchResults: initialSearch
        }, () => navigate('/search'))

    }

    addToFavorites = (id: number) => {
        if (this.state.user.favorites.includes(RecipesObject[id])) {
            const newUser = this.state.user;
            newUser.favorites.splice(newUser.favorites.indexOf(RecipesObject[id]), 1)
            this.setState({
                user: newUser
            })
        } else {
            const newUser = this.state.user;
            newUser.favorites = newUser.favorites.concat(RecipesObject[id])
            this.setState({
                user: newUser
            })
        }
    }

    getRecipeOwner = (username: string) => {
        return DummyUsers.filter((user) => user.username === username)[0]
    }

    isFavorited = (recipe: Recipe) => {
        return this.state.user.favorites.includes(recipe)
    }

    deleteUserPosts = (recipes: Recipes) => {
        const user = this.state.user;
        user.recipes = recipes;
        this.setState({
            user
        })
    }

    updateGoBackPath = (path: string) => {
        this.setState({goBackPath: path})
    }



    render = () => {
        return (
            <div>
                <Navbar createUser={this.createUser} addRecipeToUser={this.addRecipeToUser} />
                <Router>
                    <ProfilePage isFavorited={this.isFavorited} selectRecipe={this.selectViewRecipe} getOwner={this.getRecipeOwner}
                        deletePosts={this.deleteUserPosts} user={this.state.user} path={'/profile'} addToFavorites={this.addToFavorites} updatePath={this.updateGoBackPath}/>
                    <Homepage addToFavorites={this.addToFavorites} loggedIn={this.state.user.username !== ''} path={'/'} selectRecipe={this.selectViewRecipe}
                        isFavorited={this.isFavorited} handleSearch={this.filterSearch} getOwner={this.getRecipeOwner} advancedFilterSearch={this.advancedFilterSearch}/>
                    <MyFavoritesPage path={'/favorites'} user={this.state.user} addToFavorite={this.addToFavorites} isFavorited={this.isFavorited}
                        selectRecipe={this.selectViewRecipe} getOwner={this.getRecipeOwner} updatePath={this.updateGoBackPath}/>
                    <SearchResultsPage path={'/search'} addToFavorites={this.addToFavorites} isFavorited={this.isFavorited} searchResults={this.state.searchResults}
                        loggedIn={this.state.user.username !== ''} selectRecipe={this.selectViewRecipe} getOwner={this.getRecipeOwner} search={this.state.searched} updatePath={this.updateGoBackPath}/>
                    <RecipePage path={'/recipe'} user={this.state.user} recipe={this.state.recipeSelected} goBackPath={this.state.goBackPath} />
                </Router>
            </div>
        )
    }
}

export default MainPageHandler