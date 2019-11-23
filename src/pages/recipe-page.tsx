import * as React from 'react';
import { Typography, Grid, CardHeader, CardContent, Card, Button, Avatar } from '@material-ui/core';
import { Recipe, RecipesObject } from '../dt/recipes';
import { User } from '../dt/user';
import { RouteComponentProps, Redirect } from '@reach/router';
import PlayCircleIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import { navigate } from '@reach/router';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExtensionIcon from '@material-ui/icons/Extension';
import StarIcon from '@material-ui/icons/Star';
import TimerIcon from '@material-ui/icons/Timer';
import FavoriteIcon from '@material-ui/icons/Favorite'
import TryRecipe from '../components/try-recipe';
import Comments from '../components/comments';


export interface Props {
    user: User,
    recipe?: Recipe,
    goBackPath: string,
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
        navigate(this.props.goBackPath)
    }

    addToFavorites = () => {
        if(this.props.recipe!=null){
        if (this.props.user.favorites.includes(this.props.recipe)) {
            const newUser = this.props.user;
            newUser.favorites.splice(newUser.favorites.indexOf(this.props.recipe), 1)
            this.setState({
                user: newUser
            })
        } else {
            const newUser = this.props.user;
            newUser.favorites = newUser.favorites.concat(this.props.recipe)
            this.setState({
                user: newUser
            })
        }
    }
    }

    addComment = () => {

    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render = () => {
        return (
            !this.props.recipe ? <Redirect from={'/recipe'} to={'/'} noThrow /> : <div>
                {this.componentDidMount()}
                <Button style={{ marginTop: '20px' }} onClick={this.handleButton}><ChevronLeftIcon />Voltar</Button>
                <Grid container>
                    <Grid item xs={6} style={{ padding: '30px' }}>
                        <div>
                            <img src={this.props.recipe ? this.props.recipe.image : ''} style={{ width: '100%' }} />
                            <Card>
                                <CardHeader title={this.props.recipe ? this.props.recipe.name : ''} />
                                {(this.props.user.name !== '')? 
                                <Button onClick={this.addToFavorites}>< FavoriteIcon /></Button>
                                : null }
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
                        <Typography variant={'h6'} style={{ marginTop: '20px', marginBottom: '10px' }}>Comentários:</Typography>
                        <Comments user={this.props.user} comments={this.props.recipe.comments} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default RecipePage