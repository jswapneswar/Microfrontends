import React from "react";

// from checkout
import CheckoutC1 from "checkout/checkoutC1";
import CheckoutC2 from "checkout/checkoutC2";
import CheckoutC3 from "checkout/checkoutC3";
import CheckoutC4 from "checkout/checkoutC4";
import CheckoutC5 from "checkout/checkoutC5";
import CheckoutC6 from "checkout/checkoutC6";
import CheckoutC7 from "checkout/checkoutC7";
import CheckoutC8 from "checkout/checkoutC8";
import CheckoutC9 from "checkout/checkoutC9";
import CheckoutC10 from "checkout/checkoutC10";
import CheckoutC11 from "checkout/checkoutC11";
import CheckoutC12 from "checkout/checkoutC12";
import CheckoutC13 from "checkout/checkoutC13";
import CheckoutC14 from "checkout/checkoutC14";
// import CompWithApiData from "checkout/CompWithApiDataComp";
import BannerSection from "checkout/BannerSection";

import Shopf2C1 from "shop/f2/Component1";
import Shopf2C2 from "shop/f2/Component2";
import Shopf2C3 from "shop/f2/Component3";
import Shopf2C4 from "shop/f2/Component4";
import Shopf2C5 from "shop/f2/Component5";
import Shopf2C6 from "shop/f2/Component6";
import Shopf2C7 from "shop/f2/Component7";
import Shopf2C8 from "shop/f2/Component8";
import Shopf2C9 from "shop/f2/Component9";
import Shopf2C10 from "shop/f2/Component10";
import Shopf2C11 from "shop/f2/Component11";
import Shopf2C12 from "shop/f2/Component12";
import Shopf2C13 from "shop/f2/Component13";
import Shopf2C14 from "shop/f2/Component14";
import Shopf2C15 from "shop/f2/Component15";
import Shopf2C16 from "shop/f2/Component16";
import Shopf2C17 from "shop/f2/Component17";
import Shopf2C18 from "shop/f2/Component18";
import Shopf2C19 from "shop/f2/Component19";
import Shopf2C20 from "shop/f2/Component20";
import Shopf2C21 from "shop/f2/Component21";
import Shopf2C22 from "shop/f2/Component22";
import Shopf2C23 from "shop/f2/Component23";
import Shopf2C24 from "shop/f2/Component24";
import Shopf2C25 from "shop/f2/Component25";
import Shopf2C26 from "shop/f2/Component26";
import Shopf2C27 from "shop/f2/Component27";
import Shopf2C28 from "shop/f2/Component28";
import Shopf2C29 from "shop/f2/Component29";
import Shopf2C30 from "shop/f2/Component30";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterSlice";

const Home = ({ loaded, data }) => {
  console.log(data, "sentFrom remote");
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(
    process?.env?.NODE_ENV,
    process.env.NEXT_PUBLIC_ANALYTICS_ID,
    "public"
  );
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Host Application
      </h1>
      <div>
        {" "}
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <BannerSection />
      <h1
        style={{
          textAlign: "center",
        }}
      >
        {" "}
        Shop remote
      </h1>
      <>
        <Shopf2C1 />
        <Shopf2C2 />
        <Shopf2C3 />
        <Shopf2C4 />
        <Shopf2C5 />
        <Shopf2C6 />
        <Shopf2C7 />
        <Shopf2C8 />
        <Shopf2C9 />
        <Shopf2C10 />
        <Shopf2C11 />
        <Shopf2C12 />
        <Shopf2C13 />
        <Shopf2C14 />
        <Shopf2C15 />
        <Shopf2C16 />
        <Shopf2C17 />
        <Shopf2C18 />
        <Shopf2C19 />
        <Shopf2C20 />
      </>
      {/* <CompWithApiData /> */}
      <h1
        style={{
          textAlign: "center",
        }}
      >
        {" "}
        Checkout remote
      </h1>
      <>
        <CheckoutC1 />
        <CheckoutC2 />
        <CheckoutC3 />
        <CheckoutC4 />
        <CheckoutC5 />
        <CheckoutC6 />
        <CheckoutC7 />
        <CheckoutC8 />
        <CheckoutC9 />
        <CheckoutC10 />
        <CheckoutC11 />
        <CheckoutC12 />
        <CheckoutC13 />
        <CheckoutC14 />
      </>
      <>
        {" "}
        {/* <Shopf2C21 />
        <Shopf2C22 />
        <Shopf2C23 />
        <Shopf2C24 />
        <Shopf2C25 />
        <Shopf2C26 />
        <Shopf2C27 />
        <Shopf2C28 />
        <Shopf2C29 />
        <Shopf2C30 /> */}
      </>
    </div>
  );
};
//
Home.getInitialProps = async (ctx) => {
  return {};
};

export default Home;
