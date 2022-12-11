import GoalList from '../../sections/goals/GoalList';
import Page from '../../components/Page';
import GoalManagementService from '../../helpers/service/GoalManagementService';
import { useEffect, useState } from 'react';
import { USER_ROLE } from '../../helpers/constants/user';

function Goals() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const getGoals = async () => {
      try {
        const { data } = await GoalManagementService.getEmployeeGoals();
        setGoals(data);
      } catch (error) {
        console.log(error);
      }
    };
    getGoals();
  }, []);

  return (
    <Page title="SE: Goal App">
      <GoalList goals={goals} isEmployer={'role' === USER_ROLE.employer} />
    </Page>
  );
}

export default Goals;
