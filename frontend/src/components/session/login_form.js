import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this); 
    }

    componentDidMount() {
        this.props.clearErrors();
    }
    
    componentDidUpdate() {
        if (this.props.loggedIn) {
            this.props.history.push('/home');
            this.props.closeModal();
        }
    }


    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password
        };
        this.props.login(user);
    }

    handleDemo(e) {
        e.preventDefault();

        let user = {
            username: 'demo',
            password: 'password'
        };
        this.props.login(user);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.props.errors).map((error, i) => (
                    <li className="session-errors" key={`error-${i}`}>
                        {this.props.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit}>
                    <span onClick={this.props.closeModal} className="close-x">
                        <i className="fas fa-times"></i>
                    </span>
                    <h1>Log In</h1>
                    <div className="login-form">
                        <br />
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        <input type="submit" value="Submit" />
                        <br />
                        <input type="submit" value="Log In as Demo" onClick={this.handleDemo} /> 

                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);