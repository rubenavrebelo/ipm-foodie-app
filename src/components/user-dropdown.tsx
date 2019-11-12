import * as React from 'react';
import { createStyles, WithStyles, withStyles, Typography, MenuItem, Avatar, Grid, ButtonBase, Popper, Grow, Paper, ClickAwayListener, MenuList } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { User } from '../dt/user';
import { navigate } from '@reach/router';

const styles = () => createStyles({
})

interface State {
    anchorEl: HTMLElement | null
}

interface Props {
    currentUser: User
}

type PropsWithStyles = Props & WithStyles<typeof styles>

class UserDropdown extends React.Component<PropsWithStyles, State>{
    constructor(props: PropsWithStyles) {
        super(props)

        this.state = {
            anchorEl: null,
        }
    }

    handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            anchorEl:
                event.currentTarget
        })
    }

    handleMenuClose = (event: React.MouseEvent<EventTarget>) => {
        this.setState({
            anchorEl: null
        })
    }

    navigateTo = (event: React.MouseEvent) => {
        navigate('/profile')
        this.setState({
            anchorEl: null
        })
    }

    render = () => {
        const { classes } = this.props;

        return (
            <Grid container alignItems="center">
                <ButtonBase onClick={this.handleMenu}>
                    <Avatar style={{ marginRight: '10px' }}>R</Avatar><Typography>Hi, {this.props.currentUser.name}</Typography><ArrowDropDownIcon />
                </ButtonBase>
                <Popper open={Boolean(this.state.anchorEl)} anchorEl={this.state.anchorEl} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={this.handleMenuClose}>
                                    <MenuList autoFocusItem={Boolean(this.state.anchorEl)} id="menu-list-grow">
                                        <MenuItem onClick={this.navigateTo}>Perfil</MenuItem>
                                        <MenuItem>Criar receita</MenuItem>
                                        <MenuItem>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>

            </Grid>
        )
    }
}

export default withStyles(styles)(UserDropdown)