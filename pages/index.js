// @mui
import { Box, Typography, Link } from '@mui/material';

import Page from '../components/Page';

function Home() {
  return (
    <Page title="SE: Goal App">
      <Box>
        <Link href='/goals'>Dashboard</Link>
        <Link href='/new-goal'>Create new goal</Link>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Goal Management Application
        </Typography>
        <Typography paragraph={true}>
        This web application will enhance the process of goals creations. It allows to send them to a goal approver for approval or rejection subsequently . The user has access to a list of all of their unapproved, authorized, and rejected goals. The goal cannot be canceled after it has been set.
Any data source can be used to load the application's data, either a simple text file that lists the users who are reporting to home or a comprehensive database.
        </Typography>
      </Box>
    </Page>
  );
}

export default Home;
