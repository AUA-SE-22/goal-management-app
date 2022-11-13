import GoalList from "../../components/goals/GoalList";

//TODO to be replaced by the fetched data
const goals = [
  {id: 1, owner: 'Erik', title: 'Erik goal', status: 'pending'}, 
  {id: 1, owner: 'Zara', title: 'Zara goal', status: 'approved'}
];

function Goals() {

    return <GoalList goals={goals}/>;
  }
  
  export default Goals;