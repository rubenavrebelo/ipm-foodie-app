import * as React from 'react';
import Navbar from '../components/navbar';
import Homepage from './homepage';
import ProfilePage from './profile';
import { User } from '../dt/user';
import { Router, navigate } from '@reach/router';
import { RecipesObject, Recipe, Recipes } from '../dt/recipes';
import MyFavoritesPage from './myfavorites-page';
import SearchResultsPage from './search-results';

interface State {
    user: User;
    searchResults: Recipe[];
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
            searchResults: []
        };
    }

    createUser = (user: User) => {
        this.setState({
            user
        })
    }

    filterSearch = (search: String) => {
        console.log(Object.values(RecipesObject).filter((recipe) => recipe.name.toLowerCase().includes(search)))
        this.setState({
            searchResults: Object.values(RecipesObject).filter((recipe) => recipe.name.toLowerCase().includes(search))
        })
        navigate('/search')
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
                <Navbar createUser={this.createUser} />
                <Router>
                    <ProfilePage isFavorited={this.isFavorited}
                        deletePosts={this.deleteUserPosts} user={this.state.user} path={'/profile'} addToFavorites={this.addToFavorites} />
                    <Homepage addToFavorites={this.addToFavorites} loggedIn={this.state.user.username !== ''} path={'/'}
                        isFavorited={this.isFavorited} handleSearch={this.filterSearch} />
                    <MyFavoritesPage path={'/favorites'} user={this.state.user} addToFavorite={this.addToFavorites} isFavorited={this.isFavorited} />
                    <SearchResultsPage path={'/search'} addToFavorites={this.addToFavorites} isFavorited={this.isFavorited} searchResults={this.state.searchResults}
                        loggedIn={this.state.user.username !== ''} />
                </Router>
            </div>
        )
    }
}

export default MainPageHandler