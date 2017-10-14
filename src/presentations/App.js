import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

const App = ({ fetchUsers, payload }) =>
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
    </div>

    <div className="col-12">
      <span>{payload}</span>
    </div>

  </div>

App.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  payload: PropTypes.string,
}

App.defaultProps = {
  payload: '',
}

export default App