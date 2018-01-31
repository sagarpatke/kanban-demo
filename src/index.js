import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './containers/App';

require('./index.css');

const styles = {
	taskCard: {
		width: '300px'
	}
}

ReactDOM.render(<MuiThemeProvider>
	<App />
</MuiThemeProvider>, document.getElementById('root'));
