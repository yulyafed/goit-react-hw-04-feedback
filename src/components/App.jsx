import { useState } from 'react';
import { SectionFeedbacks } from './SectionFeedbackOptions/SectionFeedback';
import { SectionStatistics } from './SectionStatistics/SectionStatistics';

export default function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = [
    { id: 0, name: 'Good' },
    { id: 1, name: 'Neutral' },
    { id: 2, name: 'Bad' },
  ];

  const updateFeedbackOptions = key => {
    if (key === 0) {
      setGood(good + 1);
    } else if (key === 1) {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;

    if (total === 0) {
      return 100;
    }

    return Math.round((good * 100) / total);
  };

  return (
    <>
      <SectionFeedbacks
        options={options}
        onLeaveFeedback={updateFeedbackOptions}
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
}
