import React, { Component, Suspense } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { login } from "../../actions/auth/auth";

export class Homepage extends Component {
  state = {
    username: "",
    password: "",
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  render() {
    const { username, password } = this.state;
    if (this.props.isAuthenticated) {
      return <Redirect to="/app" />;
    } else if (this.props.isLoading) {
      return <SpinnerLarge info="Authenticating Credentials..." />;
    } else {
      return (
        <form onSubmit={this.onSubmit}>
          <TextField id="username" label="Username" />
          <TextField id="password" label="Password" />
          <Button variant="contained" color="primary" type="submit">
            Log In
          </Button>
        </form>
      );
    }
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  isLoading: state.authReducer.isLoading,
});

export default connect(mapStateToProps, { login })(Homepage);
