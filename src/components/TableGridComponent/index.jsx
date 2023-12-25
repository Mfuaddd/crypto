import React, { useContext } from "react";
import "./index.scss";
import { fetchContext } from "../../contexts/FetchContext";

function TableGridComponent({ type }) {
  const { dataLatest, dataTimeseries } = useContext(fetchContext);

  const codes = ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD", "CNY"];

  function convertValute(x, y) {
    return (
      (1 / dataLatest.response.rates[x]) *
      dataLatest.response.rates[y]
    ).toFixed(6);
  }
  function convertValute(v1, v2) {
    return ((1 / v1) * v2).toFixed(6);
  }
  function calcChange(v1, v2) {
    return (((v2 - v1) / v1) * 100).toFixed(2).replace("-0.00", "0.00");
  }

  const dateNow = new Date(Date.now());
  dateNow.setMonth(dateNow.getMonth() - 1);
  const DayBefore = dateNow.toISOString().slice(0, 10);

  if (dataTimeseries.response && dataLatest.response) {
    const TEUR = dataTimeseries.response[DayBefore]["EUR"];
    const LEUR = dataLatest.response.rates["EUR"];
    const TUSD = dataTimeseries.response[DayBefore]["USD"];
    const LUSD = dataLatest.response.rates["USD"];

    console.log(
      "Timeseries",
      "EUR",
      TEUR,
      "USD",
      TUSD,
      convertValute(TEUR, TUSD),
      calcChange(TEUR, LEUR)
    );
    console.log(
      "Latest",
      "EUR",
      LEUR,
      "USD",
      LUSD,
      convertValute(LEUR, LUSD),
      calcChange(TUSD, LUSD)
    );
    console.log(
      calcChange(convertValute(TEUR, TUSD), convertValute(LEUR, LUSD))
    );
  }

  return (
    <div className="table-grid">
      <div className="container">
        <div className="table-grid__tr">
          <div className="table-grid__th"></div>
          {codes.map((x) => (
            <div className="table-grid__th" key={x}>
              <img
                src={`https://wise.com/public-resources/assets/flags/rectangle/${x.toLowerCase()}.png`}
              />
              {x}
            </div>
          ))}
        </div>
        {codes.map((x) => (
          <div className="table-grid__tr" key={x}>
            <div className="table-grid__th">
              <img
                src={`https://wise.com/public-resources/assets/flags/rectangle/${x.toLowerCase()}.png`}
              />
              {x}
            </div>
            {codes.map((y) => {
              if (dataTimeseries.response && dataLatest.response) {
                const timeseriesX = dataTimeseries.response[DayBefore][x];
                const latestX = dataLatest.response.rates[x];
                const timeseriesY = dataTimeseries.response[DayBefore][y];
                const latestY = dataLatest.response.rates[y];
                let change
                if (type === "change") {
                  change = calcChange(
                    convertValute(timeseriesX, timeseriesY),
                    convertValute(latestX, latestY)
                  );
                }
                return (
                  <div
                    className="table-grid__th"
                    key={x + y}
                    style={
                      change
                        ? change > 0
                          ? change > 2
                            ? { backgroundColor: "#0a594e" }
                            : { backgroundColor: "#15514f" }
                          : change < 0
                          ? change < -2
                            ? { backgroundColor: "#a92d39" }
                            : { backgroundColor: "#732a37" }
                          : null
                        : null
                    }
                  >
                    {type === "normal" &&
                      dataLatest.response &&
                      x !== y &&
                      convertValute(latestX, latestY)}
                    {type === "change" &&
                      dataLatest.response &&
                      dataTimeseries.response &&
                      x !== y &&
                      change + "%"}
                  </div>
                );
              }
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableGridComponent;
