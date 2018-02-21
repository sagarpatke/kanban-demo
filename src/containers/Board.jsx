import React, { Component } from 'react';

import TaskList from '../components/TaskList';
import TaskCard from '../components/TaskCard';

import FlatButton from 'material-ui/FlatButton';

const data = require('./Board.data');

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = data;
	}

	render() {
		const lists = this.state.lists.map((list) => {
			return (
				<div style={{margin: '5px'}} key={list.id}>
					<TaskList
						title={list.title}
						footer={<FlatButton fullWidth label="Add a card" />}>
						{list.tasks.map((task) => {
								return (
									<TaskCard value={task.title} key={task.id} />
								);
						})}
					</TaskList>
				</div>
			);
		});

		const tasks = this.state.lists[0].tasks;

		const cards = tasks.map((task) => {
			return (
				<TaskCard value={task.title} key={task.id} />
			);
		});

		return (
			<div style={{display: 'flex'}}>
				{lists}
				<div style={{margin: '5px'}} key="0">
					<FlatButton
						label="Add list"
						primary
						style={{backgroundColor: '#333', height: '58px', color: 'white', width: '300px'}}
					/>
				</div>
			</div>
		);
	}
}
