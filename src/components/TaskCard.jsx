import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import PropTypes from 'prop-types';

const styles = {
	paperStyle: {
		padding: '0 1em'
	}
};

export default class TaskCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value || ''
		};
	}

	static get propTypes() {
		return {
			value: PropTypes.string.isRequired,
			onChange: PropTypes.func
		}
	}

	handleChange(event, newValue) {
		const value = newValue.replace('\n', '');
		this.setState({value});
	}

	handleKeyUp(event) {
		switch(event.keyCode) {
			case 27:
				this.reset();
				return;
			case 13:
				this.change(event.target.value);
				return;
		}
	}

	change(newValue) {
		if(this.props.onChange) {
			this.props.onChange(newValue);
		}
	}

	reset() {
		const {value} = this.props;
		this.setState({value});
	}

	render() {
		return (
			<Paper style={styles.paperStyle}>
				<TextField
					{...this.props}
					name="TaskLabel"
					value={this.state.value}
					fullWidth
					multiLine
					rows={2}
					rowsMax={2}
					onChange={(event, newValue) => this.handleChange(event, newValue)}
					onKeyUp={(event) => this.handleKeyUp(event)}
					underlineStyle={{borderColor: 'white'}}
				/>
			</Paper>
		);
	}
}
