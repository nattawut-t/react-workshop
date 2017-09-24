import React, { Component } from 'react'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'

const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
const passwordRegex = /^.*(?=.{8,50})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^_=+]).*$/

class App extends Component {

  state = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',

    usernameMessage: '',
    firstNameMessage: '',
    lastNameMessage: '',
    emailMessage: '',
    passwordMessage: '',

    valid: false,
  }

  componentWillMount() {
    this.initialMessage()
  }

  initialMessage = () => {
    [
      'username',
      'firstName',
      'lastName',
      'email',
      'password',
    ]
      .map(key => ({
        key,
        value: this.state[key],
      }))
      .forEach(({ key, value }) => {
        const messageKey = `${key}Message`
        const messageValue = !value ? `${key} is required` : ''

        this.setState({ [messageKey]: messageValue })
      });
  }

  validate = () => {
    const keys = [
      'username',
      'firstName',
      'lastName',
      'email',
      'password',
    ]
    const invalid = keys
      .map(key => ({
        key,
        value: this.state[key],
      }))
      .find(({ value }) => !value)

    console.log('invalid: ', invalid)

    const { email, password } = this.state
    const valid = emailRegex.test(email) && passwordRegex.test(password)

    return !invalid && valid;
  }

  handleChange = e => {
    const { name, value } = e.target
    const msgKey = `${name}Message`

    this.setState({
      [name]: value,
      [msgKey]: !value ? `${name} is required` : '',
    }, () => {
      const valid = this.validate();
      this.setState({ valid });
    })
  }

  handlePatternChange = (e, regex) => {
    const { name, value } = e.target
    const msgKey = `${name}Message`

    this.setState({
      [name]: value,
      [msgKey]: !value

        ? `Email is required`
        : !regex.test(value)

          ? 'Please valid email'
          : ''
      ,
    }, () => {
      const valid = this.validate();
      this.setState({ valid });
    })
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    const {
      username,
      firstName,
      lastName,
      email,
      password,

      usernameMessage,
      firstNameMessage,
      lastNameMessage,
      emailMessage,
      passwordMessage,

      valid,
    } = this.state

    return (
      <MuiThemeProvider>
        <form onSubmit={this.handleSubmit}>
          <div className="post-preview">
            <div className="row">
              <div className="col-4">
                <h3 className="post-subtitle">
                  Username:
            </h3>
              </div>
              <h2 className="col-8">
                <TextField
                  id="username"
                  name="username"
                  value={username}
                  floatingLabelText="Username"
                  errorText={usernameMessage}
                  onChange={e => this.handleChange(e)}
                  fullWidth
                />
              </h2>
            </div>
            <div className="clearfix" >&nbsp;</div>
            <div className="row">
              <div className="col-4">
                <h3 className="post-subtitle">
                  First name:
            </h3>
              </div>
              <h2 className="col-8">
                <TextField
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  floatingLabelText="First name"
                  errorText={firstNameMessage}
                  onChange={e => this.handleChange(e)}
                  fullWidth
                />
              </h2>
            </div>
            <div className="clearfix" >&nbsp;</div>
            <div className="row">
              <div className="col-4">
                <h3 className="post-subtitle">
                  Last name:
            </h3>
              </div>
              <h2 className="col-8">
                <TextField
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  floatingLabelText="Last name"
                  errorText={lastNameMessage}
                  onChange={e => this.handleChange(e)}
                  fullWidth
                />
              </h2>
            </div>
            <div className="clearfix" >&nbsp;</div>
            <div className="row">
              <div className="col-4">
                <h3 className="post-subtitle">
                  Email:
            </h3>
              </div>
              <h2 className="col-8">
                <TextField
                  id="email"
                  name="email"
                  value={email}
                  floatingLabelText="Email"
                  errorText={emailMessage}
                  onChange={e => this.handlePatternChange(e, emailRegex)}
                  fullWidth
                />
              </h2>
            </div>
            <div className="clearfix" >&nbsp;</div>
            <div className="row">
              <div className="col-4">
                <h3 className="post-subtitle">
                  Password:
            </h3>
              </div>
              <h2 className="col-8">
                <TextField
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  floatingLabelText="Password"
                  errorText={passwordMessage}
                  onChange={e => this.handlePatternChange(e, passwordRegex)}
                  fullWidth
                />
              </h2>
            </div>
            <div className="clearfix" >&nbsp;</div>
            <div
              style={{
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              <input
                type="submit"
                className="btn btn-secondary"
                value="Submit"
                disabled={!valid}
              />
            </div>
          </div >
        </form>
      </MuiThemeProvider>
    )
  }
}

export default App