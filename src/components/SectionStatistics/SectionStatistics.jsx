import PropTypes from 'prop-types';
import { ListStatisticsOptions } from "./Statistics/Statistics";
import { Container, Title } from './SectionStatistics.styled';

export const SectionStatistics = ({ good, neutral, bad, total, positivePercentage }) => { 
    
    return (

        <Container>
            <Title> Statistics</Title>
            <ListStatisticsOptions good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
        </Container>
        
    );
}

SectionStatistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};