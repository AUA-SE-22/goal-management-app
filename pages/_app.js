import cookie from 'cookie'
import PropTypes from 'prop-types';
import { SSRKeycloakProvider, SSRCookies } from '@react-keycloak/ssr';
import Layout from '../layouts';
import '../styles/globals.css';

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

const keycloakCfg = {
  realm: 'goal-management',
  url: 'http://localhost:8181/auth',
  clientId: 'login-app',
  login: 'true'
}

function MyApp({ Component, pageProps, cookies }) {
  return (
    <SSRKeycloakProvider keycloakConfig={keycloakCfg} persistor={SSRCookies(cookies)}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRKeycloakProvider>
  );
}


function parseCookies(req) {
  if (!req || !req.headers) {
    return {}
  }
  return cookie.parse(req.headers.cookie || '')
}

MyApp.getInitialProps = async (context) => {
  // Extract cookies from AppContext
  return {
    cookies: parseCookies(context?.ctx?.req)
  }
}

export default MyApp;
