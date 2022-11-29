import PropTypes from 'prop-types';
import NextLink from 'next/link';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, Link } from '@mui/material';
// config
import { HEADER } from '../../../config';

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  height: HEADER.MOBILE_HEIGHT,
  zIndex: theme.zIndex.appBar + 1,
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),
  backgroundColor: theme?.palette.background.default,
  [theme.breakpoints.up('lg')]: {
    height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
  },
}));

DashboardHeader.propTypes = {
  isCollapse: PropTypes.bool,
  onOpenSidebar: PropTypes.func,
  verticalLayout: PropTypes.bool,
};

const MENU = [
  {
    name: 'Dashboard',
    to: '/',
  },
  {
    name: 'Goals',
    to: '/goals',
  },
];

export default function DashboardHeader() {
  const theme = useTheme();

  return (
    <RootStyle>
      <Toolbar
        sx={{
          minHeight: '100% !important',
          px: { lg: 5 },
        }}
      >
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          {MENU.map((menuItem) => (
            <NextLink key={menuItem.name} href={menuItem.to} passHref legacyBehavior>
              <Link
                underline="none"
                color="primary"
                variant="h5"
                sx={{
                  px: 3,
                  py: 2,
                  fontWeight: 700,
                  '&.MuiLink-root': {
                    '&:hover': {
                      color: theme.palette.info.light,
                    },
                  },
                }}
              >
                {menuItem.name}
              </Link>
            </NextLink>
          ))}
        </Stack>
      </Toolbar>
    </RootStyle>
  );
}
