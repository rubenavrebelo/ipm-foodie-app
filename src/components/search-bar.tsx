import * as React from 'react';
import { createStyles, WithStyles, withStyles, TextField, Link, IconButton, Card, CardContent, Button, Slider, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Rating from '@material-ui/lab/Rating';

const styles = () => createStyles({
})

interface Props {
    handleSearch: (search: string) => void;
}

type PropsWithStyles = Props & WithStyles<typeof styles>

interface State {
    advancedSearch: Boolean;
    searchValue: string;
}

class SearchBar extends React.Component<PropsWithStyles, State>{
    constructor(props: PropsWithStyles) {
        super(props)

        this.state = {
            advancedSearch: false,
            searchValue: ''
        }
    }

    handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            searchValue: event.target.value
        });
    }

    handleAdvancedSearch = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
        this.setState({
            advancedSearch: !this.state.advancedSearch
        })
    }

    doSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.props.handleSearch(this.state.searchValue)
    }

    render = () => {
        const { classes } = this.props;

        return (
            <div style={{ position: 'relative', width: '90vh' }}>
                <TextField style={{ width: '90%' }} label={'Pesquisar Receita'} onChange={this.handleSearchChange} />
                <IconButton onClick={this.doSearch}><SearchIcon /></IconButton>
                {!this.state.advancedSearch &&
                    <Link onClick={this.handleAdvancedSearch} style={{ position: 'relative', float: 'right', marginRight: '50px', marginTop: '10px' }}>
                        Pesquisa Avançada <ArrowDropDownIcon />
                    </Link>
                }
                {this.state.advancedSearch && <Card style={{ width: '90%' }}>
                    <CardContent>
                        <div>
                            <div>
                                <Typography>Dificuldade</Typography>
                                <Rating
                                    value={2}
                                    precision={0.5} />
                            </div>
                            <div>
                                <Typography>Classificação</Typography>
                                <Rating
                                    value={2}
                                    precision={0.5} />
                            </div>
                            Tempo
                            <IconButton onClick={this.handleAdvancedSearch}><ArrowDropUpIcon /></IconButton></div>
                        <div><Slider
                            style={{ width: '40%' }}
                            defaultValue={30}
                            value={[10, 50]}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={10}
                            marks
                            min={10}
                            max={110}></Slider></div>
                        <Typography>Tipos</Typography>
                        <div><Button>Vegetais</Button>
                            <Button>Peixe</Button>
                            <Button>Carne</Button>
                            <Button>Bolo</Button>
                            <Button>Mexicano</Button>
                            <Button>Saudável</Button></div>
                    </CardContent>
                </Card>}
            </div>
        )
    }
}

export default withStyles(styles)(SearchBar)