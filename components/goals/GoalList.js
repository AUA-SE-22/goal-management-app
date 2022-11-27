import GoalItem from './GoalItem';
import { ListItem } from '@mui/material';
import PropTypes from 'prop-types';

function GoalList({ goals, isEmployer }) {
  return (
      <ListItem>
        {goals.map((goal) => (
          <GoalItem key={goal.id} isEmployer={isEmployer} owner={goal.owner} title={goal.title} status={goal.status} />
        ))}
      </ListItem>
  );
}

GoalList.propTypes = {
  goals: PropTypes.array,
  isEmployer: PropTypes.bool,
};

export default GoalList;
