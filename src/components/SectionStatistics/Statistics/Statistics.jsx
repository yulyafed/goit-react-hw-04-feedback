import PropTypes from 'prop-types';
import { RenderNoFeedback } from "components/NotificationMessage/NotificationMessage";
import { Text } from './Statistics.styled';

export const ListStatisticsOptions = ({ good, neutral, bad, total, positivePercentage }) => {
    
    if (total > 0) {

        return (
            <>
                <Text> Good: {good}</Text>
                <Text> Neutral:{neutral}</Text>
                <Text> Bad: {bad} </Text>
                <Text> Total:{total}</Text>
                <Text> Positive feedback:{positivePercentage({ good, neutral, bad })}%</Text>
            </>
        );
    };

        return (<RenderNoFeedback />);
}

ListStatisticsOptions.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};