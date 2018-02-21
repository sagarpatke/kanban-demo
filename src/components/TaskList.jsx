import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import VirtualizedList from 'react-virtualized/dist/commonjs/List';

export default class TaskList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.title || ''
		}
	}

	static get propTypes() {
		return {
			onTitleChange: PropTypes.func,
			titlePlaceholder: PropTypes.string,
			footer: PropTypes.element
		}
	}

	handleTitleChange(event, newValue) {
		const title = newValue;
		this.setState({title});
	}

	handleTitleKeyUp(event) {
		switch(event.keyCode) {
			case 27:
				this.resetTitle();
				return;
			case 13:
				this.changeTitle(event.target.value);
		}
	}

	changeTitle(newValue) {
		if(this.props.onTitleChange) {
			this.props.onTitleChange(newValue);
		}
	}

	resetTitle() {
		const title = this.props.title;
		this.setState({title});
	}

	render() {
		const listItems = this.props.children ? this.props.children.map((child, index) => {
			return (
				<div style={{marginBottom: '5px'}} key={index}> {/*FIXME: Use appropriate key here*/}
					{child}
				</div>
			);
		}) : null;

		const listRenderer = ({
			index,
			style
		}) => {
			return (
				<div style={style}  key={index}> {/*FIXME: Use appropriate key here*/}
					{this.props.children[index]}
				</div>
			);
		};

		return (
			<List style={{backgroundColor: '#e4e4e4', padding: '5px 10px', borderRadius: '3px'}}>
				<Subheader>
					<TextField
						name="listTitle"
						style={{fontSize: 'inherit', fontWeight: 'bold'}}
						placeholder={this.props.titlePlaceholder || ''}
						value={this.state.title}
						onChange={(event, newValue) => this.handleTitleChange(event,newValue)}
						onKeyUp={(event) => {this.handleTitleKeyUp(event)}}
					/>
				</Subheader>
				{/*listItems*/}
				<VirtualizedList
					width={300}
					height={400}
					rowCount={this.props.children.length}
					overscanRowCount={5}
					rowHeight={80}
					rowRenderer={listRenderer}
				/>
				{this.props.footer || null}
			</List>
		);
	}
}
