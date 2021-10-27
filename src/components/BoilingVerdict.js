/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

export default function BoilingVerdict({ celsius = 0 }) {
    if (celsius >= 100) {
        return <p> The water would boil \/😁 </p>;
    }
    return <p> Water would not boile. \/🥺 </p>;
}
