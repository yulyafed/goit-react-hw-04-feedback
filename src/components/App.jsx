import { useState } from "react";
import { SectionFeedbacks } from "./SectionFeedbackOptions/SectionFeedback";
import { SectionStatistics } from "./SectionStatistics/SectionStatistics";


export default function App() {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  

  const options = [
    {id: 0, name: 'Good'},
    {id: 1, name: 'Neutral'},
    {id: 2, name: 'Bad'},
    ];     

  const updateFeedbackGoodOption = key => {
    setGood({ good: key === 0 ? good + 1 : good })
    
  };
  const updateFeedbackNeutralOption = key => {
    setNeutral({ neutral: key === 0 ? neutral + 1 : neutral });
    
  };
  const updateFeedbackBadOption = key => {
    setBad({bad: key === 0 ? bad + 1 : bad})
    
  };
  //  updateFeedbackOptions = (key) => {

  //   this.setState(prevState => {

  //     return {

  //       good: key === 0 ? prevState.good + 1 : prevState.good,
  //       neutral: key === 1 ? prevState.neutral + 1 : prevState.neutral,
  //       bad: key === 2 ? prevState.bad + 1 : prevState.bad,

  //     };
  //   });
  // };

  const countTotalFeedback = ({ good, neutral, bad }) => {

    return (good + neutral + bad);

  };

  const countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {

    const total = good + neutral + bad;

    if (total === 0) {
      return 100;
    }

    return Math.round(good * 100 / total);
  };

      
       return (
         <>
           <SectionFeedbacks
             options={options}
             onLeaveGoodFeedback={updateFeedbackGoodOption}
             onLeaveNeutralFeedback={updateFeedbackNeutralOption}
             onLeaveBadFeedback={updateFeedbackBadOption}
           />
           
           <SectionStatistics
             good={good}
             neutral={neutral}
             bad={bad}
             total={countTotalFeedback({ good, neutral, bad })}
             positivePercentage={countPositiveFeedbackPercentage}
           />
         </>
       );
  };

  
