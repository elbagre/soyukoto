import React from 'react';
import { Link, withRouter } from 'react-router'

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

  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
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
      <div className="session-form">
        <h3>Create an Account!</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>e-Mail:</label>
            <input type="email"
              value={this.state.email}
              onChange={this.update("email")} />
          </div>
          <div>
            <label>Username:</label>
            <input type="text"
              value={this.state.username}
              onChange={this.update("username")} />
          </div>
          <div>
            <label>Password: </label>
            <input type="password"
              value={this.state.password}
              onChange={this.update("password")} />
          </div>
            <input type="submit" value="Submit" />
        </form>
        <Link to="/login">Have an Account?</Link>
      </div>
    )
  }

  loginForm() {
    return(
      <div className="session-form">
        <h3>Hisashiburi! Welcome back.</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input type="text"
              value={this.state.username}
              onChange={this.update("username")} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password"
                   value={this.state.password}
                   onChange={this.update("password")} />
          </div>
          <input type="submit" value="Submit" />
        </form>
        <Link to="/signup">Don't have an Account?</Link>
      </div>
    )
  }

  render() {
    const form = this.props.formType === "login" ? this.loginForm() : this.signupForm();

    return (
      <div className="login">
        <h1 className="japanese">そう言うこと</h1>
        <div className="sakura">
          <img src={window.assets.light_cherry} />
          <img src={window.assets.cherry_falling} />
        </div>
        {form}
      </div>
    );
  }
}

export default withRouter(SessionPage);
