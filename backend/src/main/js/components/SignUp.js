import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from '@material-ui/core/Button';

class SignUp extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const newUser = {};
		this.props.attributes.forEach(attribute => {
			newUser[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
		});
		this.props.onCreate(newUser);

		// clear out the dialog's inputs
		this.props.attributes.forEach(attribute => {
			ReactDOM.findDOMNode(this.refs[attribute]).value = '';
		});

		// Navigate away from the dialog to hide it.
		window.location = "#Dashboard";
	}


	render() {
		const inputs = this.props.attributes.map(attribute =>
			<p key={attribute}>
				<input type="text" placeholder={attribute} ref={attribute} className="field"/>
			</p>
		);

		return (
			<div>
				<a href="#createUser">Sign Up</a>

				<div id="createUser" className="SignUp">
					<div>
						<a href="#createUser" title="Close" className="close">X</a>

						<h2>Welcome</h2>

						<form>
							{inputs}
							<Button variant="contained" color="primary" onClick={this.handleSubmit}>
							Sign Up
							</Button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
export default SignUp;