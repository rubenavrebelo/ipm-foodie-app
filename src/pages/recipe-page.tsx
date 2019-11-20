import * as React from 'react';
import { Typography, Grid, CardHeader, CardContent, Card } from '@material-ui/core';
import { Recipe } from '../dt/recipes';
import { User } from '../dt/user';
import { RouteComponentProps } from '@reach/router';
import PlayCircleIcon from '@material-ui/icons/PlayCircleFilledOutlined';

export interface Props {
    user: User,
    recipe?: Recipe
}

class RecipePage extends React.Component<Props & RouteComponentProps> {

    constructor(props: Props & RouteComponentProps) {
        super(props)
    }

    renderIngredients = () => {
        if (this.props.recipe) {
            return this.props.recipe.ingredients.map((ing) =>
                <Typography>{ing.quantity} de {ing.name}</Typography>
            )
        } else {
            return <div />
        }
    }
    render = () => {
        return (
            <div>
                <Grid container>
                    <Grid item xs={6} style={{ padding: '30px' }}>
                        <div>
                            <img src={this.props.recipe ? this.props.recipe.image : ''} style={{ width: '100%' }} />
                            <Card>
                                <CardHeader title={this.props.recipe ? this.props.recipe.name : ''} />
                                <CardContent>
                                    <Typography>Criada por: {this.props.recipe ? this.props.recipe.creator : ''}</Typography>
                                    <Typography>Dificuldade: {this.props.recipe ? this.props.recipe.difficulty : ''}</Typography>
                                    <Typography>Classificação: {this.props.recipe ? this.props.recipe.classification : ''}</Typography>
                                    <Typography>Tempo Médio: {this.props.recipe ? this.props.recipe.medTime : ''} minutos</Typography>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent style={{ textAlign: 'center' }}>
                                    <Typography variant={'h5'}>Experimente a receita agora!</Typography><PlayCircleIcon />
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xs={6} style={{ padding: '20px' }}>
                        <Typography variant={'h5'}>{this.props.recipe ? this.props.recipe.name : ''}</Typography>
                        <Typography variant={'h6'}>Ingredientes</Typography>
                        {this.renderIngredients()}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default RecipePage