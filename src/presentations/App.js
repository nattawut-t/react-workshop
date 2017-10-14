import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

const App = ({ fetchUsers, cancel, payload }) =>
  <div>
    <div className="col-12">
      <span>torvalds</span>
    </div>

    <div className="col-12">
      <button onClick={() => {
        console.log(fetchUsers)
        fetchUsers('torvalds')
      }}>
        Fetch Users
      </button>
      <button onClick={() => {
        console.log(cancel)
        cancel()
      }}>
        Cancel
      </button>
    </div>

    <div className="col-12">
      <span>{payload}</span>
    </div>

  </div>

App.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  payload: PropTypes.string,
}

App.defaultProps = {
  payload: '',
}

export default App