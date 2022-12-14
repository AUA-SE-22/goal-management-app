import PropTypes from 'prop-types';
import { Typography, Button, Divider, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import GoalManagementService from '../../helpers/service/GoalManagementService';
import { GOAL_STATUS, GOAL_STATUS_STYLES } from '../../helpers/constants/goal';
import { useSnackbar } from 'notistack';
import Label from '../../components/Label';

GoalItem.propTypes = {
  goal: PropTypes.object,
};
function GoalItem({ isEmployer, goal, handleDetails }) {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const { id, name, detail, status } = goal || {};

  const handleApprove = async () => {
    try {
      await GoalManagementService.editEmployerGoal(id, { ...goal, status: GOAL_STATUS.accepted });
      enqueueSnackbar('Goal is Approved');
      router.reload(window.location.pathname);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async () => {
    try {
      await GoalManagementService.editEmployerGoal(id, { ...goal, status: GOAL_STATUS.rejected });
      enqueueSnackbar('Goal is Rejected');
      router.reload(window.location.pathname);
    } catch (error) {
      console.error(error);
    }
  };
  const handleEdit = () => {
    router.push(`/goals/${id}/edit`);
  };

  return (
    <Card sx={{ m: 2, height: 1, textAlign: 'center', position: 'relative' }}>
      <Grid container direction="column" sx={{ height: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Label
          color={GOAL_STATUS_STYLES[`${status}`]?.color}
          sx={{ textTransform: 'uppercase', position: 'absolute', top: 10, right: 10 }}
        >
          {status}
        </Label>
        <Grid item sx={{ flexGrow: 1, mt: 2 }}>
          <Typography variant="h5" sx={{ my: 3 }}>
            {name}
          </Typography>
          <Typography variant="h6">{detail}</Typography>
        </Grid>
        <Grid item>
          <Divider sx={{ my: 2 }} />
          <Button onClick={handleDetails}>Details</Button>
          <Button onClick={() => (isEmployer ? handleApprove : handleEdit)()}>{isEmployer ? 'Approve' : 'Edit'}</Button>
          {isEmployer && <Button onClick={() => handleReject()}>Reject</Button>}
        </Grid>
      </Grid>
    </Card>
  );
}

GoalItem.propTypes = {
  title: PropTypes.string,
  owner: PropTypes.string,
  isEmployer: PropTypes.bool,
  handleDetails: PropTypes.func,
};

export default GoalItem;
