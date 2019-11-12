import * as React from 'react';
import Navbar from '../components/navbar';
import SearchBar from '../components/search-bar';
import CookingPost from '../components/feed-post';
import { Typography } from '@material-ui/core';
import { RecipesObject, Recipe } from '../dt/recipes';

class SearchResultsPage extends React.Component {

    constructor(props: {}) {
        super(props)
    }

    generatePosts = () => {
        return Object.keys(RecipesObject).map((recipeName, i) => <CookingPost recipeName={RecipesObject[i].name}
            recipeOwner={RecipesObject[i].creator} img={RecipesObject[i].image} />)
    }

    render = () => {
        return (
            <div>
                <Typography variant={'h2'}>Resultados para:</Typography><Typography variant={'h4'}></Typography>
            </div>
        )
    }
}

export default SearchResultsPage