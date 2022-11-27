import GoalItem from './GoalItem';
import { ListItem } from '@mui/material';
import PropTypes from 'prop-types';

function GoalList({ goals }) {
  return (
      <ListItem>
        {goals.map((goal) => (
          <GoalItem key={goal.id} owner={goal.owner} title={goal.title} status={goal.status} />
        ))}
      </ListItem>
  );
}

GoalList.propTypes = {
  goals: PropTypes.array,
};

export default GoalList;
