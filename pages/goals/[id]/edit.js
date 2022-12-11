import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// @mui
import { Container } from '@mui/material';
import { GoalForm } from '../../../components/goals/GoalForm';
import Page from '../../../components/Page';
import GoalManagementService from '../../../helpers/service/GoalManagementService';
import RoleBasedGuard from '../../../guards/RoleBasedGuard';
import { USER_ROLE } from '../../../helpers/constants/user';

export default function GoalEdit() {
  const { query } = useRouter();

  const { id } = query;
  const [currentGoal, setCurrentGoal] = useState();

  useEffect(() => {
    const getEmployeeGoal = async () => {
      try {
        const { data } = await GoalManagementService.getEmployeeGoal(id);
        setCurrentGoal(data);
      } catch (error) {
        //
      }
    };
    getEmployeeGoal();
  }, [id]);

  return (
    <RoleBasedGuard accessibleRoles={[USER_ROLE.employee]}>
      <Page title="Goal: Edit a new goal">
        <Container maxWidth={'lg'}>
          <GoalForm currentGoal={currentGoal} />
        </Container>
      </Page>
    </RoleBasedGuard>
  );
}
