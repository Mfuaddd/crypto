import React, { createContext, useEffect, useState } from "react";
import { getData } from "../Helper/FetchHelper";

export const fetchContext = createContext();

function FetchProvider({ children }) {
  const [dataLatest, setDataLatest] = useState([]);
  const [dataTimeseries, setDataTimeseries] = useState([]);
  const [dataCurrencies, setDataCurrencies] = useState([]);

  async function getDataLatest() {
    const latest = await getData({ endpoint: "latest" });

    setDataLatest(latest);
  }

  async function getDataTimeseries() {
    const dateNow = new Date(Date.now());

    const endDate = dateNow.toISOString().slice(0, 10);

    dateNow.setMonth(dateNow.getMonth() - 3);
    const startDate = dateNow.toISOString().slice(0, 10);

    const timeseries = await getData({
      endpoint: "timeseries",
      start_date: startDate,
      end_date: endDate,
    });

    setDataTimeseries(timeseries);
  }

  async function getDataCurrencies() {
    const currencies = await getData({ endpoint: "currencies" });

    // const obj = Object.keys(currencies).reduce((prev, curr) => {
    //   prev[currencies[curr].short_code] = { fullname : currencies[curr].name, symbol : currencies[curr].symbol};
    //   return prev;
    // }, {});

    setDataCurrencies(currencies);
  }

  async function getFlag(){
    const res = await fetch("https://restcountries.com/v3.1/all")
    const data = await res.json()

    const obj = data.reduce((prev, curr) => {
      prev[Object.keys(curr.currencies)[0]] = { flag: curr.flags.svg};
      return prev;
    }, {});

  }

  const data = {
    dataLatest,
    dataCurrencies,
    dataTimeseries,
    getDataLatest,
    getDataCurrencies,
    getDataTimeseries,
  };

  return <fetchContext.Provider value={data}>{children}</fetchContext.Provider>;
}

export default FetchProvider;
