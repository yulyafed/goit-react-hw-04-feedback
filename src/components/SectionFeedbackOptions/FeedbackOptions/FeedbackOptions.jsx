import PropTypes from 'prop-types';
import { List, Item, Button } from './FeedbackOptions.styled';

export const ListFeedbackOptions = ({
  options,
  onLeaveGoodFeedback,
  onLeaveNeutralFeedback,
  onLeaveBadFeedback,
}) => {
  return (
    <List>
      {options.map(option => (
        <Item key={option.id}>
          <Button
            onClick={() => {
              onLeaveGoodFeedback(option.id);
              onLeaveNeutralFeedback(option.id);
              onLeaveBadFeedback(option.id);
            }}
          >
            {option.name}
          </Button>
        </Item>
      ))}
    </List>
  );
}; 

ListFeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,}),
  ).isRequired,
};