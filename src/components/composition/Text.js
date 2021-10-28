import React from 'react';

export default function Text({ addEmoji, addBracket }) {
    let text = 'I am JS';

    if (addEmoji) {
        text = addEmoji(text, '❤');
    }

    if (addBracket) {
        text = addBracket(text);
    }

    // return <div>{addEmoji ? addEmoji(text, '❤') : text}</div>;

    return <div> {text} </div>;
}
