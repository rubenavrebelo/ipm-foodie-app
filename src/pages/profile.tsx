import * as React from 'react';
import CookingPost from '../components/feed-post';
import { Typography, Avatar, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import { RecipesObject, Recipe, Recipes } from '../dt/recipes';
import { User } from '../dt/user';
import { RouteComponentProps, Redirect } from '@reach/router';
import * as _ from 'lodash';
import { navigate } from '@reach/router';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import DeleteIcon from '@material-ui/icons/Delete'
import deleteFrog from '../static/delete_frog.png'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

export interface Props {
    user: User
    deletePosts: (recipes: Recipes) => void;
    addToFavorites: (id: number) => void;
    isFavorited: (recipe: Recipe) => boolean;
    selectRecipe: (recipe: Recipe) => void;
    getOwner: (username: string) => User;
}

export interface State {
    toDelete: number[],
    deleteMode: Boolean;
    confirmDelete: boolean;
}

class ProfilePage extends React.Component<Props & RouteComponentProps, State> {

    constructor(props: Props & RouteComponentProps) {
        super(props)
        this.state = {
            toDelete: [],
            deleteMode: false,
            confirmDelete: false
        }
    }

    generatePosts = () => {
        return Object.keys(this.props.user.recipes).map((recipeName, i) =>
            <CookingPost recipe={this.props.user.recipes[parseInt(recipeName)]} id={parseInt(recipeName)} deleteMode={this.state.deleteMode} loggedIn={true} addToFavorite={this.props.addToFavorites}
                selectForDelete={this.addToDelete} favorited={this.props.isFavorited(this.props.user.recipes[parseInt(recipeName)])} selectRecipe={this.props.selectRecipe}
                getOwner={this.props.getOwner} />)
    }

    handleDeleteMode = (event: React.MouseEvent) => {
        this.setState({
            deleteMode: true
        });
    }

    addToDelete = (id: number) => {
        const { toDelete } = this.state;
        if (toDelete.includes(id)) {
            const arg = toDelete;
            arg.splice(toDelete.indexOf(id), 1)
            this.setState({
                toDelete: arg
            })
        } else {
            this.setState({
                toDelete: toDelete.concat(id)
            })
        }
    }

    confirmDelete = (event: React.MouseEvent) => {
        this.setState({
            confirmDelete: !this.state.confirmDelete
        })
    }

    doDelete = () => {
        console.log(this.state.toDelete)
        this.props.deletePosts(_.omit(this.props.user.recipes, this.state.toDelete));
        this.setState({
            toDelete: [],
            deleteMode: false,
            confirmDelete: false
        })
    }

    cancelDelete = (event: React.MouseEvent) => {
        this.setState({
            toDelete: [],
            deleteMode: false,
            confirmDelete: false
        })
    }

    handleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        navigate('/')
    }

    render = () => {
        return (
            this.props.user.username === '' ? <Redirect to={'/'} noThrow /> :
                <div>
                    <div>
                    <Button style={{ marginTop:'20px'}} onClick={this.handleButton}><ChevronLeftIcon />Voltar</Button>
                        <Grid container alignItems="center" style={{ paddingRight: '50px', paddingLeft: '80px', paddingTop: '30px', paddingBottom: '30px' }}>
                            <Grid item style={{ width: '200px' }}>
                                <Avatar src={'https://cdn1-www.dogtime.com/assets/uploads/2015/10/cook-for-your-pets-day.jpg'} style={{ width: '200px', height: '200px' }}>R</Avatar>
                                <Typography style={{ textAlign: 'center', display: 'block', marginTop: '5px' }}>{this.props.user.username}</Typography>
                            </Grid>
                            <Grid item style={{ marginLeft: '50px' }}>
                                <Typography style={{ display: 'inline-block', marginRight: '20px' }}>{Object.keys(this.props.user.recipes).length} Recipes</Typography>
                                <Typography style={{ display: 'inline-block', marginRight: '20px' }}>{this.props.user.following} Following</Typography>
                                <Typography style={{ display: 'inline-block', marginRight: '20px' }}>{this.props.user.followers} Followers</Typography>
                                <Typography>{this.props.user.description}</Typography>
                            </Grid>
                        </Grid>
                        <div style={{ width: '95%', height: '2px', backgroundColor: 'lightgrey', margin: '0 auto' }} />
                        {!this.state.deleteMode ?
                            <Button style={{ float: 'right', marginRight: '40px', marginTop: '10px' }} onClick={this.handleDeleteMode}>
                                <DeleteIcon /> Apagar Posts
                        </Button>
                            :
                            <div>
                                <Button style={{ float: 'right', marginRight: '40px', marginTop: '10px' }}
                                    disabled={this.state.toDelete.length === 0}
                                    color={'secondary'}
                                    onClick={this.confirmDelete}>
                                    <DeleteForeverIcon /> Confirmar apagar
                             </Button>
                                <Button onClick={this.cancelDelete} style={{ float: 'right', marginRight: '20px', marginTop: '10px' }}>Cancelar</Button>
                            </div>}
                        <div style={{ padding: '15px', paddingLeft: '20px' }}>
                            {this.generatePosts()}
                        </div>
                    </div>
                    <Dialog open={this.state.confirmDelete}>
                        <DialogTitle>Apagar Receitas</DialogTitle>
                        <DialogContent>
                            <Typography style={{ marginBottom: '60px' }}>Tem a certeza que deseja apagar as receitas que escolheu? Esta ação é irreversível.</Typography>
                            <img src={deleteFrog} style={{ width: '40%', position: 'absolute', left: 0, bottom: 0, opacity: 0.5, }} />
                        </DialogContent>
                        <DialogActions style={{ position: 'relative' }}><Button onClick={this.cancelDelete}>Não</Button><Button color={'secondary'} onClick={this.doDelete}>Sim</Button></DialogActions>
                    </Dialog>
                </div >
        )
    }
}

export default ProfilePage