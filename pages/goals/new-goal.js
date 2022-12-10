// @mui
import { useSession, signIn } from 'next-auth/react';
import { Container } from '@mui/material';
import Page from '../../components/Page';
import { GoalForm } from '../../components/goals/GoalForm';

export default function GoalCreate() {
  const { data: session } = useSession();
  if (session) {
    return (
      <Page title="Goal: Create a new goal">
        <Container maxWidth={'lg'}>
          <GoalForm />
        </Container>
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
