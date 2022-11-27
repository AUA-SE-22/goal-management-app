import Card from '../ui/Card';
import PropTypes from 'prop-types';
import { Typography, Button, Divider } from '@mui/material';




function GoalItem({ title, owner }) {

  //TODO replace with a modal popping up to show the details
  function handleDetails() {
    console.log('clicked');
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
        <Button onClick={handleEdit}>Edit</Button>
        <Button onClick={handleDelete}>Delete</Button>
        </Divider>
      </Card>
  );
}

GoalItem.propTypes = {
  title: PropTypes.string,
  owner: PropTypes.string,
};

export default GoalItem;