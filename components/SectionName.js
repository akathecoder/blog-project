import React from "react";

function SectionName({ name }) {
  return (
    <div className="border-b border-solid mb-8 ">
      <h1 className="text-3xl border-b-2 border-solid inline-block border-black pb-3">
        {name}
      </h1>
      <hr />
    </div>
  );
}

export default SectionName;
