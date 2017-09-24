import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render() {
    return (
      <form>
        <div className="post-preview">
          <div className="row">
            <div className="col-4">
              <h3 className="post-subtitle">
                Username:
            </h3>
            </div>
            <h2 className="col-8">
              <input type="text" placeholder="username" />
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
              <input type="text" placeholder="first name" />
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
              <input type="text" placeholder="last name" />
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
              <input type="text" placeholder="email" />
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
              <input type="text" placeholder="password" />
            </h2>
          </div>
          <div className="clearfix" >&nbsp;</div>
          <div
            style={{
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            <input type="submit" className="btn btn-secondary" value="Submit" />
          </div>
        </div >
      </form>
    )
  }
}

export default App