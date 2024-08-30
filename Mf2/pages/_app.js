import { Suspense, lazy } from "react";
import App from "next/app";
import dynamic from "next/dynamic";
import "../styles/global.css";
// import HomePageReact from "remoteReact1/Component1";

// const Component1 = dynamic(() => import("remoteReact1/Component1"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });
// const Nav = lazy(() => {
//   console.log(import("home/nav"));
//   return import("home/nav");
// });
// const HomePages = lazy(() => {
//   console.log(import("remoteReact1/Component1"));
//   return import("remoteReact1/Component1");
// });

function MyApp({ Component, pageProps }) {
  console.log("in app");
  return (
    <>
      {/* <Suspense fallback={"loading"}>
        <Nav />
      </Suspense> */}
      {/* <Component1 /> */}
      {/* <Suspense fallback={"loading"}>
        <HomePage />
      </Suspense> */}
      <Suspense fallback={"loading"}>
        <Component {...pageProps} />
      </Suspense>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  console.log("in app getInitialProps");
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};
export default MyApp;
