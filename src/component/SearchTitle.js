import React from "react";
const SearchTitle = ({ inputData, setInputData }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Type to search the title"
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
      <h1>{inputData}</h1>
    </>
  );
};
export default SearchTitle;
