import * as React from 'react';
import { createStyles, WithStyles, withStyles, AppBar, Toolbar, Button, Typography, MenuItem, Menu } from '@material-ui/core';
import Login from './login-modal';

const styles = () => createStyles({
})


type PropsWithStyles = WithStyles<typeof styles>

class Navbar extends React.Component<PropsWithStyles>{
    constructor(props: PropsWithStyles) {
        super(props)
    }


    render = () => {
        const { classes } = this.props;

        return (
            <div>
                Hi, Maria
                <Menu open={false}>
                    <MenuItem>Ver Perfil</MenuItem>
                    <MenuItem>Criar Receita</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
            </div>
        )
    }
}

export default withStyles(styles)(Navbar)