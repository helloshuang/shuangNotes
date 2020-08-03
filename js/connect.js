import { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { fetchAuthorityListAC } from "../../redux/actions/authority.action";

/**
 * 登录页面
 */
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ flex: 1, width: '100%', height: '100%' }}></View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    nav: state.nav,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAuthorityListAC: (opts) => {
      dispatch(fetchAuthorityListAC(opts))
    }
  }
}
// const mapDispatchToProps = {
//   onClick: (filter) => {
//     type: 'SET_VISIBILITY_FILTER',
//       filter: filter
//   };
// }
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
