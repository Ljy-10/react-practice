import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let exampleStyle = {
    background:"blue",
    borderBottom:"10px solid green"
}

let element = (
    <div>
        <h1 style={exampleStyle}>lalalalalalalala</h1>
    </div>
)

ReactDOM.render(
    element,
    document.getElementById('root')
)