const GoalList = dynamic(() => import('../../sections/goals/GoalList'), { ssr: false });
import Page from '../../components/Page';
import GoalManagementService from '../../helpers/service/GoalManagementService';
import { useEffect, useState } from 'react';
import { USER_ROLE } from '../../helpers/constants/user';
import dynamic from 'next/dynamic';

const useCurrentRole = () => {
  if (typeof window !== 'undefined') return localStorage?.getItem('userRole');
};

function Goals() {
  const [goals, setGoals] = useState([]);
  const currentRole = useCurrentRole();
  const isEmployer = currentRole === USER_ROLE.employer;

  useEffect(() => {
    const getGoals = async () => {
      try {
        const { data } = await GoalManagementService[isEmployer ? 'getEmployerGoals' : 'getEmployeeGoals']();
        setGoals(data);
      } catch (error) {
        console.log(error);
      }
    };
    getGoals();
  }, []);

  return (
    <Page title="SE: Goal App">
      <GoalList goals={goals} isEmployer={isEmployer} />
    </Page>
  );
}

export default Goals;
