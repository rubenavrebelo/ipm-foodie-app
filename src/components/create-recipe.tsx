import * as React from 'react';
import {
    Dialog, DialogTitle, TextField, DialogContent, Button, DialogContentText, createStyles, withStyles, WithStyles,
    Typography, Grid, DialogActions, Select, IconButton, MenuItem, List, ListItem
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import { User } from '../dt/user';
import DeleteIcon from '@material-ui/icons/Delete';

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
    currentIngredients: string[]
    currentMeasure: string;
    currentQuantity: number;
    currentIngredient: string;
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
            username: '',
            currentIngredients: [],
            currentIngredient: '',
            currentMeasure: 'g',
            currentQuantity: -1
        }
    }

    handleDialog = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            dialogOpen: !this.state.dialogOpen
        })
    }

    getStep = (step: number) => {
        switch (step) {
            case 1:
                return <Grid
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
                </Grid>;
            case 2:
                return (
                    <div>
                        <List>
                            {this.renderIngredients()}

                        </List>
                        <div style={{ display: 'flex', alignItems: 'baseline' }}>
                            <TextField label={'Quantidade'} onChange={this.handleQuantity}
                                style={{ width: '100px', marginRight: '10px' }} type={'number'}
                                disabled={this.state.currentMeasure === 'qb'}
                                error={this.state.currentQuantity === 0} inputProps={{ min: 0 }}
                            />
                            <Select onChange={this.handleMeasure} value={this.state.currentMeasure}>
                                <MenuItem value={'mg'}>mg</MenuItem>
                                <MenuItem value={'g'}>g</MenuItem>
                                <MenuItem value={'mL'}>mL</MenuItem>
                                <MenuItem value={'dL'}>dL</MenuItem>
                                <MenuItem value={'unit'}>Unidade</MenuItem>
                                <MenuItem value={'qb'}>Qb</MenuItem>
                                <MenuItem value={'cc'}>Colher de chá</MenuItem>
                                <MenuItem value={'ccafe'}>Colher(es) de café</MenuItem>
                                <MenuItem value={'qb'}>Colher(es) de sopa</MenuItem>
                            </Select><Typography style={{ marginRight: '5px', marginLeft: '5px' }}>de</Typography>
                            <TextField label={'Ingrediente'} onKeyDown={this.addStep} onChange={this.handleIngredient}
                                value={this.state.currentIngredient} />
                        </div>
                        <Typography variant={'caption'}>Pressione Enter para inserir o Ingrediente na receita.</Typography>

                    </div>
                )

        }
    }

    addStep = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            console.log(this.state.currentMeasure)
            const newIngredients = this.state.currentIngredients;
            const phrase = this.state.currentMeasure === 'qb' ? `${this.state.currentMeasure} de ${this.state.currentIngredient}`
                : `${this.state.currentQuantity} ${this.state.currentMeasure} de ${this.state.currentIngredient}`
            newIngredients.push(phrase)

            this.setState({
                currentIngredients: newIngredients,
                currentIngredient: '',
                currentMeasure: 'g',
                currentQuantity: 0
            })
        }

    }

    renderIngredients = () => {
        return this.state.currentIngredients.map((ing) => <ListItem style={{ borderBottom: 'lightgrey 1px solid' }}>
            <Typography>{ing}</Typography><IconButton style={{ position: 'absolute', right: 0 }}><DeleteIcon /></IconButton>
        </ListItem>)
    }

    handleMeasure = (event: React.ChangeEvent<{ value: unknown }>) => {
        this.setState({
            currentMeasure: event.target.value as string
        })
    }

    handleQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            currentQuantity: parseInt(event.target.value)
        })
    }

    handleIngredient = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            currentIngredient: event.target.value
        })
    }

    render = () => {
        const { classes } = this.props;

        console.log(this.state.currentIngredients)
        return (
            <div>
                <Button style={{ marginRight: '20px' }} onClick={this.handleDialog}>
                    <AddIcon /><Typography>Adicionar</Typography>
                </Button>
                <Dialog open={this.state.dialogOpen} onClose={this.handleDialog} fullWidth>
                    <DialogTitle>Criar Receita </DialogTitle>
                    <DialogContent>
                        {this.getStep(2)}
                        <DialogActions><Button>Next</Button></DialogActions>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(CreateRecipe)