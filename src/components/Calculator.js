import React from 'react';
import { convert, toCelsius, toFahrenheit } from '../lib/converter';
import BoilingVerdict from './BoilingVerdict';
import TemparatureInput from './TemparatureInput';

export default class Calculator extends React.Component {
    // Since we are implementing TemparatureInput component for both celsius and fahrenheit input
    // state = {
    //     temparature: '',
    // };

    // onTemparatureChange = (e) => {
    //     this.setState({
    //         temparature: e.target.value,
    //     });
    // };

    // Uni directional top down approach
    // single source of truth

    state = { temparature: '', scale: 'c' };

    handleChange = (e, scale) => {
        this.setState({
            temparature: e.target.value,
            scale,
        });
    };

    render() {
        const { temparature, scale } = this.state;
        const celsius = scale === 'f' ? convert(temparature, toCelsius) : temparature;
        const fahrenheit = scale === 'c' ? convert(temparature, toFahrenheit) : temparature;
        return (
            <div>
                {/* <fieldset>
                    <legend> Enter temparature in Celsius: </legend>
                    <input type="text" value={temparature} onChange={this.onTemparatureChange} />
                </fieldset> */}
                <TemparatureInput
                    scale="c"
                    temparature={celsius}
                    onTemparatureChange={this.handleChange}
                />
                <TemparatureInput
                    scale="f"
                    temparature={fahrenheit}
                    onTemparatureChange={this.handleChange}
                />
                <BoilingVerdict celsius={parseFloat(temparature)} />
            </div>
        );
    }
}
