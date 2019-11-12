import * as React from 'react';
import Navbar from '../components/navbar';
import Homepage from './homepage';
import ProfilePage from './profile';
import { User } from '../dt/user';

interface State {
    user: User
}

class MainPageHandler extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            user: {
                name: '',
                followers: 0,
                following: 0,
                username: '',
                recipes: [],
                description: '',
                favorites: []
            }
        };
    }

    createUser = (user: User) => {
        this.setState({
            user
        })
    }

    render = () => {
        return (
            <div>
                <Navbar createUser={this.createUser} />
                <Homepage />
            </div>
        )
    }
}

export default MainPageHandler