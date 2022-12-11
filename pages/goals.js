import GoalList from '../components/goals/GoalList';
import Page from '../components/Page';
import { useSession, signIn } from 'next-auth/react';

//TODO to be replaced by the fetched data
const goals = [
  { id: 1, owner: 'Erik', title: 'Erik goal', status: 'pending' },
  { id: 1, owner: 'Zara', title: 'Zara goal', status: 'approved' },
];

function Goals() {
  const { data: token } = useSession();
  if (token) {
    const accessToken = token.accessToken;
    const payload = JSON.parse(Buffer.from(accessToken.split('.')[1], 'base64').toString());
    const role = payload.realm_access.roles[1];
    console.log(role);
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
