'use strict'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';


function App() {
    return (
        <div>
            <Button variant="contained" color="primary">
                Hello Raj
            </Button>
        </div>
    );
}

ReactDOM.render(
    <App />
    , document.querySelector('#root')
)
