import { useState } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Button, Grid, Link } from '@mui/material';
import { Box } from '@mui/system';
import GoalItem from './GoalItem';
import GoalDetailModal from './GoalDetailModal';
import { PATH_PAGE } from '../../utils/paths';

function GoalList({ goals, isEmployer }) {
  const [open, setOpen] = useState(false);
  const [goalItem, setGoalItem] = useState();

  const handleDetails = (goal) => {
    setGoalItem(goal);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        {!isEmployer && (
          <Button variant="contained" sx={{ ml: 'auto', mb: 2 }}>
            <NextLink href={PATH_PAGE.new} passHref legacyBehavior>
              <Link underline="none" color="inherit">
                New Goal
              </Link>
            </NextLink>
          </Button>
        )}
      </Box>
      <Grid container spacing={5}>
        {goals.map((goal) => (
          <Grid item key={goal.id} xs={6}>
            <GoalItem isEmployer={isEmployer} goal={goal} handleDetails={() => handleDetails(goal)} />
          </Grid>
        ))}
      </Grid>
      <GoalDetailModal open={open} handleClose={handleClose} goal={goalItem} />
    </>
  );
}

GoalList.propTypes = {
  goals: PropTypes.array,
  isEmployer: PropTypes.bool,
};

export default GoalList;
