import PropTypes from 'prop-types';
import { ListFeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Container, Title } from './SectionFeedback.styled';

export const SectionFeedbacks = ({
  options,
  onLeaveGoodFeedback,
  onLeaveNeutralFeedback,
  onLeaveBadFeedback,
}) => {
  return (
    <Container>
      <Title> Please leave feedback</Title>
      <ListFeedbackOptions
        options={options}
        onLeaveGoodFeedback={onLeaveGoodFeedback}
        onLeaveNeutralFeedback={onLeaveNeutralFeedback}
        onLeaveBadFeedback={onLeaveBadFeedback}
      />
    </Container>
  );
};
SectionFeedbacks.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,}),
  ).isRequired,
};