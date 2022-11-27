import Card from '../ui/Card';
import PropTypes from 'prop-types';
import { Typography, Button, Divider } from '@mui/material';

function EmployerGoalItem({ title, owner }) {

  //TODO replace with a modal popping up to show the details
  function handleDetails() {
    console.log('clicked');
  }

    //TODO replace with an endpoint to approve the goal
    function handleApprove() {
      console.log('Approved');
    }

  //TODO replace with an endpoint to reject the goal
  function handleReject() {
    console.log('Rejected');
  }

  return (
      <Card>
        <Divider>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="h2">{owner}</Typography>
        </Divider>
        <Divider>
        <Button onClick={handleDetails}>Details</Button>
        <Button onClick={handleApprove}>Approve</Button>
        <Button onClick={handleReject}>Reject</Button>
        </Divider>
      </Card>
  );
}

EmployerGoalItem.propTypes = {
  title: PropTypes.string,
  owner: PropTypes.string,
};

export default EmployerGoalItem;