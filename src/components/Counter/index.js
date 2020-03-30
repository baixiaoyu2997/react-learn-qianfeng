import React, { Component } from 'react';
import {CounterConsumer} from '../../CounterStore'
class Counter extends Component {
    render() {
        return (
            <CounterConsumer>
                {
                    ({count})=>{
                    return <span>{count}</span>
                    }
                }
            </CounterConsumer>
        );
    }
}

export default Counter;