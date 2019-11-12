import * as React from 'react';
import Navbar from '../components/navbar';
import SearchBar from '../components/search-bar';
import CookingPost from '../components/feed-post';
import { Typography, Avatar, Grid } from '@material-ui/core';
import { RecipesObject, Recipe } from '../dt/recipes';
import { User } from '../dt/user';

export interface Props {
    user: User
}

class RecipePage extends React.Component<Props> {

    constructor(props: Props) {
        super(props)
    }

    render = () => {
        return (
            <div>
                <div>
                    <img />
                    <div>
                        <Typography></Typography>
                        Dificuldade
                        Classificação
                        Tempo Médio
                        Criador por
                    </div>
                </div>
                <div>
                    <Typography>Nome do bolo</Typography>
                    <div>Ingredientes</div>
                    <div>Passos</div>
                </div>
            </div>
        )
    }
}

export default RecipePage