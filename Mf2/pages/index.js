// import HomePage from "home/home";

// const Home = HomePage;
// console.log("SSS", __webpack_share_scopes__);
// console.log(Home);
// Home.getInitialProps = HomePage.getInitialProps;
// export default Home;
import CheckoutC1 from "../components/checkoutC1";
import CheckoutC2 from "../components/checkoutC2";
import CheckoutC3 from "../components/checkoutC3";
import CheckoutC4 from "../components/checkoutC4";
import CheckoutC5 from "../components/checkoutC5";
import CheckoutC6 from "../components/checkoutC6";
import CheckoutC7 from "../components/checkoutC7";
import CheckoutC8 from "../components/checkoutC8";
import CheckoutC9 from "../components/checkoutC9";
import CheckoutC10 from "../components/checkoutC10";
import CheckoutC11 from "../components/checkoutC11";
import CheckoutC12 from "../components/checkoutC12";
import CheckoutC13 from "../components/checkoutC13";
import CheckoutC14 from "../components/checkoutC14";
import BannerSection from "../components/f2/BannerSection";

const Home = ({ data }) => {
  return (
    <div>
      {/* <CheckoutC1 />
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
      <CheckoutC14 /> */}
      <BannerSection />
    </div>
  );
};

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }

export default Home;
