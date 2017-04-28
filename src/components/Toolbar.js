import React, { Component } from 'react';
import { showAddDeck }  from '../actions/actions';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    showAddDeck: () => dispatch(showAddDeck())
})

class Toolbar extends Component{
    render(){
        let deckTools = this.props.deckId ? (
            <div>
                <Link className='btn' to={`/deck/${this.props.deckId}/new`}> + New Card</Link>
                <Link className='btn' to={`/deck/${this.props.deckId}/study`}> Study Card</Link>
            </div>
        ) : null;
        return(
            <div className='toolbar'>
                <div>
                    <button onClick={this.props.showAddDeck}> + New Deck </button>
                </div>
                {deckTools}
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Toolbar);
