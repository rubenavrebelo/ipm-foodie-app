import * as React from 'react';
import { createStyles, WithStyles, withStyles, AppBar, Toolbar, Typography, ButtonBase, Grid } from '@material-ui/core';
import Login from './login-modal';
import { User } from '../dt/user';
import FavoriteIconBorder from '@material-ui/icons/FavoriteBorder';
import AddIcon from '@material-ui/icons/Add';
import UserDropdown from './user-dropdown';
import { navigate } from '@reach/router';

const styles = () => createStyles({
    menuButtons: {
        color: 'white',
        marginRight: '30px'
    },
})

interface State {
    username: String,
    currentUser: User | null
}

interface Props {
    createUser: (user: User) => void;
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

    handleLogin = (username: String) => {
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
                    <div style={{ right: '20px', position: 'absolute' }}>
                        {(this.state.username !== '' && this.state.currentUser) ?
                            <Grid container alignItems="center">
                                <Grid item>
                                    <ButtonBase style={{ marginRight: '20px' }}><AddIcon /><Typography>Adicionar</Typography></ButtonBase>
                                    <ButtonBase style={{ marginRight: '20px' }} onClick={this.goToFavorites}><FavoriteIconBorder /> <Typography>Favoritos</Typography></ButtonBase>
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