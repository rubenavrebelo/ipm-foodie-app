import * as React from 'react';
import { Dialog, DialogTitle, TextField, DialogContent, Button, DialogContentText, createStyles, withStyles, WithStyles, Checkbox, FormGroup, FormControlLabel, Typography, Grid, DialogActions } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import { User } from '../dt/user';

const styles = () => createStyles({
    usernameTexfield: {
        marginBottom: '30px',
        width: '80%'
    },
    passwordTextfield: {
        marginBottom: '15px',
        width: '80%'
    },
    dialogContent: { width: '400px', margin: '0 auto' },
    signUp: { marginRight: '50px' },
    login: { width: '150px' },
    forgot: { display: 'block', float: 'left', marginTop: '10px' }
})

export interface State {
    dialogOpen: boolean;
    username: String;
}

export interface Props {
    handleLogin: (username: String) => void;
    handleCreateUser: (user: User) => void;
}

type PropsWithStyles = WithStyles<typeof styles>

class CreateRecipe extends React.Component<PropsWithStyles, State>{
    constructor(props: PropsWithStyles) {
        super(props)
        this.state = {
            dialogOpen: true,
            username: ''
        }
    }

    handleDialog = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            dialogOpen: !this.state.dialogOpen
        })
    }

    render = () => {
        const { classes } = this.props;

        return (
            <div>
                <Button style={{ marginRight: '20px' }} onClick={this.handleDialog}>
                    <AddIcon /><Typography>Adicionar</Typography>
                </Button>
                <Dialog open={this.state.dialogOpen} onClose={this.handleDialog} fullWidth>
                    <DialogTitle>Criar Receita </DialogTitle>
                    <DialogContent>
                        <Grid
                            container
                            direction="row">
                            <Grid item xs={6}>
                                <div style={{ width: '250px', height: '250px', backgroundColor: 'grey' }} />
                            </Grid>
                            <Grid container xs={6} direction={'column'}>
                                <Grid item>
                                    <TextField label={"Nome Receita"} />
                                </Grid>
                                Dificuldade
                            <Grid item style={{ display: 'flex', alignItems: 'flex-end' }}><TextField label={'Tempo Médio'} /> minutos</Grid>
                                <Grid item>
                                    <TextField multiline={true} label={'Descrição'} fullWidth placeholder={'Escreva uma pequena descrição sobre a sua receita!'} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <DialogActions><Button>Next</Button></DialogActions>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(CreateRecipe)