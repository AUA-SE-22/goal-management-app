import GoalItem from './GoalItem';
// import EmployerGoalItem from './EmployerGoalItem';
import { ListItem } from '@mui/material';
import PropTypes from 'prop-types';


//TODO conditional rendering for employer and employee
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
