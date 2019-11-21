import * as React from 'react';
import {
    Dialog, DialogTitle, TextField, DialogContent, Button, DialogContentText, createStyles, withStyles, WithStyles,
    Typography, Grid, DialogActions, Select, IconButton, MenuItem, List, ListItem
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import { User } from '../dt/user';
import DeleteIcon from '@material-ui/icons/Delete';
import { Step, Ingredient } from '../dt/recipes';
import { DragDropContext, Droppable, DropResult, Draggable } from 'react-beautiful-dnd';

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
    currentIngredients: Ingredient[];
    currentMeasure: string;
    currentQuantity: number;
    currentIngredient: string;
    errorQuantity: boolean;
    errorIngredient: boolean;
    currentStep: number;
    currentName: string;
    currentMedTime: number;
    currentDesc: string;
    errorName: boolean;
    errorDesc: boolean;
    errorMedTime: boolean;
    currentSteps: Step[];
}

export interface Props {
    handleLogin: (username: String) => void;
    handleCreateUser: (user: User) => void;
}

const reorder = (list: Step[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

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
            currentQuantity: 0,
            errorQuantity: false,
            errorIngredient: false,
            currentStep: 3,
            currentName: '',
            currentMedTime: 0,
            currentDesc: '',
            errorName: false,
            errorDesc: false,
            errorMedTime: false,
            currentSteps: []
        }
        this.onDragEnd = this.onDragEnd.bind(this)
    }

    handleDialog = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            dialogOpen: !this.state.dialogOpen,
            currentIngredients: [],
            currentIngredient: '',
            currentMeasure: 'g',
            currentQuantity: 0,
            errorQuantity: false,
            errorIngredient: false,
            currentStep: 1,
            currentName: '',
            currentMedTime: 0,
            currentDesc: '',
            errorName: false,
            errorDesc: false,
            errorMedTime: false
        })
    }

    handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (this.state.currentStep === 1) {
            if (this.state.currentDesc !== '' && this.state.currentMedTime > 0 && this.state.currentName !== '') {
                this.setState({
                    currentStep: this.state.currentStep + 1
                })
            } else {
                this.setState({
                    errorName: this.state.currentName === '',
                    errorMedTime: this.state.currentMedTime <= 0,
                    errorDesc: this.state.currentDesc === ''
                })
            }
        } else {
            this.setState({
                currentStep: this.state.currentStep + 1
            })
        }

    }

    handlePrevious = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            currentStep: this.state.currentStep - 1
        })
    }

    handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            currentName: event.target.value,
            errorName: event.target.value === ''
        })
    }

    handleDesc = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            currentDesc: event.target.value,
            errorDesc: event.target.value === ''
        })
    }

    handleMedTime = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            currentMedTime: parseInt(event.target.value),
            errorMedTime: parseInt(event.target.value) <= 0
        })
    }

    handleDelete = (pos: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
        const newIngredients = this.state.currentIngredients;
        newIngredients.splice(pos, 1)

        this.setState({
            currentIngredients: newIngredients
        })
    }

    handleDeleteStep = (pos: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
        const newSteps = this.state.currentSteps;
        newSteps.splice(pos, 1)

        this.setState({
            currentSteps: newSteps
        })
    }

    onDragEnd(result: DropResult) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            this.state.currentSteps,
            result.source.index,
            result.destination.index
        )

        this.setState({
            currentSteps: items
        });
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
                            <TextField label={"Nome Receita"} onChange={this.handleName} style={{ marginBottom: '15px' }}
                                error={this.state.errorName} helperText={this.state.errorName ? 'O nome não pode estar vazio' : ''}
                                value={this.state.currentName} />
                        </Grid>
                        Dificuldade
                        <Grid item style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '15px' }}>
                            <TextField label={'Tempo Médio'} type={'number'} onChange={this.handleMedTime} inputProps={{ min: 1 }} style={{ marginRight: '5px' }}
                                error={this.state.errorMedTime} value={this.state.currentMedTime === 0 ? '' : this.state.currentMedTime} helperText={this.state.errorMedTime ? 'O valor deve ser superior a 0.' : ''} /> minutos
                        </Grid>
                        <Grid item>
                            <TextField multiline={true} label={'Descrição'} fullWidth placeholder={'Escreva uma pequena descrição sobre a sua receita!'}
                                onChange={this.handleDesc} value={this.state.currentDesc}
                                error={this.state.errorDesc} helperText={this.state.errorDesc ? 'Por favor coloque uma descrição.' : ''} />
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
                                style={{ width: '150px', marginRight: '10px' }} type={'number'}
                                disabled={this.state.currentMeasure === 'qb'} value={this.state.currentQuantity === 0 ? '' : this.state.currentQuantity}
                                helperText={this.state.errorQuantity ? 'Quantidade tem de ser maior que 0.' : ''}
                                error={this.state.errorQuantity} inputProps={{ min: 0 }}
                            />
                            <Select onChange={this.handleMeasure} value={this.state.currentMeasure}>
                                <MenuItem value={'mg'}>mg</MenuItem>
                                <MenuItem value={'g'}>g</MenuItem>
                                <MenuItem value={'mL'}>mL</MenuItem>
                                <MenuItem value={'dL'}>dL</MenuItem>
                                <MenuItem value={'L'}>L</MenuItem>
                                <MenuItem value={'unit'}>Unidade</MenuItem>
                                <MenuItem value={'qb'}>Qb</MenuItem>
                                <MenuItem value={'cc'}>Colher(es) de chá</MenuItem>
                                <MenuItem value={'ccafe'}>Colher(es) de café</MenuItem>
                                <MenuItem value={'cs'}>Colher(es) de sopa</MenuItem>
                            </Select><Typography style={{ marginRight: '5px', marginLeft: '5px' }}>de</Typography>
                            <TextField label={'Ingrediente'} onKeyDown={this.addIngredient} onChange={this.handleIngredient} helperText={this.state.errorIngredient ? 'O nome do ingrediente não foi inserido.' : ''}
                                value={this.state.currentIngredient} error={this.state.errorIngredient} />
                        </div>
                        <Typography variant={'caption'}>Pressione Enter para inserir o Ingrediente na receita.</Typography>

                    </div>
                )
            case 3:
                return (
                    <div>
                        <DragDropContext onDragEnd={this.onDragEnd}>
                            <Droppable droppableId="droppable">
                                {(provided, snapshot) => (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        {this.renderSteps()}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                        <TextField helperText={'Carregue enter para inserir o novo passo.'} onKeyDown={this.addStep} />
                    </div>
                )
        }
    }

    addIngredient = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (this.state.currentIngredient !== '' && (this.state.currentQuantity > 0 || this.state.currentMeasure === 'qb')) {
                const newIngredients = this.state.currentIngredients;
                newIngredients.push({
                    name: this.state.currentIngredient,
                    quantity: this.state.currentQuantity,
                    measure: this.state.currentMeasure
                })

                this.setState({
                    currentIngredients: newIngredients,
                    currentIngredient: '',
                    currentMeasure: 'g',
                    currentQuantity: 0
                })
            } else {
                this.setState({
                    errorQuantity: this.state.currentQuantity === 0 && this.state.currentMeasure !== 'qb',
                    errorIngredient: this.state.currentIngredient === ''
                })
            }
        }
    }

    renderIngredients = () => {
        if (this.state.currentIngredients.length > 0) {
            return this.state.currentIngredients.map((ing, i) => <ListItem style={{ borderBottom: 'lightgrey 1px solid' }}>
                <Typography>{this.state.currentIngredients[i].measure === 'qb' ? '' : this.state.currentIngredients[i].quantity}{this.state.currentIngredients[i].measure}</Typography>
                <Typography style={{ marginLeft: '5px', marginRight: '5px' }}> de </Typography>
                <Typography>{this.state.currentIngredients[i].name}</Typography>
                <IconButton style={{ position: 'absolute', right: 0 }} onClick={this.handleDelete(i)}><DeleteIcon /></IconButton>
            </ListItem>)
        } else {
            return <div />
        }
    }

    renderSteps = () => {
        if (this.state.currentSteps.length > 0) {
            return this.state.currentSteps.map((step, i) =>
                <Draggable key={i} draggableId={'draggable-' + i} index={i}>
                    {(provided, snapshot) => (<div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <ListItem style={{ borderBottom: 'lightgrey 1px solid' }}>
                            <Typography>{i}. {this.state.currentSteps[i].step}</Typography>
                            <IconButton style={{ position: 'absolute', right: 0 }} onClick={this.handleDeleteStep(i)}><DeleteIcon /></IconButton>
                        </ListItem>
                    </div>)}
                </Draggable>)

        } else {
            return <div />
        }
    }

    handleMeasure = (event: React.ChangeEvent<{ value: unknown }>) => {
        this.setState({
            currentMeasure: event.target.value as string
        })
    }

    handleQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            currentQuantity: parseInt(event.target.value),
            errorQuantity: event.target.value === '' || parseInt(event.target.value) === 0
        })
    }

    handleIngredient = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            currentIngredient: event.target.value,
            errorIngredient: event.target.value === ''
        })
    }

    addStep = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const newSteps = this.state.currentSteps
            newSteps.push({
                step: 'step'
            })
            this.setState({
                currentSteps: newSteps
            })
        }
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
                    <DialogTitle>Criar Receita - {this.state.currentStep}/3 {this.state.currentStep === 1 ? 'Informações Receita' : this.state.currentStep === 2 ?
                        'Ingredientes' : 'Passos'} </DialogTitle>
                    <DialogContent>
                        {this.getStep(this.state.currentStep)}
                        <DialogActions>
                            {this.state.currentStep > 1 && <Button onClick={this.handlePrevious}>Previous</Button>}
                            <Button onClick={this.handleNext} disabled={this.state.errorName || this.state.errorDesc || this.state.errorMedTime || (this.state.currentStep === 2 && this.state.currentIngredients.length === 0)}>Next</Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(CreateRecipe)