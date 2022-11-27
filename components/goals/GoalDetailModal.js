import { Modal, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function GoalDetailModal({ open, handleClose }) {

    //TODO to be replaced by the goal object retrieved from the BE
    const goalDetails = {
        name: 'goal name',
        detail: 'goal description'
    }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box>
        <Typography variant="h3" id="parent-modal-title">Goal details</Typography>
        <Typography variant="h2">Goal Title</Typography>
        <Typography paragraph={true}>{goalDetails.name}</Typography>
        <Typography variant="h2">Goal Description</Typography>
        <Typography paragraph={true}>{goalDetails.detail}</Typography>
      </Box>
    </Modal>
  );
}

GoalDetailModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default GoalDetailModal;
