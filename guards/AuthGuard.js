import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// hooks
import { useSession } from 'next-auth/react';
import { isValidToken, setSession } from '../utils/jwt';
import Login from '../pages/auth/login';

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default function AuthGuard({ children }) {
  const { data: token } = useSession();

  const { pathname, push } = useRouter();

  const [requestedLocation, setRequestedLocation] = useState(null);

  useEffect(() => {
    if (requestedLocation && pathname !== requestedLocation) {
      setRequestedLocation(null);
      push(requestedLocation);
    }
  }, [pathname, push, requestedLocation]);

  if (!token) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  const accessToken = token?.accessToken;
  if (accessToken && isValidToken(accessToken)) {
    setSession(accessToken);
    const payload = JSON.parse(Buffer.from(accessToken?.split('.')[1], 'base64').toString());
    const role = payload.realm_access.roles[1];
    localStorage.setItem('userRole', role);
  }

  return <>{children}</>;
}
