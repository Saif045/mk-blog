import React from "react";

const CategoryDetails = ({
  name,
  count,
}: {
  name?: string;
  count?: number;
}) => {
  return (
    <div className="h-full  py-10 ">
      <h1 className="text-4xl font-bold text-center  relative z-10 py-4">
        LATEST {name?.toLocaleUpperCase()}
      </h1>

      <p className="relative z-10  text-center  text-xl">Total {count}</p>
    </div>
  );
};

export default CategoryDetails;
