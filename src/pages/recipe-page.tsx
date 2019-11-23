import * as React from 'react';
import { Typography, Grid, CardHeader, CardContent, Card, Button, Avatar } from '@material-ui/core';
import { Recipe } from '../dt/recipes';
import { User } from '../dt/user';
import { RouteComponentProps, Redirect } from '@reach/router';
import PlayCircleIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import { navigate } from '@reach/router';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExtensionIcon from '@material-ui/icons/Extension';
import StarIcon from '@material-ui/icons/Star';
import TimerIcon from '@material-ui/icons/Timer';
import TryRecipe from '../components/try-recipe';


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

    renderSteps = () => {
        if (this.props.recipe) {
            return this.props.recipe.steps.map((step, i) =>
                <div>
                    <Typography style={{ marginBottom: '10px' }}> {i + 1}. {step.step} </Typography>
                </div>
            )
        } else {
            return <div />
        }
    }



    handleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        navigate('/')
    }

    render = () => {
        return (
            !this.props.recipe ? <Redirect from={'/recipe'} to={'/'} noThrow /> : <div>
                <Button onClick={this.handleButton}><ChevronLeftIcon />Voltar</Button>
                <Grid container>
                    <Grid item xs={6} style={{ padding: '30px' }}>
                        <div>
                            <img src={this.props.recipe ? this.props.recipe.image : ''} style={{ width: '100%' }} />
                            <Card>
                                <CardHeader title={this.props.recipe ? this.props.recipe.name : ''} />
                                <CardContent>
                                    <Typography>{this.props.recipe ? this.props.recipe.creator : ''}</Typography>
                                    <Typography style={{ display: 'flex' }}><ExtensionIcon style={{ marginRight: '10px' }} /> Dificuldade: {this.props.recipe ? this.props.recipe.difficulty : ''}</Typography>
                                    <Typography style={{ display: 'flex' }}><StarIcon style={{ marginRight: '10px' }} />Classificação: {this.props.recipe ? this.props.recipe.classification : ''}</Typography>
                                    <Typography style={{ display: 'flex' }}><TimerIcon style={{ marginRight: '10px' }} />Tempo Médio: {this.props.recipe ? this.props.recipe.medTime : ''} minutos</Typography>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent style={{ textAlign: 'center' }}>
                                    <TryRecipe recipe={this.props.recipe} />
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xs={6} style={{ padding: '20px' }}>
                        <Typography variant={'h5'}>{this.props.recipe ? this.props.recipe.name : ''}</Typography>
                        <Typography style={{ marginTop: '15px', marginBottom: '15px' }}>{this.props.recipe ? this.props.recipe.desc : ''}</Typography>
                        <Typography variant={'h6'}>Ingredientes</Typography>
                        {this.renderIngredients()}
                        <Typography variant={'h5'} style={{ marginTop: '10px', marginBottom: '10px' }}>Passos a seguir:</Typography>
                        {this.renderSteps()}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default RecipePage