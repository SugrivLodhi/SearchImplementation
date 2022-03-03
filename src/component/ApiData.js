import React from "react";
const ApiData = ({ data }) => {
  return (
    <>
      <div>
        {data?.map((item) => {
          return item.title;
        })}
      </div>
    </>
  );
};

export default ApiData;
