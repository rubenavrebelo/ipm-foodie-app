import * as React from 'react';
import { createStyles, WithStyles, withStyles, TextField, Link, IconButton, Card, CardContent, Button, Slider, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

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
            <div style={{ position: 'relative', width: '100vh' }}>
                <div style={{ width: '75%' }}>
                    <TextField style={{ width: '90%' }} label={'Pesquisar Receita'} onChange={this.handleSearchChange} />
                    <IconButton onClick={this.doSearch}><SearchIcon /></IconButton>
                    {!this.state.advancedSearch &&
                        <Link onClick={this.handleAdvancedSearch} style={{ position: 'relative', float: 'right', marginRight: '50px', marginTop: '10px' }}>
                            Pesquisa Avançada <ArrowDropDownIcon />
                        </Link>
                    }
                </div>
                {this.state.advancedSearch && <Card style={{ width: '75%' }}>
                    <CardContent>
                        <div>Dificuldade Classificação Tempo <IconButton onClick={this.handleAdvancedSearch}><ArrowDropUpIcon /></IconButton></div>
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