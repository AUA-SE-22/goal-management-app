import GoalList from '../../components/goals/GoalList';
import Page from '../../components/Page';
import { useSession, signIn, signOut } from 'next-auth/react';
import GoalManagementService from '../../helpers/service/GoalManagementService';
import { useEffect, useState } from 'react';

function Goals() {
  const { data: session } = useSession();
  const [goals, setGoals] = useState([]);

  if (session) {
    useEffect(() => {
      const getGoals = async () => {
        try {
          const { data } = await GoalManagementService.getEmployeeGoals();
          setGoals(data);
        } catch (error) {
          //
        }
      };
      getGoals();
    }, []);

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
