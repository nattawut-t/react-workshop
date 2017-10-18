import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import { Input, Button } from 'reactstrap'
import { Icon } from 'react-fa'

const App = ({ fetchUsers, cancel, payload, loading }) =>
  <div>
    <div className="col-12">
      <h3>Leads - Information for approval</h3>
    </div>
    <br />
    <div
      className="col-12"
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <Input name="keyword" id="keyword" placeholder="keyword" />&nbsp;&nbsp;
      <Button
        outline
        color="primary"
        onClick={() => {
          console.log(fetchUsers)
          fetchUsers('torvalds')
        }}
      >
        <Icon spin name={loading ? 'circle-o-notch' : ''} size="lg" />&nbsp;Reload
      </Button>
      &nbsp;
      <Button
        onClick={() => {
          console.log(cancel)
          cancel()
        }}
      >
        Cancel
      </Button>
    </div>



    <div
      className="col-12"
    >
      <span>{payload}</span>
    </div>

  </div >

App.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  payload: PropTypes.string,
  loading: PropTypes.bool,
}

App.defaultProps = {
  payload: '',
  loading: false,
}

export default App