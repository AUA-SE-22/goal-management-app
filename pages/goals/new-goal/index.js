// @mui
import { Container } from '@mui/material';
import Page from '../../../components/Page';
import RoleBasedGuard from '../../../guards/RoleBasedGuard';
import { USER_ROLE } from '../../../helpers/constants/user';
import { GoalForm } from '../../../sections/goals/GoalForm';

export default function GoalCreate() {
  return (
    <RoleBasedGuard accessibleRoles={[USER_ROLE.employee]}>
      <Page title="Goal: Create a new goal">
        <Container maxWidth={'lg'}>
          <GoalForm />
        </Container>
      </Page>
    </RoleBasedGuard>
  );
}
