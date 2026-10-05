import React from "react";
// import Navbar from "./components/Navbar";
// import BlogHeader from "./components/BlogHeader";
// import CategoryButtons from "./components/CategoryButtons";
// import BlogSection from "./components/BlogSection";
// import Learn from "./components/Learn";
// import Footer from "./components/Footer";

import {
  BlogHeader,
  BlogSection,
  CategoryButtons,
  Footer,
  Learn,
  Navbar,
} from "./components/Pages";

function App() {
  return (
    <div>
      <Navbar />
      <BlogHeader />

      <CategoryButtons />

      <BlogSection />

      <Learn />

      <Footer />
    </div>
  );
}

export default App;
