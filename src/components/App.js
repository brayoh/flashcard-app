import React, {Component} from 'react';
import Sidebar from './Sidebar';
import '../styles/App.css';
import { connect } from 'react-redux';
import Toolbar from './Toolbar';

const mapStateToProps = (props,{ params: { deckId } }) => ({
    deckId
})

class App extends Component {
    render() {
        return (
            <div className="App">
                <Toolbar deckId={this.props.deckId} />
                <Sidebar />
               {this.props.children}
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
