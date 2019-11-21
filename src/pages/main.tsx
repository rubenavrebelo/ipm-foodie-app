import * as React from 'react';
import Navbar from '../components/navbar';
import Homepage from './homepage';
import ProfilePage from './profile';
import { User, DummyUsers } from '../dt/user';
import { Router, navigate } from '@reach/router';
import { RecipesObject, Recipe, Recipes } from '../dt/recipes';
import MyFavoritesPage from './myfavorites-page';
import SearchResultsPage from './search-results';
import RecipePage from './recipe-page';

interface State {
    user: User;
    searchResults: Recipe[];
    recipeSelected?: Recipe;
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
            recipeSelected: undefined
        };
    }

    createUser = (user: User) => {
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
        console.log(Object.values(RecipesObject).filter((recipe) => recipe.name.toLowerCase().includes(search)))
        this.setState({
            searchResults: Object.values(RecipesObject).filter((recipe) => recipe.name.toLowerCase().includes(search))
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

    render = () => {
        return (
            <div>
                <Navbar createUser={this.createUser} addRecipeToUser={this.addRecipeToUser} />
                <Router>
                    <ProfilePage isFavorited={this.isFavorited} selectRecipe={this.selectViewRecipe} getOwner={this.getRecipeOwner}
                        deletePosts={this.deleteUserPosts} user={this.state.user} path={'/profile'} addToFavorites={this.addToFavorites} />
                    <Homepage addToFavorites={this.addToFavorites} loggedIn={this.state.user.username !== ''} path={'/'} selectRecipe={this.selectViewRecipe}
                        isFavorited={this.isFavorited} handleSearch={this.filterSearch} getOwner={this.getRecipeOwner} />
                    <MyFavoritesPage path={'/favorites'} user={this.state.user} addToFavorite={this.addToFavorites} isFavorited={this.isFavorited}
                        selectRecipe={this.selectViewRecipe} getOwner={this.getRecipeOwner} />
                    <SearchResultsPage path={'/search'} addToFavorites={this.addToFavorites} isFavorited={this.isFavorited} searchResults={this.state.searchResults}
                        loggedIn={this.state.user.username !== ''} selectRecipe={this.selectViewRecipe} getOwner={this.getRecipeOwner} />
                    <RecipePage path={'/recipe'} user={this.state.user} recipe={this.state.recipeSelected} />
                </Router>
            </div>
        )
    }
}

export default MainPageHandler