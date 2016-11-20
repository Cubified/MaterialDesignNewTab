import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

injectTapEventPlugin();

var d = (a)=> {
    return document.getElementById(a)
};

var Placeholder = React.createClass({
    render: function () {
        return (
            <MuiThemeProvider>
                <RaisedButton label="Hello" />
            </MuiThemeProvider>
        );
    }
});

ReactDOM.render(<Placeholder />, d('container'));
