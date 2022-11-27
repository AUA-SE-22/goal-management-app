import Card from '../ui/Card';
import GoalDetailModal from './GoalDetailModal';
import PropTypes from 'prop-types';
import { Typography, Button, Divider } from '@mui/material';
import { useState } from 'react';

function GoalItem({ title, owner, isEmployer }) {
  const [open, setOpen] = useState(false);

  function handleDetails() {
    setOpen(true);
  }

  //TODO replace with an endpoint to approve the goal
  function handleApprove() {
    console.log('Approved');
  }

  //TODO replace with an endpoint to reject the goal
  function handleReject() {
    console.log('Rejected');
  }

  //TODO modify to enable editing
  function handleEdit() {
    console.log('to edit');
  }

  //TODO replace with an endpoint to delete the goal
  function handleDelete() {
    console.log('deleted');
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Divider>
      <Card>
        <Divider>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="h2">{owner}</Typography>
        </Divider>
        <Divider>
          <Button onClick={handleDetails}>Details</Button>
          {isEmployer && <Button onClick={handleApprove}>Approve</Button>}
          {isEmployer && <Button onClick={handleReject}>Reject</Button>}
          {!isEmployer && <Button onClick={handleEdit}>Edit</Button>}
          {!isEmployer && <Button onClick={handleDelete}>Delete</Button>}
        </Divider>
      </Card>
      <GoalDetailModal open={open} handleClose={handleClose} />
    </Divider>
  );
}

GoalItem.propTypes = {
  title: PropTypes.string,
  owner: PropTypes.string,
  isEmployer: PropTypes.bool,
};

export default GoalItem;