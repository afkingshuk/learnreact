import React from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';
// import Clock from './components/timer';
// import Clock2 from './components/timer2';
import Clock from './components/Clock';
import HoverCounter from './components/HoverCounter';
// import Text from './components/inheritance/Text';
import logo from './logo.svg';

function App() {
    // eslint-disable-next-line no-unused-vars
    const quantities = [1, 2, 3];
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <div>
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Hello <code>@</code> <Clock locale="bn-BD" />
                            {
                                // <ClockList quantities={quantities} />
                                // ClockList ...
                            }
                        </p>
                        <div>
                            {/* 
                            <Forms />
                            <CalculatorPage /> 
                            */}
                            {/* <Text />
                            <Emoji>{({ addEmoji }) => <Text addEmoji={addEmoji} />}</Emoji>
                            <Emoji>
                                {({ addEmoji }) => (
                                    <Bracket>
                                        {({ addBracket }) => (
                                            <Text addEmoji={addEmoji} addBracket={addBracket} />
                                        )}
                                    </Bracket>
                                )}                                
                            </Emoji> */}
                            <ClickCounter />
                            <HoverCounter />
                        </div>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
