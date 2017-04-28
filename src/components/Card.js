import React, { Component } from 'react';
import { Link } from 'react-router';

class Card extends Component{
    render(){
        return(
            <div className="card">
                <div>
                    <p>{this.props.card.front}</p>
                    <Link className="btn" to={ `/deck/${this.props.card.deckId}/edit/${this.props.card.id} `}> Edit </Link>
                </div>
            </div>
        )
    }
}

export default Card;
