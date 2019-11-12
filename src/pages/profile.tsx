import * as React from 'react';
import Navbar from '../components/navbar';
import SearchBar from '../components/search-bar';
import CookingPost from '../components/feed-post';
import { Typography, Avatar, Grid } from '@material-ui/core';
import { RecipesObject, Recipe } from '../dt/recipes';
import { User } from '../dt/user';

export interface Props {
    user: User
}

class ProfilePage extends React.Component<Props> {

    constructor(props: Props) {
        super(props)
    }

    generatePosts = () => {
        return Object.keys(RecipesObject).map((recipeName, i) => <CookingPost recipeName={RecipesObject[i].name}
            recipeOwner={RecipesObject[i].creator} img={RecipesObject[i].image} />)
    }

    render = () => {
        return (
            <div>
                <div>
                    <Grid container alignItems="center" style={{ paddingRight: '50px', paddingLeft: '80px', paddingTop: '30px', paddingBottom: '30px' }}>
                        <Grid item style={{ width: '200px' }}>
                            <Avatar style={{ width: '200px', height: '200px' }}>R</Avatar>
                            <Typography style={{ margin: '0 auto', display: 'block' }}>Username</Typography>
                        </Grid>
                        <Grid item style={{ marginLeft: '50px' }}>
                            <Typography style={{ display: 'inline-block', marginRight: '20px' }}>0 Recipes</Typography>
                            <Typography style={{ display: 'inline-block', marginRight: '20px' }}>{this.props.user.following} Following</Typography>
                            <Typography style={{ display: 'inline-block', marginRight: '20px' }}>{this.props.user.followers} Followers</Typography>
                            <Typography>Description</Typography>
                        </Grid>
                    </Grid>
                    <div style={{ width: '95%', height: '2px', backgroundColor: 'lightgrey', margin: '0 auto' }} />

                    <div style={{ padding: '15px', paddingLeft: '20px' }}>
                        {this.generatePosts()}
                    </div>

                </div>
            </div>
        )
    }
}

export default ProfilePage