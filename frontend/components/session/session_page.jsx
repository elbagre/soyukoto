import React from 'react';
import { Link } from 'react-router'

class SessionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(category) {
    return (e) => {
      this.setState({ [category]: e.currentTarget.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  signupForm() {
    return(
      <div>
        <h2>Create an Account!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            e-Mail:
            <input type="email"
                   value={this.state.email}
                   onChange={this.update("email")} />
         </label>
         <label>
           Username:
           <input type="text"
                  value={this.state.username}
                  onChange={this.update("username")} />
          </label>
          <label>
            Password:
            <input type="password"
                   value={this.state.password}
                   onChange={this.update("password")} />
            <input type="submit" value="Submit" />
          </label>
        </form>
        <Link to="/login">Have an Account?</Link>
      </div>
    )
  }

  loginForm() {
    return(
      <div>
        <h2>Hisashiburi! Welcome back.</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text"
              value={this.state.username}
              onChange={this.update("username")} />
          </label>
          <label>
            Password:
            <input type="password"
                   value={this.state.password}
                   onChange={this.update("password")} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Link to="/signup">Don't have an Account?</Link>
      </div>
    )
  }

  render() {
    if (this.props.formType === "login") {
      return this.loginForm();
    } else {
      return this.signupForm();
    }
  }
}

export default SessionPage;
