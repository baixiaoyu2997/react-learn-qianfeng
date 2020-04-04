import React, { Component } from 'react';
import { observer } from "mobx-react";
@observer
class CounterDisplay extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div>
               <p> 原始值：{this.props.counterStore.count  }</p>
               <p> 双倍值：{this.props.counterStore.doubleCount  }</p>
            </div>
        );
    }
}

export default CounterDisplay;