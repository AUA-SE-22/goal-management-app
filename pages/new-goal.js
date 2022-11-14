import NewGoalForm from '../components/goals/NewGoalForm';
import Page from '../components/Page';

function NewGoal() {
  //TODO change to a post request to an endpoint
  function addGoalHandler(enteredGoalData) {
    console.log(enteredGoalData);
  }

  return (
    <Page title="SE: Goal App">
      <NewGoalForm onAddGoal={addGoalHandler} />
    </Page>
  );
}

export default NewGoal;
