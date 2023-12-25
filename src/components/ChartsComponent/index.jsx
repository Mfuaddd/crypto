import React from "react";
import "./index.scss";
// import ApexLineChart from "../ApexLineChart";
import ChartCard from "../ChartCard";

function ChartsComponent() {
  // const { dataLatest, dataCurrencies, dataTimeseries } =
  // useContext(fetchContext);
  return (
    <div className="charts">
      <div className="container">
        <div className="charts__header">
          Check your favorite coin price within a glance
        </div>
        <div className="charts__cards">
          <ChartCard code="TRY"/>
          <ChartCard code="KRW"/>
          <ChartCard code="GBP"/>
          <ChartCard code="CNY"/>
          <ChartCard code="CZK"/>
          <ChartCard code="EUR"/>
          <ChartCard code="JPY"/>
          <ChartCard code="AZN"/>
        </div>
      </div>
    </div>
  );
}

export default ChartsComponent;
