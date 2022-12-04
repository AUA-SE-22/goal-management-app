import GoalList from '../components/goals/GoalList';
import Page from '../components/Page';
import { useSession, signIn, signOut } from 'next-auth/react';

//TODO to be replaced by the fetched data
const goals = [
  { id: 1, owner: 'Erik', title: 'Erik goal', status: 'pending' },
  { id: 1, owner: 'Zara', title: 'Zara goal', status: 'approved' },
];

function Goals() {
  const { data: session } = useSession();
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
