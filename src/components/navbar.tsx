import * as React from 'react';
import { createStyles, WithStyles, withStyles, AppBar, Toolbar, Typography, ButtonBase, Grid, Button } from '@material-ui/core';
import Login from './login-modal';
import { User } from '../dt/user';
import FavoriteIconBorder from '@material-ui/icons/FavoriteBorder';
import AddIcon from '@material-ui/icons/Add';
import UserDropdown from './user-dropdown';
import { navigate } from '@reach/router';
import CreateRecipe from './create-recipe';
import { Recipe } from '../dt/recipes';
import logo from '../static/logo.png';

const styles = () => createStyles({
    menuButtons: {
        color: 'white',
        marginRight: '30px'
    },
})

interface State {
    username: string,
    currentUser: User | null
}

interface Props {
    createUser: (user: User) => void;
    addRecipeToUser: (recipe: Recipe) => void;
}

type PropsWithStyles = Props & WithStyles<typeof styles>

class Navbar extends React.Component<PropsWithStyles, State>{
    constructor(props: PropsWithStyles) {
        super(props)
        this.state = {
            username: '',
            currentUser: null
        }
    }

    handleLogin = (username: string) => {
        this.setState({
            username
        })
    }

    handleCreateAccount = (user: User) => {
        this.setState({
            currentUser: user
        });
        this.props.createUser(user)
    }

    goToFavorites = (event: React.MouseEvent) => {
        navigate('/favorites')
    }

    render = () => {
        const { classes } = this.props;

        return (
            <AppBar style={{ background: 'orange', position: 'relative' }} elevation={0}>
                <Toolbar style={{ padding: '10px' }}>
                    <img src={logo} style={{ width: '15%' }} />
                    <div style={{ right: '20px', position: 'absolute' }}>
                        {(this.state.username !== '' && this.state.currentUser) ?
                            <Grid container alignItems="center">
                                <Grid item style={{ display: 'contents' }}>
                                    <CreateRecipe username={this.state.username} addRecipeToUser={this.props.addRecipeToUser} />
                                    <Button style={{ marginRight: '20px', color: 'white' }} onClick={this.goToFavorites}>
                                        <FavoriteIconBorder /> <Typography>Favoritos</Typography>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <UserDropdown currentUser={this.state.currentUser} />
                                </Grid>
                            </Grid> : <Login handleCreateUser={this.handleCreateAccount} handleLogin={this.handleLogin} />}
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Navbar)