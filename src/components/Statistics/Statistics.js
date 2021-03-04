import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class Statistics extends Component {

    render() {
        const state = this.props.state;
        const stateArray = this.props.stateArray;
        const totalFeedback = this.props.totalAndPositiveFeedback.total
        const positiveFeedback = this.props.totalAndPositiveFeedback.positiveFeedback
        return (
            <>
                <h2>Statistics</h2>
                {stateArray.map(item => 
                    <p key={shortid.generate()}>{item}: {state[item]}</p>
                )}
                <p>Total: {totalFeedback}</p>
                <p>Positive Feedback: {isNaN(positiveFeedback) ? 0 : positiveFeedback}%</p>
                
            </>
        );
    };
};

Statistics.propTypes = {
    State: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired
    }),
    StateArray: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    TotalAndPositiveFeedback: PropTypes.shape({
        total: PropTypes.number.isRequired,
        PositiveFeedback: PropTypes.number.isRequired
    }),
}

export default Statistics;