import HomePage from "checkout/CompWithApiData";
// import Portifolio from "../components/Portifolio";

const Home = ({ posts }) => {
  return <HomePage posts={posts} />;
};
export async function getServerSideProps() {
  // Fetch data from external API
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => json);
  console.log(posts);

  // Pass data to the page via props
  return { props: { posts } };
}
export default Home;
