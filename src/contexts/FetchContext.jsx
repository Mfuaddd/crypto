import React, { createContext, useState } from "react";

export const fetchContext = createContext();

function FetchProvider({children}) {
  const [apiData, setApiData] = useState([]);

  async function getData({
    endpoint,
    base,
    date,
    start_date,
    end_date,
    type,
    from,
    to,
    amount,
    symbols,
    apiKey = "PpQEf64BXCxQbTnbHABDW1oSw3SWcXI3",
  }) {
    const res = await fetch(`https://api.currencybeacon.com/v1/
      ${endpoint}
      ?api_key=${apiKey}
      ${base ? "&base=" + base : ""}
      ${date ? "&date=" + date : ""}
      ${start_date ? "&start_date=" + start_date : ""}
      ${end_date ? "&end_date=" + end_date : ""}
      ${type ? "&type=" + type : ""}
      ${from ? "&from=" + from : ""}
      ${to ? "&to=" + to : ""}
      ${amount ? "&amount=" + amount : ""}
      ${symbols ? "&symbols=" + symbols : ""}
      `);
    const data = await res.json();
    setApiData(api);
  }
  const data = {
    apiData,
    getData
  }

  return (
    <fetchContext.Provider  value={data}>
      {children}
    </fetchContext.Provider>
  );
}

export default FetchProvider;
