import React, {Component} from 'react';
import { showAddDeck, filterCards } from '../actions/actions';
import {Link} from 'react-router';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => ({
    showAddDeck: () => dispatch(showAddDeck()),
    onFilter: query => dispatch(filterCards(query))
})

class Toolbar extends Component {
    render() {
        let deckTools = this.props.deckId
            ? (
                <div>
                    <Link className='btn' to={`/deck/${this.props.deckId}/new`}>
                        + New Card</Link>
                    <Link className='btn' to={`/deck/${this.props.deckId}/study`}>
                        Study Deck</Link>

                    <input onChange={e => this.props.onFilter(e.target.value)} className="search" type="search" placeholder="Search Deck...."/>
                </div>
            )
            : null;
        return (
            <div className='toolbar'>
                <div>
                    <button onClick={this.props.showAddDeck}>
                        + New Deck
                    </button>
                </div>
                {deckTools}
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Toolbar);
