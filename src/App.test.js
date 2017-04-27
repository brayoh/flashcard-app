import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import Sidebar from './components/Sidebar';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
});
