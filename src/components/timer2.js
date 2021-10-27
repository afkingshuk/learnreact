/* eslint-disable react/destructuring-assignment */
import React from 'react';

// class component of react
// old school method ... hooks are new method

class Clock2 extends React.Component {
    render() {
        return new Date().toLocaleTimeString(this.props.locale);
    }
}

export default Clock2;
