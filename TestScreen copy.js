import React from 'react';
import {Text, View,TouchableOpacity, Switch } from 'react-native';
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

// class App extends React.Component {
//   state={isOn:true}
//   render() {
//     const {isOn:is_on} = this.state
//     // const isOn = this.state.isOn
//     return (
//       <View style={{flex:1,backgroundColor:'yellow',padding:30}}>

//         <Text>This switch is {is_on ? 'On':'Off'}</Text>
//         <Switch value={is_on} onValueChange={v=>this.setState({isOn:v})}/>

//       </View>
//     );
//   }
// }

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  callApi: (v) => dispatch(callApi(v))
    
  })


export default connect(mapStateToProps,mapDispatchToProps)(App)