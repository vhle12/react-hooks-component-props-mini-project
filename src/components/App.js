import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Vinh's Blog"/>
      <About image="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" about="Student Software Engineer"/>
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;

