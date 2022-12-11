import NewGoalForm from '../components/goals/NewGoalForm';
import Page from '../components/Page';
import { useSession, signIn } from 'next-auth/react';

function NewGoal() {
  //TODO change to a post request to an endpoint
  function addGoalHandler(enteredGoalData) {
    console.log(enteredGoalData);
  }

  const { data: session } = useSession();
  if (session) {
    return (
      <Page title="SE: Goal App">
        <NewGoalForm onAddGoal={addGoalHandler} />
      </Page>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

export default NewGoal;
