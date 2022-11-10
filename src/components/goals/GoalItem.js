import Card from '../ui/Card';
import classes from './GoalItem.module.css';

function GoalItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <span>{props.owner}</span>
        </div>
        <div className={classes.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default GoalItem;