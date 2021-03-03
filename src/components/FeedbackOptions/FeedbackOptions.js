import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import styles from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {

    handleClick = e => {
        e.preventDefault();

        this.props.ButtonClickHandler(e.currentTarget.innerText)
    };
    
    render() {
        return (
            <>
                <h1>Please leave feedback</h1>
                {this.props.StateArray.map(item => 
                    <button
                        className={styles.button}
                        type="button"
                        key={shortid.generate()}
                        onClick={this.handleClick}
                    >
                        {item}
                    </button>
                )}
            </>
        );
    };
};

FeedbackOptions.propTypes = {
    StateArray: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    ButtonClickHandler: PropTypes.func.isRequired,
}

export default FeedbackOptions;