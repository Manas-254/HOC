import React, { Component } from 'react'
import withCounter from '../hoc/withCounter'

export class ClickCounter extends Component {
    render() {
        const {count,incrementCount}=this.props
        return (
            <div>
                <button onClick={incrementCount}>Click{count}times</button>
                <p>Name:{this.props.name}</p>
            </div>
        )
    }
}

export default withCounter(ClickCounter,5)
