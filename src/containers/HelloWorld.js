import Hello from './../components/Hello'
import React from "react";
import {helloWorld, reset} from "../actions";
import {connect} from "react-redux";

// class HelloWorld extends React.Component {
//   render() {
//     return <Hello message="Hello!!!"/>
//   }
// }

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.helloWorld.message
  }
}
const mapDispatchToProps =
    (dispatch, ownProps) => {
      return {
        onClick: () => dispatch(helloWorld()),
        reset: () => dispatch(reset())
      }
    }
const HelloWorld = connect(mapStateToProps, mapDispatchToProps)(Hello)

export default HelloWorld