import GoalList from '../../components/goals/GoalList';
import Page from '../../components/Page';
import { useSession, signIn } from 'next-auth/react';
import GoalManagementService from '../../helpers/service/GoalManagementService';
import { useEffect, useState } from 'react';

function Goals() {
  const { data: token } = useSession();
  const [goals, setGoals] = useState([]);

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

  if (token) {
    const accessToken = token.accessToken;
    const payload = JSON.parse(Buffer.from(accessToken.split('.')[1], 'base64').toString());
    const role = payload.realm_access.roles[1];
    return (
      <Page title="SE: Goal App">
        <GoalList goals={goals} isEmployer={role==='Employer'} />
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
