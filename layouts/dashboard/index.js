import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// config
import { HEADER } from '../../config';
//
import DashboardHeader from './header';

const MainStyle = styled('main', {
  shouldForwardProp: (prop) => prop !== 'collapseClick',
})(({ theme }) => ({
  flexGrow: 1,
  paddingTop: HEADER.MOBILE_HEIGHT + 24,
  paddingBottom: HEADER.MOBILE_HEIGHT + 24,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    paddingBottom: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    transition: theme.transitions.create('margin-left', {
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function DashboardLayout({ children }) {
  return (
    <Box
      sx={{
        display: { lg: 'flex' },
        minHeight: { lg: 1 },
      }}
    >
      <DashboardHeader />

      <MainStyle>{children}</MainStyle>
    </Box>
  );
}
