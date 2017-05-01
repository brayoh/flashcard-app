import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { updateCard, setShowBack } from '../actions/actions';

const MS_IN_A_DAY = 86400000;

const mapStateToProps = ({ cards, showBack }, { params: { deckId} }) =>({
    showBack,
    deckId,
    card: cards.filter(card => card.deckId === deckId &&
        (!card.lastStudiedOn || ( new Date - card.lastStudiedOn) / MS_IN_A_DAY >= card.score))[0]
});

const mapDispatchToProps = dispatch => ({
    onStudied: (cardId, score) => {
        let now = new Date();
        now.setHours(0, 0, 0, 0);
        dispatch(updateCard({ id: cardId, score, lastStudiedOn: +now }));
        dispatch(setShowBack());
    },
    onFlip: () => dispatch(setShowBack(true))
})

class StudyModal extends Component{
    render(){
        let body = (
            <div className="no-cards">
                <p>You have no cards to study in this deck right now, Great Job! :) </p>
            </div>
        )
        if (this.props.card) {
            body = (
                <div className="study-card">
                    <div className={this.props.showBack ? 'front hide' :  'front'}>
                        <div>
                            <p>{this.props.card.front}</p>
                        </div>
                        <button onClick={this.props.onFlip}> Flip </button>
                    </div>
                    <div className={this.props.showBack ? 'back' : 'back hide'}>
                        <div>
                            <p>{this.props.card.back}</p>
                        </div>
                        <p>How did you do?</p>
                        <p>
                            <button onClick={(e) => this.props.onStudied(this.props.card.id, Math.max(this.props.card.score -1, 1) )}> Poorly</button>
                            <button onClick={(e) => this.props.onStudied(this.props.card.id, this.props.card.score)}>Okay</button>
                            <button onClick={(e) => this.props.onStudied(this.props.card.id, Math.min(this.props.card.score + 1, 3) )}>Great</button>
                        </p>
                    </div>
                </div>
            )
        }
        return(
            <div className="modal study-modal">
                <Link className="btn btn-close" to={`/deck/${this.props.deckId}`}> x </Link>
                {body}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudyModal);
