import { Box } from '@mui/material';
import PropTypes from 'prop-types';

function Card(props) {
  return <Box sx={{ border: 1 }}>{props.children}</Box>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;