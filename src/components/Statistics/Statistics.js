import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class Statistics extends Component {

    render() {
        const state = this.props.State;
        const StateArray = this.props.StateArray;
        const TotalFeedback = this.props.TotalAndPositiveFeedback.total
        const PositiveFeedback = this.props.TotalAndPositiveFeedback.PositiveFeedback
        return (
            <>
                <h2>Statistics</h2>
                {StateArray.map(item => 
                    <p key={shortid.generate()}>{item}: {state[item]}</p>
                )}
                <p>Total: {TotalFeedback}</p>
                <p>Positive Feedback: {isNaN(PositiveFeedback) ? 0 : PositiveFeedback}%</p>
                
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