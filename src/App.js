import React, { Component } from "react";
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

import './App.css';

class FidbackVidjet extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonClickHandler = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((feedback, value) => feedback + value)
    return this.countPositiveFeedbackPercentage(total)
  };

  countPositiveFeedbackPercentage = (total) => {
    const positiveFeedback = (this.state.good * 100) / total
    return {total: total, positiveFeedback: positiveFeedback}
  };
  
  render() {
    const stateArray = Object.keys(this.state);
    const totalAndPositiveFeedback = this.countTotalFeedback();
    console.log(totalAndPositiveFeedback.total)
    return (
      <section className="section" title="">
        <FeedbackOptions
          stateArray={stateArray}
          buttonClickHandler={this.buttonClickHandler}
        />
        {totalAndPositiveFeedback.total > 0 ?
          <Statistics
            state={this.state}
            stateArray={stateArray}
            totalAndPositiveFeedback={totalAndPositiveFeedback}
          />
          :
          <Notification message={"No feedback given"}/>
        }
      </section>
    )
  };
};

export default FidbackVidjet;
