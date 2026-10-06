import React from "react";
import { Button } from "./Styles";

function Learn() {
  return (
    <section className="bg-blue-50 text-center py-20 px-5">

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto">
        Don't wait — take the next step toward your brighter future.
      </h2>

      <p className="text-gray-500 mt-4 mb-7">
        Your journey begins with one simple action today.
      </p>

      <button className={Button}>
        Start Learning
      </button>

    </section>
  );
}

export default Learn;