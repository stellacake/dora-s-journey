import React, { Component } from "react";

class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			firstname: "",
			lastname: "",
			email: "",
			password: "",
			passwordConf: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState((state) => ({ [e.target.name]: e.target.value }));
	}
	handleSubmit(e) {
		e.preventdefault();
		console.log(this.state);
	}

	render() {
		return (
			<div>
				<h1>{JSON.stringify(this.state, 1, 1)}</h1>
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<input
						type="firstname"
						name="firstname"
						onChange={(e) => this.handleChange(e)}
					/>
					<input
						type="lastname"
						name="lastname"
						onChange={(e) => this.handleChange(e)}
					/>
					<input
						type="email"
						name="email"
						onChange={(e) => this.handleChange(e)}
					/>
					<input
						type="password"
						name="password"
						onChange={(e) => this.handleChange(e)}
					/>
					<input
						type="passwordConf"
						name="passwordConf"
						onChange={(e) => this.handleChange(e)}
					/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default SignUp;
