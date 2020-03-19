import React, { Component } from 'react';
import Table from './table.class'
import Form from './form.class'
import Shopping from './shopping.class'
import Example from '../hooks/example.comp'


// const name = 'Martin'
// const heading = <h1>Hello, {name}</h1>

class App extends Component {
    state = {
        characters:
            [
                {
                    name: 'Charlie',
                    job: 'Janitor',
                },
                {
                    name: 'Mac',
                    job: 'Bouncer',
                },
                {
                    name: 'Dee',
                    job: 'Aspring actress',
                },
                {
                    name: 'Dennis',
                    job: 'Bartender',
                },
                {
                    name: 'Martin',
                    job: 'Developer',
                },
            ],
    }

    removeCharacter = index => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] })
    }

    render() {
        const { characters } = this.state
        return (
            <div className="container">
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit} />
                {/* <Shopping /> */}
                {/* <Example /> */}
            </div>
            // <div className="shopping-list">
            //     <h1>Shopping List for {this.props.name}</h1>
            //     <ul>
            //         <li>Instagram</li>
            //         <li>WhatsApp</li>
            //         <li>Facebook</li>
            //         <li>Oculus</li>
            //     </ul>
            // </div>
        )
    }
}

export default App
