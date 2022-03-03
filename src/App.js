import React, { useEffect, useState } from "react";
import SearchTitle from "./component/SearchTitle";
import ApiData from "./component/ApiData";
import "./styles.css";

export default function App() {
  const [inputData, setInputData] = useState("");
  const [data, setData] = useState([]);
  const fetchURL = "https://jsonplaceholder.typicode.com";
  const getData = () => fetch(`${fetchURL}/posts`).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <SearchTitle inputData={inputData} setInputData={setInputData} />
      <ApiData
        data={data.filter((item) => {
          return item.title.toLowerCase().includes(inputData);
        })}
      />
    </div>
  );
}
