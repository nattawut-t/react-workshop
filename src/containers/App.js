import { connect } from 'react-redux'
import Component from '../presentations/App'
import { fetchUser } from '../redux/modules/users'

const mapStateToProps = ({ users }) => ({
  payload: users.payload,
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: username => dispatch(fetchUser(username)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
