import React, { Component } from 'react'

// const name = 'Martin'
// const heading = <h1>Hello, {name}</h1>

class Shopping extends Component {
    render() {
        return (
            <div className="shopping-list">
                {/* <h1>Shopping List for {name}</h1> */}
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
            // React.createElement('div', { className: 'shopping-list' },
            //     React.createElement('h1',[],['Martin']),
            //     React.createElement('ul',[],['Martin'])
            // )
        );
    }
}
export default Shopping