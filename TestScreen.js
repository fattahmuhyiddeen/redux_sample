import React from 'react';
import {Text, View,TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { callApi } from './redux/action/user';

class App extends React.Component {
  render() {
    return (
      <View style={{flex:1,padding:30,backgroundColor:'yellow'}}>
        <Text>{this.props.user.name}</Text>
        <TouchableOpacity onPress={()=>this.props.callApi('haha')}>
          <Text>change name</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
})
const mapDispatchToProps = dispatch => ({
  callApi: (v) => dispatch(callApi(v))
  })
export default connect(mapStateToProps,mapDispatchToProps)(App)