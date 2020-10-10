import React, { Component } from 'react';
import './contact.css';
import { connect } from 'react-redux';
import { submitMessage } from '../../actions/contact';
import TagManager from 'react-gtm-module';

class GetInTouch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
			invalid: false,
			sent: false,
			startedName: false,
			startedEmail: false,
			startedMessage: false,
		};
		this.updateName = this.updateName.bind(this);
		this.updateEmail = this.updateEmail.bind(this);
		this.updateMessage = this.updateMessage.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	updateName(event) {
		if (!this.state.startedName) {
			TagManager.dataLayer({
				dataLayer: {
					contactName: true,
				},
			});
			this.setState({ ...this.state, startedName: true });
		}
		this.setState({ ...this.state, name: event.target.value });
	}
	updateEmail(event) {
		if (!this.state.startedEmail) {
			TagManager.dataLayer({
				dataLayer: {
					contactEmail: true,
				},
			});
			this.setState({ ...this.state, startedEmail: true });
		}
		this.setState({ ...this.state, email: event.target.value });
	}
	updateMessage(event) {
		if (!this.state.startedMessage) {
			TagManager.dataLayer({
				dataLayer: {
					startedMessage: true,
				},
			});
			this.setState({ ...this.state, startedMessage: true });
		}
		this.setState({ ...this.state, message: event.target.value });
	}
	async handleSubmit() {
		const state = this.state;
		if (state.name === '' || state.email === '' || state.message === '') {
			this.setState({ ...this.state, invalid: true });
			setTimeout(() => {
				this.setState({ ...this.state, invalid: false });
			}, 3000);
		} else if (this.state.invalid !== true) {
			try {
				await this.props.submitMessage(state.name, state.email, state.message);
			} catch (error) {
				console.log(error);
			}

			this.setState({
				name: '',
				email: '',
				message: '',
				sent: true,
				invalid: false,
			});
			TagManager.dataLayer({
				dataLayer: {
					contactSubmit: 'true',
				},
			});
			setTimeout(() => {
				this.setState({
					name: '',
					email: '',
					message: '',
					sent: false,
					invalid: false,
				});
			}, 3000);
		}
	}

	render() {
		return (
			<section className="contactSection" id="contact">
				<div className="contactHeaderContainer">
					<h2 className="getInTouchHeader">Get In Touch</h2>
					<h2 className="contactHeaderBackground" id="contactBackground1">
						Get{'  '}In{'  '}Touch
					</h2>
					<h2 className="contactHeaderBackground" id="contactBackground2">
						Get{'  '}In{'  '}Touch
					</h2>
					<h2 className="contactHeaderBackground" id="contactBackground3">
						Get{'  '}In{'  '}Touch
					</h2>
					<h2 className="contactHeaderBackground" id="contactBackground4">
						Get{'  '}In{'  '}Touch
					</h2>
					<h2 className="contactHeaderBackground" id="contactBackground5">
						Get{'  '}In{'  '}Touch
					</h2>
				</div>
				<div className="getInTouchBox">
					<p className="getInTouchText">
						Use this form and we'll get in touch with you as soon as possible.
						Thanks!
					</p>
					<input
						onChange={this.updateName}
						className="getInTouchInput"
						type="text"
						placeholder="Name"
						value={this.state.name}
					></input>
					<input
						onChange={this.updateEmail}
						className="getInTouchInput"
						type="text"
						placeholder="Email"
						value={this.state.email}
					></input>
					<textarea
						onChange={this.updateMessage}
						className="getInTouchInput getInTouchTextArea"
						placeholder="Message"
						value={this.state.message}
					></textarea>
					<button className="getInTouchButton" onClick={this.handleSubmit}>
						Send
					</button>
					{this.state.invalid === true ? (
						<div className="contactErrorContainer">
							<p className="contactErrorText">
								Fill out all forms before submitting.
							</p>
						</div>
					) : null}
					{this.state.sent === true ? (
						<div className="contactSuccessContainer">
							<p className="contactSuccessText">Sent!</p>
						</div>
					) : null}
				</div>
			</section>
		);
	}
}

export default connect(null, { submitMessage })(GetInTouch);
