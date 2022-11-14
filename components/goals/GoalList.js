import GoalItem from './GoalItem';
import { ListItemButton } from '@mui/material';
import PropTypes from 'prop-types';

function GoalList({ goals }) {
  return (
    <ListItemButton href="#">
      {goals.map((goal) => (
        <GoalItem key={goal.id} owner={goal.owner} title={goal.title} status={goal.status} />
      ))}
    </ListItemButton>
  );
}

GoalList.propTypes = {
  goals: PropTypes.array,
};

export default GoalList;
