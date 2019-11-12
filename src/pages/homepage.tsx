import * as React from 'react';
import Navbar from '../components/navbar';
import SearchBar from '../components/search-bar';
import CookingPost from '../components/feed-post';
import { Typography } from '@material-ui/core';
import { RecipesObject, Recipe } from '../dt/recipes';

class Homepage extends React.Component {

    constructor(props: {}) {
        super(props)
    }

    generatePosts = () => {
        return Object.keys(RecipesObject).map((recipeName, i) => <CookingPost recipeName={RecipesObject[i].name}
            recipeOwner={RecipesObject[i].creator} img={RecipesObject[i].image} />)
    }

    render = () => {
        return (
            <div style={{ width: '100%' }}>
                <div style={{ margin: '0 auto', width: '40%', display: 'block' }}>ImagePlaceholder</div>
                <div style={{ margin: '0 auto', width: '40%', position: 'relative', display: 'block' }}>
                    <SearchBar />
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