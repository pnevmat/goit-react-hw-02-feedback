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

  ButtonClickHandler = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((Feedback, value) => Feedback + value)
    return this.countPositiveFeedbackPercentage(total)
  };

  countPositiveFeedbackPercentage = (total) => {
    const PositiveFeedback = (this.state.good * 100) / total
    return {total: total, PositiveFeedback: PositiveFeedback}
  };
  
  render() {
    const StateArray = Object.keys(this.state);
    const TotalAndPositiveFeedback = this.countTotalFeedback();
    console.log(TotalAndPositiveFeedback.total)
    return (
      <section className="section" title="">
        <FeedbackOptions
          StateArray={StateArray}
          ButtonClickHandler={this.ButtonClickHandler}
        />
        {TotalAndPositiveFeedback.total > 0 ?
          <Statistics
            State={this.state}
            StateArray={StateArray}
            TotalAndPositiveFeedback={TotalAndPositiveFeedback}
          />
          :
          <Notification message={"No feedback given"}/>
        }
      </section>
    )
  };
};

export default FidbackVidjet;
