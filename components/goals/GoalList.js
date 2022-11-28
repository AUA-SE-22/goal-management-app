import GoalItem from './GoalItem';
import GoalDetailModal from './GoalDetailModal';
import { ListItem, Divider } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

function GoalList({ goals, isEmployer }) {
  const [open, setOpen] = useState(false);

  function handleDetails() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Divider>
      <ListItem>
        {goals.map((goal) => (
          <GoalItem key={goal.id} isEmployer={isEmployer} owner={goal.owner} title={goal.title} status={goal.status} handleDetails={handleDetails} />
        ))}
      </ListItem>
      <GoalDetailModal open={open} handleClose={handleClose} />
    </Divider>
  );
}

GoalList.propTypes = {
  goals: PropTypes.array,
  isEmployer: PropTypes.bool,
};

export default GoalList;
