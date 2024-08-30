import { Suspense, lazy } from 'react';
import App from 'next/app';
import dynamic from 'next/dynamic';
import "../styles/global.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Suspense fallback={'loading'}>
        <Nav />
      </Suspense> */}
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async ctx => {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};
export default MyApp;
