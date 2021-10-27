import React from 'react';

function Clock1({ locale }) {
    return <span className="text"> {new Date().toLocaleTimeString(locale)}</span>;
}
export default Clock1;
