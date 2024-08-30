// import HomePage from 'home/home';
// const Home = HomePage;

// Home.getInitialProps = HomePage.getInitialProps;
// export default Home;

import React from "react";

import Component1 from "../components/componentsF2/Component1";
// import BannerSection from "home/BannerSection";
import { StoreProvider } from "home/store";
console.log(StoreProvider, "store");

export default function Index() {
  return (
    <div>
      <StoreProvider>
        <Component1 />
      </StoreProvider>

      {/* <NewsComp /> */}
      {/* <BannerSection /> */}

      {/* <Music/>
    <EventComp/> */}
    </div>
  );
}
