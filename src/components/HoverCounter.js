/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import withCounter from './HOC/withCounter';

const HoverCounter = (props) => {
    const { count, incrementCount } = props;

    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
        </div>
    );
};

export default withCounter(HoverCounter);

// Since we are not doing state management here
// We are using HOC now

// /* eslint-disable jsx-a11y/mouse-events-have-key-events */
// /* eslint-disable react/destructuring-assignment */
// import React from 'react';

// // eslint-disable-next-line react/prefer-stateless-function
// export default class HoverCounter extends React.Component {
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
//             // eslint-disable-next-line react/jsx-no-comment-textnodes
//             <div>
//                 <h1 onMouseOver={this.incrementCount}>Hovered {count} times</h1>
//             </div>
//         );
//     }
// }
