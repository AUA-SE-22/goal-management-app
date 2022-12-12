import PropTypes from 'prop-types';
import { Typography, Button, Divider, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';

GoalItem.propTypes = {
  goal: PropTypes.object,
};
function GoalItem({ isEmployer, goal, handleDetails }) {
  const push = useRouter();

  const { id, name, detail } = goal || {};
  //TODO replace with an endpoint to approve the goal
  const handleApprove = () => {
    console.log('Approved');
  };

  //TODO replace with an endpoint to reject the goal
  const handleReject = () => {
    console.log('Rejected');
  };

  //TODO modify to enable editing
  const handleEdit = () => {
    push(`/goals/${id}/edit`);
  };

  //TODO replace with an endpoint to delete the goal
  const handleDelete = () => {
    console.log('deleted');
  };

  return (
    <Card sx={{ m: 2, height: 1, textAlign: 'center' }}>
      <Grid container direction="column" sx={{ height: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Grid item sx={{ flexGrow: 1 }}>
          <Typography variant="h5" sx={{ my: 3 }}>
            {name}
          </Typography>
          <Typography variant="h6">{detail}</Typography>
        </Grid>
        <Grid item>
          <Divider sx={{ my: 2 }} />
          <Button onClick={handleDetails}>Details</Button>
          <Button onClick={isEmployer ? handleApprove : handleEdit}>{isEmployer ? 'Approve' : 'Edit'}</Button>
          <Button onClick={isEmployer ? handleReject : handleDelete}>{isEmployer ? 'Reject' : 'Delete'}</Button>
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
