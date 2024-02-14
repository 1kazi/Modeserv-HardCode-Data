

import { useEffect, useState } from "react";
import { Header, Navtab } from "../components";
import fetchData from "../server/Api";

export default function Home() {
  const [data, setData] = useState([]);
  async function getData() {
    const res = await fetchData();
    if (res.type) {
      setData(res.data);
    }
    console.log(res.data)
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Header />
      <Navtab />
    </div>
  );
}
