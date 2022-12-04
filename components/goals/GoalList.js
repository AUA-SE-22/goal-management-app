import { useState } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Button, Link, ListItem } from '@mui/material';
import { Box } from '@mui/system';
import GoalItem from './GoalItem';
import GoalDetailModal from './GoalDetailModal';

function GoalList({ goals, isEmployer }) {
  const [open, setOpen] = useState(false);

  const handleDetails = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Button variant="contained" sx={{ ml: 'auto' }}>
          <NextLink href="/new-goal" passHref legacyBehavior>
            <Link underline="none" color="inherit">
              New Goal
            </Link>
          </NextLink>
        </Button>
      </Box>
      <ListItem sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {goals.map((goal) => (
          <GoalItem
            key={goal.id}
            isEmployer={isEmployer}
            owner={goal.owner}
            title={goal.title}
            status={goal.status}
            handleDetails={handleDetails}
          />
        ))}
      </ListItem>
      <GoalDetailModal open={open} handleClose={handleClose} />
    </>
  );
}

GoalList.propTypes = {
  goals: PropTypes.array,
  isEmployer: PropTypes.bool,
};

export default GoalList;
