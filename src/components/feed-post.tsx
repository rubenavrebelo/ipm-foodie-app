import * as React from 'react';
import { createStyles, WithStyles, withStyles, AppBar, Toolbar, Button, Typography, IconButton, Snackbar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CloseIcon from '@material-ui/icons/Close';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import PersonIcon from '@material-ui/icons/Person';

const styles = () => createStyles({
})

interface State {
    favorited: boolean;
    snackBarOpen: boolean;
}

interface Props {
    recipeName: String,
    recipeOwner: String,
    img: string
}

type PropsWithStyles = Props & WithStyles<typeof styles>

class CookingPost extends React.Component<PropsWithStyles, State>{
    constructor(props: PropsWithStyles) {
        super(props)
        this.state = {
            favorited: false,
            snackBarOpen: false
        }
    }

    onFavoriting = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            favorited: !this.state.favorited,
            snackBarOpen: true
        });
    }

    handleCloseSnackbar = (event: React.SyntheticEvent | React.MouseEvent) => {
        this.setState({
            snackBarOpen: false
        });
    }

    render = () => {
        const { classes } = this.props;

        return (
            <div style={{ width: '22%', height: '20%', display: 'inline-block', marginLeft: '15px', marginRight: '15px' }}>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={this.state.snackBarOpen}
                    autoHideDuration={3000}
                    onClose={this.handleCloseSnackbar}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<Typography>{this.state.favorited ? 'A receita foi adicionada aos favoritos!' :
                        'A receita foi removida dos favoritos.'} </Typography>}
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
                <div style={{ width: '250px', height: '250px', background: `url(${this.props.img}) 50% 50% no-repeat` }} />
                <IconButton onClick={this.onFavoriting}
                    style={{ float: 'right', right: '25px', bottom: '45px', zIndex: 1 }}>
                    {!this.state.favorited ? <FontAwesomeIcon style={{ fontSize: '20px', color: 'white' }} icon={faHeart} />
                        : <FontAwesomeIcon style={{ fontSize: '20px', color: 'red' }} icon={faHeartSolid} />}
                </IconButton>
                <div>
                    <Typography>{this.props.recipeName}</Typography>
                    <PersonIcon /> <Typography variant={'caption'}>{this.props.recipeOwner}</Typography>
                </div>

            </div>
        )
    }
}

export default withStyles(styles)(CookingPost)