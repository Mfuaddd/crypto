import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { fetchContext } from "../../contexts/FetchContext";

function TableLineComponent() {
  const { dataLatest, dataCurrencies, dataTimeseries } =
    useContext(fetchContext);

  const dateNow = new Date(Date.now());
  dateNow.setMonth(dateNow.getMonth() - 1);
  const DayBefore = dateNow.toISOString().slice(0, 10);

  function calcChange(v1, v2) {
    return (((v2 - v1) / v1) * 100).toFixed(2).replace("-0.00", "0.00");
  }

  return (
    <div className="table-line">
      <div className="table-line__head">
        <div className="table-line__tr">
          <div className="table-line__th">
            <div className="table-line__th__text">
              <div>Name</div>
              <div>{Object.keys(dataCurrencies).length} MATCHES</div>
            </div>
          </div>
          <div className="table-line__th">
            <div className="table-line__th__text">Short Code</div>
          </div>
          <div className="table-line__th">
            <div className="table-line__th__text">Price</div>
          </div>
          <div className="table-line__th">
            <div className="table-line__th__text">
              <div>Change %</div>
              <div>(1 Month)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="table-line__body">
        {dataLatest.response?.rates &&
          Object.keys(dataCurrencies).map((x) => {
            const code = dataCurrencies[x].short_code;
            let change;
            if (dataTimeseries[DayBefore]) {
              change = calcChange(
                dataTimeseries[DayBefore][code],
                dataLatest.response.rates[code]
              );
            }
            if (x === "meta") return;
            if (x === "response") return;
            return (
              <div className="table-line__tr" key={x}>
                <div className="table-line__td">
                  <img
                    src={`https://wise.com/public-resources/assets/flags/rectangle/${code.toLowerCase()}.png`}
                  />
                  {dataCurrencies[x].name}
                </div>
                <div className="table-line__td">{code}</div>
                <div className="table-line__td">
                  {parseFloat(dataLatest.response.rates[code]).toFixed(2)}{" "}
                  {dataCurrencies[x].symbol}
                </div>
                <div className="table-line__td">
                  {dataTimeseries[DayBefore] && (
                    <div
                      style={
                        change > 0
                          ? { color: "#22ab94" }
                          : change < 0
                          ? { color: "#f23645" }
                          : null
                      }
                    >
                      {change}%
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TableLineComponent;
