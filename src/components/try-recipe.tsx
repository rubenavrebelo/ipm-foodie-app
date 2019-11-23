import * as React from 'react'
import { Dialog, DialogContent, Typography, Grid, IconButton, Button } from '@material-ui/core'
import { Recipe } from '../dt/recipes'
import ArrowBackIcon from '@material-ui/icons/ChevronLeft'
import ArrowForwardIcon from '@material-ui/icons/ChevronRight'
import CheckIcon from '@material-ui/icons/Check'

export interface Props {
    recipe: Recipe;
}

export interface State {
    currentStep: number;
    openDialog: boolean;
    openDialogEnding: boolean;
}

class TryRecipe extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            currentStep: 0,
            openDialog: false,
            openDialogEnding: false
        }
    }

    handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            currentStep: this.state.currentStep + 1
        })
    }

    handlePrevious = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            currentStep: this.state.currentStep - 1
        })
    }


    handleEnd = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            openDialog: false,
            openDialogEnding: true,
            currentStep: 0,

        })
    }

    handleDialog = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            openDialog: !this.state.openDialog,
        })
    }

    render = () => {
        return (
            <div>
                <Button onClick={this.handleDialog}><Typography variant={'h5'}>Experimente a receita agora!</Typography></Button>
                <Dialog open={this.state.openDialogEnding}>
                    <DialogContent>
                        <Typography>Parabéns! Já experimentou a receita. Por favor classifique</Typography>
                    </DialogContent>
                </Dialog>
                <Dialog open={this.state.openDialog} fullWidth maxWidth={'md'} PaperProps={{ style: { height: '90%', } }} onClose={this.handleDialog}>
                    {this.state.currentStep !== 0 && <IconButton style={{ position: 'absolute', left: '10px', top: '50%', border: 'grey 1px solid' }} onClick={this.handlePrevious}>
                        <ArrowBackIcon />
                    </IconButton>}
                    <Grid container style={{ width: '100%', height: '100%' }}>
                        <Grid item xs={6} style={{
                            width: '50%', backgroundImage: `url(${this.props.recipe.steps[this.state.currentStep].image})`,
                            backgroundSize: 'cover', backgroundPosition: 'center center'
                        }}>
                        </Grid>
                        <Grid item xs={6} style={{ padding: 20, margin: 'auto' }}>
                            <Typography variant={'h5'}>{this.props.recipe.name} - Passo {this.state.currentStep + 1} de {this.props.recipe.steps.length}</Typography>
                            <Typography style={{ marginTop: '20px' }}>{this.props.recipe.steps[this.state.currentStep].step}</Typography>
                        </Grid>
                    </Grid>
                    {this.state.currentStep !== this.props.recipe.steps.length - 1 ? <IconButton style={{ position: 'absolute', right: '10px', top: '50%', border: 'grey 1px solid' }}
                        onClick={this.handleNext}><ArrowForwardIcon /></IconButton> : <IconButton style={{
                            position: 'absolute', right: '10px', top: '50%', border: 'seagreen 1px solid',
                            background: 'limegreen', color: 'white'
                        }}
                            onClick={this.handleEnd}><CheckIcon /></IconButton>}
                </Dialog >
            </div>
        )
    }
}

export default TryRecipe