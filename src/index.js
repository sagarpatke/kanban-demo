import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Board from './containers/Board';

require('./index.css');

const styles = {
	taskCard: {
		width: '300px'
	}
}

ReactDOM.render(<MuiThemeProvider>
	<Board />
</MuiThemeProvider>, document.getElementById('root'));
