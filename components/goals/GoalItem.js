import Card from '../ui/Card';
import PropTypes from 'prop-types';
import { Typography, Button, Divider } from '@mui/material';

function GoalItem({ title, owner, isEmployer }) {

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

      //TODO modify to enable editing
      function handleEdit() {
        console.log('to edit');
      }
  
    //TODO replace with an endpoint to delete the goal
    function handleDelete() {
      console.log('deleted');
    }
  

  return (
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
  );
}

GoalItem.propTypes = {
  title: PropTypes.string,
  owner: PropTypes.string,
  isEmployer: PropTypes.bool,
};

export default GoalItem;