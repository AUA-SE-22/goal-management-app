import GoalItem from './GoalItem';
import classes from './GoalList.module.css';

function GoalList(props) {
  return (
    <ul className={classes.list}>
      {props.goals.map((goal) => (
        <GoalItem
          key={goal.id}
          owner={goal.owner}
          title={goal.title}
          status={goal.status}
        />
      ))}
    </ul>
  );
}

export default GoalList;