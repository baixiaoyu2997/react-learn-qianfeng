import React, { Component } from 'react';
import { observer,inject } from "mobx-react";
@inject(store=>{
    return {
        count:store.counter.count,
        doubleCount:store.counter.doubleCount
    }
})
@observer
class CounterDisplay extends Component {
    
    render() {
        return (
            <div>
               <p> 原始值：{this.props.count  }</p>
               <p> 双倍值：{this.props.doubleCount  }</p>
            </div>
        );
    }
}

export default CounterDisplay;