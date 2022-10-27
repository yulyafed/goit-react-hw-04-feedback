import { Component } from "react";
import { SectionFeedbacks } from "./SectionFeedbackOptions/SectionFeedback";
import { SectionStatistics } from "./SectionStatistics/SectionStatistics";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = [
    {id: 0, name: 'Good'},
    {id: 1, name: 'Neutral'},
    {id: 2, name: 'Bad'},
    ];     

  updateFeedbackOptions = (key) => {

    this.setState(prevState => {

      return {

        good: key === 0 ? prevState.good + 1 : prevState.good,
        neutral: key === 1 ? prevState.neutral + 1 : prevState.neutral,
        bad: key === 2 ? prevState.bad + 1 : prevState.bad,

      };
    });
  };

  countTotalFeedback = ({ good, neutral, bad }) => {

    return (good + neutral + bad);

  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {

    const total = good + neutral + bad;

    if (total === 0) {
      return 100;
    }

    return Math.round(good * 100 / total);
  };

  render() {

    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    
       return (
      
        <>
           <SectionFeedbacks options={this.options} onLeaveFeedback={this.updateFeedbackOptions}/>
           <SectionStatistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback({good, neutral, bad})} positivePercentage={this.countPositiveFeedbackPercentage}/>
        </>
      
    );
  };
}
  
