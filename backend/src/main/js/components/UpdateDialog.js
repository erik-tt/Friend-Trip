import React, { Component } from 'react';

class UpdateDialog extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const updatedUser = {};
		this.props.attributes.forEach(attribute => {
			updatedUser[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
		});
		this.props.onUpdate(this.props.user, updatedUser);
		window.location = "#";
	}

	render() {
		const inputs = this.props.attributes.map(attribute =>
			<p key={this.props.user.entity[attribute]}>
				<input type="text" placeholder={attribute}
					   defaultValue={this.props.user.entity[attribute]}
					   ref={attribute} className="field"/>
			</p>
		);

		const dialogId = "updateUser-" + this.props.user.entity._links.self.href;

		return (
			<div key={this.props.user.entity._links.self.href}>
				<a href={"#" + dialogId}>Update</a>
				<div id={dialogId} className="modalDialog">
					<div>
						<a href="#" title="Close" className="close">X</a>

						<h2>Update a user</h2>

						<form>
							{inputs}
							<button onClick={this.handleSubmit}>Update</button>
						</form>
					</div>
				</div>
			</div>
		)
	}

};
export default UpdateDialog;