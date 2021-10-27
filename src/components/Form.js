/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class Form extends React.Component {
    state = {
        title: 'Title',
        text: 'JS is awesome',
        library: 'React',
        isAwesome: true,
    };

    handleChange = (e) => {
        console.log(e.target.value);
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                text: e.target.value,
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                library: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                isAwesome: e.target.checked,
            });
        } else {
            console.log('nothing');
        }
    };

    submitHandler = (e) => {
        const { title, text, library, isAwesome } = this.state;
        e.preventDefault();
        console.log(title, text, library, isAwesome);
    };

    render() {
        const { title, text, library, isAwesome } = this.state;
        let awesomeText = '';
        // eslint-disable-next-line no-unused-expressions
        isAwesome ? (awesomeText = ' is Awesome') : (awesomeText = ' is meh');
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        placeholder="Enter Title"
                        value={title}
                        onChange={this.handleChange}
                    />

                    <textarea name="text" value={text} onChange={this.handleChange} />

                    <select value={library} onChange={this.handleChange}>
                        <option value="React">ReactJS</option>
                        <option value="Angular">AngularJS</option>
                    </select>
                    <input type="checkbox" checked={isAwesome} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />

                    <p> {`${title}: \n ${library} ${awesomeText}`} </p>
                </form>
            </div>
        );
    }
}
