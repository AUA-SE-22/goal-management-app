import Card from '../ui/Card';
import PropTypes from 'prop-types';
import { Typography, Button, Divider } from '@mui/material';

function GoalItem({ title, owner }) {
  return (
      <Card>
        <Divider>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="h2">{owner}</Typography>
        </Divider>
        <Divider>
          <Button>Show Details</Button>
        </Divider>
      </Card>
  );
}

GoalItem.propTypes = {
  title: PropTypes.string,
  owner: PropTypes.string,
};

export default GoalItem;