// Code DelayedButton Component Here
import React from "react"
export default class DelayedButton extends React.Component {

delayedC = (event) => {
  event.persist();
  setTimeout(() =>
    this.props.onDelayedClick(event), this.props.delay);
}


  render() {
    return(
      <button onClick={this.delayedC}> Delayed </button>
    )
  }
}
