import * as React from 'react';
import CookingPost from '../components/feed-post';
import { RecipesObject, Recipe } from '../dt/recipes';
import { User } from '../dt/user';
import { RouteComponentProps } from '@reach/router';
import { navigate } from '@reach/router';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Typography, Button } from '@material-ui/core';


export interface Props {
    user: User
    isFavorited: (recipe: Recipe) => boolean;
    addToFavorite: (id: number) => void;
    selectRecipe: (recipe: Recipe) => void;
    getOwner: (username: string) => User;
}

class MyFavoritesPage extends React.Component<RouteComponentProps & Props> {

    constructor(props: RouteComponentProps & Props) {
        super(props)
    }

    generatePosts = () => {
        const arr = Object.keys(RecipesObject).filter((recipeName, i) => this.props.user.favorites.includes(RecipesObject[i]))
        return arr.map((recipeName, i) => <CookingPost favorited={this.props.isFavorited(RecipesObject[parseInt(arr[i])])}
            addToFavorite={this.props.addToFavorite} selectRecipe={this.props.selectRecipe} getOwner={this.props.getOwner}
            recipe={RecipesObject[parseInt(arr[i])]} id={parseInt(arr[i])} deleteMode={false} loggedIn={this.props.user.username !== ''} />)
    }

    handleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        navigate('/')
    }

    render = () => {
        return (
            <div>
            <Button onClick={this.handleButton}><ChevronLeftIcon />Voltar</Button>
            <div>
                <Typography variant={'h4'} style={{ marginTop: '60px', marginLeft: '80px' }}>My Favorites Recipes</Typography>
                <div>{this.generatePosts()}</div>
            </div>
            </div>
        )
    }
}

export default MyFavoritesPage