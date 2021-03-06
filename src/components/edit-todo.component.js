import React, { Component } from 'react';
import axios from "axios";

export default class EditTodo extends Component {

	constructor(props){
		super(props);
		this.state = {
			todo_description: '',
			todo_responsible: '',
			todo_priority: '',
			todo_completed: false
		}
		this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
		this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
		this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChangeTodoDescription(e){
		this.setState({
			todo_description: e.target.value
		});
	}

	onChangeTodoResponsible(e){
		this.setState({
			todo_responsible: e.target.value
		});
	}

	onChangeTodoPriority(e){
		this.setState({
			todo_priority: e.target.value
		});
	}

	onSubmit(e){
		e.preventDefault();
		console.log("Form submitted");

		const newTodo = {
			todo_description: this.state.todo_description,
			todo_responsible: this.state.todo_responsible,
			todo_priority: this.state.todo_priority,
			todo_completed: this.state.todo_completed
		}

		axios.post("http://localhost:4000/todos/add", newTodo)
			.then( res => console.log(res.data));

		// reset todo	
		this.setState({
			todo_description: '',
			todo_responsible: '',
			todo_priority: '',
			todo_completed: false
		})
	}


	render(){
		return (
			<div style={{ marginTop: 10 }}>
				<h3> Welcome to Edit Todo componento </h3>
				<form onSubmit={ this.onSubmit }>
					<div className="form-group">
						<label>Description: </label>
						<input 
							type="text"
							className="form-control"
							value={ this.state.todo_description }
							onChange={ this.onChangeTodoDescription }
						/>
					</div>
					<div className="form-group">
						<label>Responsible: </label>
						<input 
							type="text"
							className="form-control"
							value={ this.state.todo_responsible }
							onChange={ this.onChangeTodoResponsible }
						/>
					</div>
					<form className="form-inline mb-3">
						<div className="form-group">
							<div className="form-check form-check-inline">
								<input 
									type="radio"
									name="priorityOptions"
									className="form-check-input"
									value="Low"
									checked={ this.state.todo_priority === 'Low' }
									onChange={ this.onChangeTodoPriority }
								/>
								<label className="form-check-label">Low</label>
							</div>
						</div>

						<div className="form-group">
							<div className="form-check form-check-inline">
								<input 
									type="radio"
									name="priorityOptions"
									className="form-check-input"
									value="Medium"
									checked={ this.state.todo_priority === 'Medium' }
									onChange={ this.onChangeTodoPriority }
								/>
								<label className="form-check-label">Medium</label>
							</div>
						</div>

						<div className="form-group">
							<div className="form-check form-check-inline">
								<input 
									type="radio"
									name="priorityOptions"
									className="form-check-input"
									value="High"
									checked={ this.state.todo_priority === 'High' }
									onChange={ this.onChangeTodoPriority }
								/>
								<label className="form-check-label">High</label>
							</div>
						</div>
					</form>
					

					<div className="form-group">
						<input
							type="submit" value="Create Todo" className="btn btn-primary"
						/>
					</div>

				</form>
			</div>


		)
	}

}