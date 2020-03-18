import React, { Component } from 'react';
import Table from './table.comp'


// const name = 'Martin'
// const heading = <h1>Hello, {name}</h1>

class App extends Component {
    render() {
        // const { characters } = this.state

        // state = {
        //     characters: [
        //         {
        //             name: 'Charlie',
        //             job: 'Janitor',
        //         },
        //         {
        //             name: 'Mac',
        //             job: 'Bouncer',
        //         },
        //         {
        //             name: 'Dee',
        //             job: 'Aspring actress',
        //         },
        //         {
        //             name: 'Dennis',
        //             job: 'Bartender',
        //         },
        //     ]
        // }

        // removeCharacter = index => {
        //     const { characters } = this.state

        //     this.setState({
        //         characters: characters.filter((characters, i) => {
        //             return i !== index
        //         })
        //     })
        // }


        const characters = [
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
        ]

        return (
            <div className="container">
                <Table characterData={characters} />
            </div>
        )
    }
}

export default App
