import React, { Component } from "react";

class SignUp extends Component {
	constructor() {
		super();
		this.state = { email: "coucou" };
		this.updateEmailField = this.updateEmailField.bind(this);
	}
	updateEmailField(e) {
		this.setState((state) => ({ email: e.target.value }));
	}
	render() {
		return (
			<div>
				<h1>{this.state.email}</h1>
				<input
					type="email"
					name="email"
					onChange={(e) => this.updateEmailField(e)}
				/>
			</div>
		);
	}
}

export default SignUp;
