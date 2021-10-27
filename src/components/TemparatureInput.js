import React from 'react';

const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit',
};

export default function TemparatureInput({ temparature, scale, onTemparatureChange }) {
    return (
        <fieldset>
            <legend> Enter temparature in {scaleName[scale]}: </legend>
            <input
                type="text"
                value={temparature}
                onChange={(e) => onTemparatureChange(e, scale)}
            />
        </fieldset>
    );
}

// since we will user top down state management.
// export default class TemparatureInput extends React.Component {

//     state = {
//         temparature: '',
//     };

//     onTemparatureChange = (e) => {
//         this.setState({
//             temparature: e.target.value,
//         });
//     };

//     render() {
//         const { temparature } = this.state;
//         const { scale } = this.props;

//         return (
//             <div>
//                 <fieldset>
//                     <legend> Enter temparature in {scaleName[scale]}: </legend>
//                     <input type="text" value={temparature} onChange={this.onTemparatureChange} />
//                 </fieldset>
//             </div>
//         );
//     }
// }
