import PropTypes from 'prop-types';
import { Typography, Button, Divider, Card } from '@mui/material';

function GoalItem({ title, owner, isEmployer, handleDetails }) {
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
    console.log('to edit');
  };

  //TODO replace with an endpoint to delete the goal
  const handleDelete = () => {
    console.log('deleted');
  };

  return (
    <Card sx={{ m: 2 }}>
      <Divider>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="h2">{owner}</Typography>
      </Divider>
      <Divider>
        <Button onClick={handleDetails}>Details</Button>
        <Button onClick={isEmployer ? handleApprove : handleEdit}>{isEmployer ? 'Approve' : 'Edit'}</Button>
        <Button onClick={isEmployer ? handleReject : handleDelete}>{isEmployer ? 'Reject' : 'Delete'}</Button>
      </Divider>
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
