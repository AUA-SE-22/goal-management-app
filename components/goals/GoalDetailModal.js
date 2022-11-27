import { Modal, Box } from '@mui/material';
import PropTypes from 'prop-types';

function GoalDetailModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box>
        <h2 id="parent-modal-title">Text in a modal</h2>
        <p id="parent-modal-description">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
      </Box>
    </Modal>
  );
}

GoalDetailModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default GoalDetailModal;
