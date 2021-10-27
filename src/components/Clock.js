/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from './Button';

// class component of react
// old school method ... hooks are new method

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), locale: 'bn-BD' };
    }
    // alternative mathoed of the constructor:
    // state = { date: new Date()};

    componentDidMount() {
        this.ClockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.ClockTimer);
    }

    // eslint-disable-next-line class-methods-use-this
    // best practice is to use arrow function
    // Or we can use .bind()
    handleClick = (locale) => {
        console.log('The button is clicked !');
        this.setState({
            locale,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    // alternative method when state updates may be asynchronous
    // tick(){
    //     this.setState((state, props) => {
    //     })
    // }

    render() {
        // console.log('Clock component rendered ');
        const { date, locale } = this.state;

        let button;

        if (locale === 'bn-BD') {
            button = (
                <div>
                    <Button change={this.handleClick} locale="en-US" show={false}>
                        Click here for US
                    </Button>
                </div>
            );
        } else {
            button = (
                <div>
                    <Button change={this.handleClick} locale="bn-BD" show>
                        Click here for BD
                    </Button>
                </div>
            );
        }

        // const { locale } = this.props;
        return (
            <div>
                <span className="text">{date.toLocaleTimeString(locale)}</span>
                {/* <Button change={this.handleClick} locale="en-US">
                    Click here
                </Button> */}
                {
                    // ternary operator is another alternative
                    // locale === 'bn-BD' ? (
                    //     <div>
                    //         <Button change={this.handleClick} locale="en-US">
                    //             Click here for BD
                    //         </Button>
                    //     </div>
                    // ) : (
                    //     <div>
                    //         <Button change={this.handleClick} locale="bn-BD">
                    //             Click here for BD
                    //         </Button>
                    //     </div>
                    // )
                }

                {button}
            </div>
        );
    }
}

export default Clock;
