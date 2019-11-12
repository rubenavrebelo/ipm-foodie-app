import * as React from 'react';
import SearchBar from '../components/search-bar';
import CookingPost from '../components/feed-post';
import { Typography } from '@material-ui/core';
import { RecipesObject, Recipe } from '../dt/recipes';
import { RouteComponentProps } from '@reach/router';

interface Props {
    loggedIn: boolean;
    addToFavorites: (id: number) => void;
    isFavorited: (recipe: Recipe) => boolean;
    handleSearch: (search: string) => void;
}

class Homepage extends React.Component<Props & RouteComponentProps>{

    generatePosts = () => {
        return Object.keys(RecipesObject).map((recipeName, i) => <CookingPost favorited={this.props.isFavorited(RecipesObject[i])}
            addToFavorite={this.props.addToFavorites}
            recipe={RecipesObject[i]} id={i} deleteMode={false} loggedIn={this.props.loggedIn} />)
    }

    render = () => {
        return (
            <div style={{ width: '100%' }}>
                <div style={{ margin: '0 auto', width: '40%', display: 'block' }}>ImagePlaceholder</div>
                <div style={{ margin: '0 auto', width: '40%', position: 'relative', display: 'block' }}>
                    <SearchBar handleSearch={this.props.handleSearch} />
                </div>
                <Typography variant={'h4'} style={{ marginTop: '15px' }}>Feed de Receitas</Typography>

                <div style={{ padding: '15px', paddingLeft: '20px' }}>
                    {this.generatePosts()}
                </div>
            </div>

        )
    }
}

export default Homepage