import React from 'react';
import { Link, withRouter } from 'react-router';
import GuestButton from './guest/guest_button.jsx';

class SessionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    }

    this.handleErrors = this.handleErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.props.router.push("/home");
    }
  }

  update(category) {
    return (e) => {
      this.setState({ [category]: e.currentTarget.value });
    }
  }

  handleErrors() {
    if (this.props.errors.length) {
      const errors = this.props.errors.map( (error, idx) => {
        return(
          <li key={idx}>{error}</li>
        )
      });

      return(
        <ul className="error">
          {errors}
        </ul>
      );
    } else {
      return <div></div>
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
          <div>
            <Link to="/login">Have an Account?</Link>
            <input type="submit" value="Submit" />
          </div>
        </form>
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
          <div>
            <Link to="/signup">Don't have an Account?</Link>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div>
          <GuestButton login={this.props.processForm} />
        </div>
      </div>
    )
  }

  momotaro() {
    return (
      <div>
        <div className="japanese">
          <p>と言ったら</p>
          <p>うまいもも、こっちゃこい、苦いももあっちゃ行け</p>
          <p>お爺さんにも食べさせてあげたいと思って</p>
          <p>拾って食べたらなんとも美味しくてほっぺたが落ちそう</p>
          <p>ある日、お婆さんが川で洗濯をしていたら、つんばらこ、つんばらこ、ももが流れてきました</p>
        </div>
        <div className="japanese">
          <p>へ洗濯に出かけます</p>
          <p>お婆さんは川</p>
          <p>山へ木を切りに行けば</p>
          <p>お爺さんが</p>
          <p>昔々ある所に</p>
        </div>
      </div>
    )
  }

  haiku() {
    return(
      <div className="haiku">
        <div className="japanese">
          <p>水無月の虚空に涼し時鳥</p>
          <p>木をつみて夜の明やすき小窓かな</p>
          <p>一重づゝ一重つゝ散れ八重櫻</p>
          <p>名月の出るやゆらめく花薄</p>
        </div>
      </div>
    )
  }

  render() {
    const form = this.props.formType === "login" ? this.loginForm() : this.signupForm();

    return (
      <div className="login">
        {this.momotaro()}
        {this.haiku()}
        <div className="sakura">
          <img src={window.assets.light_cherry} />
          <img src={window.assets.cherry_falling} />
        </div>
        {this.handleErrors()}
        {form}
      </div>
    );
  }
}

export default withRouter(SessionPage);
