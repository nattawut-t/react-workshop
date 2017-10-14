import { connect } from 'react-redux'
import Component from '../presentations/App'
import { fetchUser, fetchUserCancelled } from '../redux/modules/users'

const mapStateToProps = ({ users, loading }) => ({
  payload: users.payload,
  loading: users.loading,
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: username => dispatch(fetchUser(username)),
  cancel: () => dispatch(fetchUserCancelled()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
