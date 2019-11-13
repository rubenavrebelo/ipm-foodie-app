import * as React from 'react';
import Navbar from '../components/navbar';
import SearchBar from '../components/search-bar';
import CookingPost from '../components/feed-post';
import { Typography, Avatar, Grid, CardHeader, CardContent, Card } from '@material-ui/core';
import { RecipesObject, Recipe } from '../dt/recipes';
import { User } from '../dt/user';
import { RouteComponentProps } from '@reach/router';

export interface Props {
    user: User,
    recipe?: Recipe
}

class RecipePage extends React.Component<Props & RouteComponentProps> {

    constructor(props: Props & RouteComponentProps) {
        super(props)
    }

    render = () => {
        return (
            <div>
                <Grid container>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader title={this.props.recipe ? this.props.recipe.name : ''} />
                            <CardContent>
                                <Typography>{this.props.recipe ? this.props.recipe.creator : ''}</Typography>
                                <Typography>{this.props.recipe ? this.props.recipe.difficulty : ''}</Typography>
                                <Typography>{this.props.recipe ? this.props.recipe.classification : ''}</Typography>
                                <Typography>{this.props.recipe ? this.props.recipe.creator : ''}</Typography>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent style={{ textAlign: 'center' }}>
                                <Typography variant={'h5'}>Experimente a receita agora!</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} style={{ padding: '20px' }}>
                        <Typography variant={'h5'}>{this.props.recipe ? this.props.recipe.name : ''}</Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default RecipePage