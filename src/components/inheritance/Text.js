import Emoji from './Emoji';

// Problem of Inheritance in REACTJS

// components are tightly coupled
// from child, its not clear what parent does
// not clear about the parent child relation
// future compoents are tihgtly coupled
// nested extend - child that already extend other parent

// Solution: Composition

export default class Text extends Emoji {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const decoratedText = this.addEmoji('I am JS', '❤');

        return super.render(decoratedText);
    }
}
