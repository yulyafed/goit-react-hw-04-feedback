import PropTypes from 'prop-types';
import { ListFeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Container, Title } from './SectionFeedback.styled';

export const SectionFeedbacks = ({ options, onLeaveFeedback }) => { 

  return (
      
        <Container>
            <Title> Please leave feedback</Title>
            <ListFeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        </Container>
    );
}
SectionFeedbacks.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,}),
  ).isRequired,
};