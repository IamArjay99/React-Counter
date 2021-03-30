import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

    render() {
        const { title, color, onHandleEvent, actionName } = this.props;
        return (
            <button className={color} onClick={() => onHandleEvent(actionName)}>{title}</button>
        );
    }

}

Button.defaultProps = {
    title: "Button"
}

Button.propTypes = {
    title: PropTypes.string.isRequired
}

export default Button;