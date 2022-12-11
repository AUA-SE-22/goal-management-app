import PropTypes from 'prop-types';
import { SessionProvider } from 'next-auth/react';
import Layout from '../layouts';
import NotistackProvider from '../components/NotistackProvider';

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <NotistackProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NotistackProvider>
    </SessionProvider>
  );
}

export default MyApp;
