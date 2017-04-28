import React, { Component } from 'react';
import Card from './Card'
import { connect } from 'react-redux';

const mapStateToProps = ({ cards }, { params: { deckId }}) => ({
    cards: cards.filter((card) => card.deckId === deckId)
})
class Cards extends Component{
    render() {
        return (
            <div className="main">
                {this.props.cards.map(card => <Card card={card} key={card.id} /> )}
                {this.props.children}
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(Cards);
