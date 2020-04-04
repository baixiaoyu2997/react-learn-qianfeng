import React, { Component } from 'react';

class CounterDisplay extends Component {
    render() {
        return (
            <div>
                {this.props.count}
            </div>
        );
    }
}

export default CounterDisplay;