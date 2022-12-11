import GoalList from '../../components/goals/GoalList';
import Page from '../../components/Page';
import { useSession, signIn } from 'next-auth/react';
import GoalManagementService from '../../helpers/service/GoalManagementService';
import { useEffect, useState } from 'react';

function Goals() {
  const { data: session } = useSession();
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const getGoals = async () => {
      try {
        const { data } = await GoalManagementService.getEmployeeGoals();
        setGoals(data);
      } catch (error) {
        console.error(error);
      }
    };
    getGoals();
  }, []);

  if (session) {
    return (
      <Page title="SE: Goal App">
        <GoalList goals={goals} />
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

export default Goals;
