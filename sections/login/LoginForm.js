// @mui
import { Stack, Button } from '@mui/material';
// hooks
import { signIn } from 'next-auth/react';
// components

export default function LoginForm() {
  return (
    <Stack spacing={3}>
      <Button fullWidth size="large" type="submit" variant="contained" onClick={() => signIn()}>
        Login
      </Button>
    </Stack>
  );
}
