import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link, browserHistory } from 'react-router';

class CardModal extends Component {
    constructor(props){
        super(props);
        this.onSave = this.onSave.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }
    componentDidUpdate(){
        ReactDOM.findDOMNode(this.refs.front).focus;
    }
    render() {
        let { card, onDelete } = this.props;
        return (
            <div className="modal">
                <h3>{onDelete ? 'Edit ': 'New '}
                    Card</h3>
                <label>Card Front:</label>
                <textarea ref="front" defaultValue={card.front}></textarea>
                <label>Card Back:</label>
                <textarea ref="back" defaultValue={card.back}></textarea>
                <p>
                    <button onClick={this.onSave}>
                        Save Card
                    </button>
                    <Link className='btn' to={`/deck/${card.deckId}`}>
                        Cancel
                    </Link>
                    { onDelete ? <button onClick={this.onDelete} className='delete'> Delete Card</button> : null }
                </p>
            </div>
        )
    }
    onSave(){
        var front = ReactDOM.findDOMNode(this.refs.front);
        var back = ReactDOM.findDOMNode(this.refs.back);

        this.props.onSave(Object.assign({}, this.props.card, {
            front: front.value,
            back: back.value
        }));
        browserHistory.push(`/deck/${this.props.card.deckId}`);
    }
    onDelete(){
        this.props.onDelete(this.props.card.id);
        browserHistory.push(`/deck/${this.props.card.deckId}`);
    }
}

export default CardModal;
