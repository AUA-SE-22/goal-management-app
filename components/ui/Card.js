import { Box } from '@mui/material';
import PropTypes from 'prop-types';

function Card({ children }) {
  return <Box sx={{ border: 1 }}>{children}</Box>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;