import { useState } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Button, Grid, Link } from '@mui/material';
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
        <Button variant="contained" sx={{ ml: 'auto', mb: 2 }}>
          <NextLink href="goals/new-goal" passHref legacyBehavior>
            <Link underline="none" color="inherit">
              New Goal
            </Link>
          </NextLink>
        </Button>
      </Box>
      <Grid container spacing={5}>
        {goals.map((goal) => (
          <Grid item key={goal.id} xs={6}>
            <GoalItem isEmployer={isEmployer} goal={goal} handleDetails={handleDetails} />
          </Grid>
        ))}
      </Grid>
      <GoalDetailModal open={open} handleClose={handleClose} />
    </>
  );
}

GoalList.propTypes = {
  goals: PropTypes.array,
  isEmployer: PropTypes.bool,
};

export default GoalList;
