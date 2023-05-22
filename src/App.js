import logo from "./logo.svg";
import "./App.css";
import { Languages } from "./components/Languages";
import { useState, useEffect } from "react";
import { fetchCocktails } from "./api/cocktails";
//! დავალევა 1
import { AppWithClass } from "./AppWithClass.jsx";
//! დავალევა 2
import { PostList } from "./components/post.jsx";

//! დავალება 1
// const cocktailsDefaultStatee = {
//   data: [],
//   isLoading: true,
//   isLoaded: false,
//   isError: false,
// };

//! დავალება 2
const postsDefaultStatee = {
  data: [],
  isLoading: true,
  isLoaded: false,
  isError: false,
};

const App = () => {
  const [number, setNumber] = useState(1);
  const [name, setName] = useState("gela");
  //! დავალება 1
  // const [cocktails, setCocktails] = useState(cocktailsDefaultStatee);
  //! დავალება 2
  const [posts, setPosts] = useState(postsDefaultStatee);
  //! დავალება 1
  // console.log(cocktails);
  //! დავალება 2
  console.log(posts);
  useEffect(() => {
    handleFetchCocktails();
  }, []);

  const handleFetchCocktails = async () => {
    const fetchedCocktails = await fetchCocktails();
    //! დავალება 1
    // setCocktails({
    //! დავალება 2
    setPosts({
      data: fetchedCocktails,
      isLoading: false,
      isLoaded: true,
      isError: false,
    });
  };

  // const onClick = () => {
  //   // setNumber((previosValue) => previosValue + 1);
  //   setName(Math.random());
  // };
  //! დავალება 1
  // if (cocktails.isLoading) {
  //   return <h1>იტვირთება...</h1>;
  // }

  //! დავალება 2
  if (posts.isLoading) {
    return <h1>იტვირთება...</h1>;
  }

  return (
    // <button onClick={onClick}>
    //   {/* {number} {name} */}
    // {/* </button> */}

    <>
      {/*! დავალება 1 */}
      {/* <AppWithClass /> */}

      {/*! დავალება 2 */}
      <PostList />
    </>
  );
};

export default App;
