import * as React from 'react';
import SearchBar from '../components/search-bar';
import CookingPost from '../components/feed-post';
import { Typography, Grid } from '@material-ui/core';
import { RecipesObject, Recipe } from '../dt/recipes';
import { RouteComponentProps } from '@reach/router';
import { User } from '../dt/user';

interface Props {
    loggedIn: boolean;
    addToFavorites: (id: number) => void;
    isFavorited: (recipe: Recipe) => boolean;
    handleSearch: (search: string) => void;
    selectRecipe: (recipe: Recipe) => void;
    getOwner: (username: string) => User;
}

class Homepage extends React.Component<Props & RouteComponentProps>{

    generatePosts = () => {
        return Object.keys(RecipesObject).map((recipeName, i) =>
            <CookingPost favorited={this.props.isFavorited(RecipesObject[i])} getOwner={this.props.getOwner}
                addToFavorite={this.props.addToFavorites} selectRecipe={this.props.selectRecipe}
                recipe={RecipesObject[i]} id={i} deleteMode={false} loggedIn={this.props.loggedIn} />)
    }

    render = () => {
        return (
            <div style={{ width: '100%' }}>
                <div style={{ margin: '0 auto', width: '40%', display: 'block' }}>ImagePlaceholder</div>
                <div style={{ margin: '0 auto', width: '40%', position: 'relative', display: 'block' }}>
                    <SearchBar handleSearch={this.props.handleSearch} />
                </div>
                <Typography variant={'h4'} style={{ marginTop: '60px', marginLeft: '30px' }}>Feed de Receitas</Typography>

                <Grid container style={{ padding: '15px', paddingLeft: '70px' }}>
                    {this.generatePosts()}
                </Grid>
            </div>

        )
    }
}

export default Homepage