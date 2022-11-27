import EmployeeGoalItem from './EmployeeGoalItem';
// import EmployerGoalItem from './EmployerGoalItem';
import { ListItem } from '@mui/material';
import PropTypes from 'prop-types';


//TODO conditional rendering for employer and employee
function GoalList({ goals }) {
  return (
      <ListItem>
        {goals.map((goal) => (
          <EmployeeGoalItem key={goal.id} owner={goal.owner} title={goal.title} status={goal.status} />
        ))}
      </ListItem>
  );
}

GoalList.propTypes = {
  goals: PropTypes.array,
};

export default GoalList;
