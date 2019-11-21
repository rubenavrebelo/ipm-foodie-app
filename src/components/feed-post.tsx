import * as React from 'react';
import { createStyles, WithStyles, withStyles, Typography, IconButton, Snackbar, Checkbox, Avatar, Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CloseIcon from '@material-ui/icons/Close';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { Recipe } from '../dt/recipes';
import { navigate } from '@reach/router';
import { User } from '../dt/user';
import StarIcon from '@material-ui/icons/Star';
import frogFavorite from '../static/frog_favorite.png'

const styles = () => createStyles({
})

interface State {
    snackBarOpen: boolean;
    toDelete: Boolean;
    owner?: User;
}

interface Props {
    recipe: Recipe;
    id: number;
    deleteMode: Boolean;
    selectForDelete?: (id: number) => void;
    loggedIn: boolean;
    addToFavorite: (id: number) => void;
    favorited: boolean;
    selectRecipe: (recipe: Recipe) => void;
    getOwner: (usenrame: string) => User;
}

type PropsWithStyles = Props & WithStyles<typeof styles>

class CookingPost extends React.Component<PropsWithStyles, State>{
    constructor(props: PropsWithStyles) {
        super(props)
        this.state = {
            snackBarOpen: false,
            toDelete: false,
            owner: undefined
        }
    }

    componentDidMount = () => {
        this.setState({
            owner: this.props.getOwner(this.props.recipe.creator)
        })
    }

    onFavoriting = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            snackBarOpen: true
        });
        this.props.addToFavorite(this.props.id);
    }

    handleCloseSnackbar = (event: React.SyntheticEvent | React.MouseEvent) => {
        this.setState({
            snackBarOpen: false
        });
    }

    handleCheckbox = (event: React.MouseEvent) => {
        this.setState({
            toDelete: !this.state.toDelete
        })

        if (this.props.selectForDelete) {
            this.props.selectForDelete(this.props.id)
        }
    }

    onClick = (event: React.MouseEvent) => {
        this.props.selectRecipe(this.props.recipe)
        navigate('/')
    }

    render = () => {
        return (
            <Grid item style={{ height: '20%', display: 'inline-block', marginLeft: '1%', marginRight: '1%', marginTop: '15px' }}>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={this.state.snackBarOpen}
                    autoHideDuration={300000}
                    onClose={this.handleCloseSnackbar}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<div> <img src={frogFavorite} style={{ width: '15%', position: 'absolute', left: 0, bottom: 0 }} /><Typography style={{ width: '300px', marginLeft: '15%' }}>{this.props.favorited ? 'A receita foi adicionada aos favoritos!' :
                        'A receita foi removida dos favoritos.'} </Typography></div>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="close"
                            color="inherit"
                            onClick={this.handleCloseSnackbar}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
                <a onClick={this.onClick} style={{ cursor: 'pointer' }}>
                    <div style={{ width: '250px', height: '250px', background: `url(${this.props.recipe.image}) 50% 50% no-repeat` }} />
                </a>
                <div style={{ width: '250px' }}>
                    <Typography variant={'subtitle2'}>{this.props.recipe.name}</Typography>
                    <Grid container alignItems="center" >
                        {this.state.owner ? this.state.owner.image ? <Avatar style={{ width: '20px', height: '20px', marginRight: '5px' }} src={this.state.owner.image} /> :
                            <Avatar style={{ width: '20px', height: '20px', marginRight: '5px' }} /> : <Avatar style={{ width: '20px', height: '20px', marginRight: '5px' }} />}
                        <Typography variant={'caption'}>{this.props.recipe.creator}</Typography>
                        <Grid item style={{ marginLeft: 'auto', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <Typography variant={'caption'}>{this.props.recipe.classification}</Typography>
                            <StarIcon style={{ width: '20px', color: 'gold' }} />
                        </Grid>
                    </Grid>
                </div>
                {!this.props.loggedIn ? <div /> : <div>{!this.props.deleteMode ? <IconButton onClick={this.onFavoriting}
                    style={{ float: 'right', right: '5px', bottom: '90px', zIndex: 1 }}>
                    {!this.props.favorited ? <FontAwesomeIcon style={{ fontSize: '20px', color: 'white' }} icon={faHeart} />
                        : <FontAwesomeIcon style={{ fontSize: '20px', color: 'red' }} icon={faHeartSolid} />}
                </IconButton> : <Checkbox style={{ float: 'right', right: '0px', top: '-310px', zIndex: 1 }}
                    onClick={this.handleCheckbox} />}</div>
                }

            </Grid>
        )
    }
}

export default withStyles(styles)(CookingPost)