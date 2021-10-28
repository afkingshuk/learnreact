import React from 'react';
import withCounter from './HOC/withCounter';

const ClickCounter = (props) => {
    const { count, incrementCount } = props;

    return (
        <div>
            <button type="button" onClick={incrementCount}>
                Clicked {count} times
            </button>
        </div>
    );
};

export default withCounter(ClickCounter);
// Since we are not doing state management here
// We are using HOC now

// /* eslint-disable react/destructuring-assignment */
// import React from 'react';

// // eslint-disable-next-line react/prefer-stateless-function
// export default class ClickCounter extends React.Component {
//     state = {
//         count: 0,
//     };

//     incrementCount = () => {
//         this.setState((prevState) => ({
//             count: prevState.count + 1,
//         }));
//     };

//     render() {
//         const { count } = this.state;
//         return (
//             <div>
//                 <button type="button" onClick={this.incrementCount}>
//                     Clicked {count} times
//                 </button>
//             </div>
//         );
//     }
// }
