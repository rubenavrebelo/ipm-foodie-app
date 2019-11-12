import * as React from 'react';
import { createStyles, WithStyles, withStyles, AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import Login from './login-modal';
import { User } from '../dt/user';

const styles = () => createStyles({
    menuButtons: {
        color: 'white',
        marginRight: '30px'
    },
})

interface State {
    username: String,
}

interface Props {
    createUser: (user: User) => void;
}

type PropsWithStyles = Props & WithStyles<typeof styles>

class Navbar extends React.Component<PropsWithStyles, State>{
    constructor(props: PropsWithStyles) {
        super(props)
        this.state = {
            username: ''
        }
    }

    handleLogin = (username: String) => {
        this.setState({
            username
        })
    }


    render = () => {
        const { classes } = this.props;

        return (
            <AppBar style={{ background: 'orange', position: 'relative' }} elevation={0}>
                <Toolbar style={{ padding: '10px' }}>
                    <div style={{ right: '20px', position: 'absolute' }}>
                        {this.state.username === '' ? <Login handleCreateUser={this.props.createUser} handleLogin={this.handleLogin} /> :
                            <Typography>{this.state.username}</Typography>}
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Navbar)