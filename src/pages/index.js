// @mui
import { Box, Typography } from '@mui/material';

import Page from '../components/Page';

function Home() {
  return (
    <Page title="SE: Goal App">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h3">Software Engineering</Typography>
        <Typography variant="h3" sx={{ mb: 5 }}>
          Goal Management App
        </Typography>
        <Typography variant="h3">Team:</Typography>
        <Typography variant="h3">Hovhannes Chobanyan</Typography>
        <Typography variant="h3">Erik Minasian</Typography>
        <Typography variant="h3">Zaruhi Tshitoyan</Typography>
        <Typography variant="h3">Ani Mkrtumyan</Typography>
        <Typography variant="h3">Annie Hakian</Typography>
        <Typography variant="h3">Annabelle Petrosian</Typography>
      </Box>
    </Page>
  );
}

export default Home;
