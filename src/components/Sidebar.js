import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.createDeck = this.createDeck.bind(this);
    }
    componentDidUpdate() {
        let el = ReactDOM.findDOMNode(this.refs.add);
        if(el) el.focus();
    }
    render() {
        return (
            <div className="sidebar">
                <h2>All Decks</h2>
                <button onClick={e => this.props.showAddDeck()}>
                    New Deck
                </button>
                <ul>
                    {this.props.decks.map((deck, i) => <li key={i}>{deck.name}</li>)}
                </ul>
                {this.props.addingDeck && <input ref='add' onKeyPress={this.createDeck}/>}
            </div>
        )
    }
    createDeck(event) {
        if (event.which !== 13)
            return;
        let name = ReactDOM.findDOMNode(this.refs.add).value;
        this.props.addDeck(name)
        this.props.hideAddDeck();
    }
}
