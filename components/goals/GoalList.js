import GoalItem from './GoalItem';
import { ListItemButton } from '@mui/material';
import PropTypes from 'prop-types';

function GoalList(props) {
  return (
    <ListItemButton href="#">
      {props.goals.map((goal) => (
        <GoalItem key={goal.id} owner={goal.owner} title={goal.title} status={goal.status} />
      ))}
    </ListItemButton>
  );
}

GoalList.propTypes = {
  goals: PropTypes.array,
};

export default GoalList;
