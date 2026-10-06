import React from "react";
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
