import React from 'react';

class Button extends React.Component {
    // not a good practice in low to mid level component
    shouldComponentUpdate(nextProps) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;
        if (currentChange === nextChange && nextLocale === currentLocale) {
            return false;
        }
        return true;
    }

    render() {
        // console.log('Button component rendered ');
        const { change, locale, show } = this.props;
        return (
            <>
                <button type="button" onClick={() => change(locale)}>
                    {locale === 'bn-BD' ? 'পরিবর্তন করুন' : 'Change'}
                </button>
                {show && <p> Show </p>}
            </>
        );
    }
}

export default Button;
