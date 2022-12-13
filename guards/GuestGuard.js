import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { PATH_PAGE } from '../utils/paths';

GuestGuard.propTypes = {
  children: PropTypes.node,
};

export default function GuestGuard({ children }) {
  const { data: token } = useSession();

  const { push } = useRouter();

  useEffect(() => {
    if (token) {
      push(PATH_PAGE.root);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return <>{children}</>;
}
