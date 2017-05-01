import React, { Component } from 'react';
import Card from './Card'
import { connect } from 'react-redux';
import fuzzysearch from 'fuzzysearch';

const matches = (filter, card) =>
    fuzzysearch(filter, card.front)  ||
    fuzzysearch(filter, card.back)

const mapStateToProps = ({ cards, cardFilter }, { params: { deckId }}) => ({
    cards: cards.filter((card) => card.deckId === deckId && matches(cardFilter, card))
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
