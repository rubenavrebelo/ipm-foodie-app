import * as React from 'react';
import CookingPost from '../components/feed-post';
import { Typography, Button } from '@material-ui/core';
import { RecipesObject, Recipe, Recipes } from '../dt/recipes';
import { RouteComponentProps, navigate } from '@reach/router';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { User } from '../dt/user';

interface Prop {
    addToFavorites: (id: number) => void;
    isFavorited: (recipe: Recipe) => boolean;
    searchResults: Recipe[];
    loggedIn: boolean;
    selectRecipe: (recipe: Recipe) => void;
    getOwner: (username: string) => User;
}

class SearchResultsPage extends React.Component<Prop & RouteComponentProps> {

    constructor(props: Prop & RouteComponentProps) {
        super(props)
    }

    generatePosts = () => {
        const arr = Object.keys(RecipesObject).filter((recipeName, i) => this.props.searchResults.includes(RecipesObject[i]))
        return arr.map((recipeName, i) => <CookingPost favorited={this.props.isFavorited(RecipesObject[parseInt(arr[i])])}
            addToFavorite={this.props.addToFavorites} selectRecipe={this.props.selectRecipe} getOwner={this.props.getOwner}
            recipe={RecipesObject[parseInt(arr[i])]} id={parseInt(arr[i])} deleteMode={false} loggedIn={this.props.loggedIn} />)
    }

    goBack = (event: React.MouseEvent) => {
        navigate('/')
    }

    render = () => {
        return (
            <div>
                <Button onClick={this.goBack}><ChevronLeftIcon /> Retornar</Button>
                <Typography variant={'h2'}>Resultados para:</Typography><Typography variant={'h4'}></Typography>
                {this.generatePosts()}
            </div>
        )
    }
}

export default SearchResultsPage