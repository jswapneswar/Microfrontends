import React, { useEffect, useState } from "react";

export default function CompWithApiData({ posts }) {
  console.log(posts);
  const [data, setdata] = useState(posts || []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com//posts")
      .then((response) => response.json())
      .then((json) => setdata(json));
  }, []);

  return (
    <div>
      <h1>Component with api </h1>
      {data?.slice(0, 10)?.map((item) => {
        return (
          <div key={item?.id}>
            <h1>{item?.title}</h1>
            <p>{item?.body}</p>
          </div>
        );
      })}
    </div>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((json) => json);
//   console.log(posts);

//   // Pass data to the page via props
//   return { props: { posts } };
// }
