import { Modal, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { GOAL_STATUS_STYLES } from '../../helpers/constants/goal';
import Label from '../Label';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  border: '2px solid #e2e2e2',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

function GoalDetailModal({ open, goal, handleClose }) {
  const { name, detail, status } = goal || {};

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Label
          color={GOAL_STATUS_STYLES[`${status}`]?.color}
          sx={{ textTransform: 'uppercase', position: 'absolute', top: 10, right: 10 }}
        >
          {status}
        </Label>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ m: 2 }}>
          {name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ m: 2 }}>
          {detail}
        </Typography>
      </Box>
    </Modal>
  );
}

GoalDetailModal.propTypes = {
  open: PropTypes.bool,
  goal: PropTypes.object,
  handleClose: PropTypes.func,
};

export default GoalDetailModal;
