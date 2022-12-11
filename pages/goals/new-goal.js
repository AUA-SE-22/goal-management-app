// @mui
import { Container } from '@mui/material';
import Page from '../../components/Page';
import { GoalForm } from '../../sections/goals/GoalForm';

export default function GoalCreate() {
  return (
    <Page title="Goal: Create a new goal">
      <Container maxWidth={'lg'}>
        <GoalForm />
      </Container>
    </Page>
  );
}
