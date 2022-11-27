import GoalList from '../components/goals/GoalList';
import Page from '../components/Page';

//TODO to be replaced by the fetched data
const goals = [
  { id: 1, owner: 'Erik', title: 'Erik goal', status: 'pending' },
  { id: 1, owner: 'Zara', title: 'Zara goal', status: 'approved' },
];

function Goals() {
  return (
    <Page title="SE: Goal App">
      <GoalList goals={goals} />
    </Page>
  );
}

export default Goals;
