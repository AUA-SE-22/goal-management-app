import { Modal, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  border: '2px solid #000',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

function GoalDetailModal({ open, handleClose }) {
  //TODO to be replaced by the goal object retrieved from the BE
  const goalDetails = {
    name: 'goal name',
    detail: 'goal description',
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>   
  );
}

GoalDetailModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default GoalDetailModal; 
