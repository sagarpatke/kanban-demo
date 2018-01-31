import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

require('./index.css');

import TaskCard from './components/TaskCard';
import TaskList from './components/TaskList';

const styles = {
	taskCard: {
		width: '300px'
	}
}

class C extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'Remember the Milk!'
		}
	}

	handleChange(newValue) {
		const value = newValue;
		this.setState({value});
	}

	render() {
		return (
			<TaskCard value={this.state.value} onChange={(value) => {this.handleChange(value)}}/>
		);
	}
}

let title = "Some Title";

ReactDOM.render(<MuiThemeProvider>
	<div style={styles.taskCard}>
		{/*<C />*/}
		<TaskList
			title={title}
		>
			{/*onTitleChange={(newTitle) => {console.log('Title Changed To:', newTitle); title=newTitle}}*/}
			<C />
			<C />
		</TaskList>
	</div>
</MuiThemeProvider>, document.getElementById('root'));
