import React, {Component} from 'react';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render(){
        return(
            <div className="sidebar">
                <h2>All Decks</h2>
                <ul>
                    {this.props.decks.map((deck, i) =>
                        <li key={i}>{deck.name}</li>
                    )}
                </ul>
                {this.props.addingDeck && <input ref='add'/> }
            </div>
        )
    }
}
