import React, { useContext } from "react";
import "./index.scss";
import { fetchContext } from "../../contexts/FetchContext";

function TableGridComponent() {
  const { dataLatest } = useContext(fetchContext);

  const codes = ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD", "CNY"];

  function convertValute(x, y) {
    console.log(dataLatest.response.rates[x], dataLatest.response.rates[y]);
    return (1/dataLatest.response.rates[x] * dataLatest.response.rates[y]).toFixed(6)
  }

  return (
    <div className="table-grid">
      <div className="container">
        <div className="table-grid__tr">
          <div className="table-grid__th"></div>
          {codes.map((x) => (
            <div className="table-grid__th">
              <img
                src={`https://wise.com/public-resources/assets/flags/rectangle/${x.toLowerCase()}.png`}
              />
              {x}
            </div>
          ))}
        </div>
        {codes.map((x) => (
          <div className="table-grid__tr">
            <div className="table-grid__th">
              <img
                src={`https://wise.com/public-resources/assets/flags/rectangle/${x.toLowerCase()}.png`}
              />
              {x}
            </div>
            {codes.map((y) => (
              <div className="table-grid__th">
                {(dataLatest.response && x!==y ) && convertValute(x, y)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableGridComponent;
