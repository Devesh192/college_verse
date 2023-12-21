import React, { Component } from 'react'
import loading from '../asset/images/loading.gif'
import spinner02 from '../asset/images/spinner02.gif'
export class Spinner extends Component {
  render() {
    return (
        <div>
            <img src={loading} alt="loading" />
        </div>
    )
  }
}

export default Spinner
