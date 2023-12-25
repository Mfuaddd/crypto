import React, { useContext } from "react";
import Chart from "react-apexcharts";
import "./index.scss";
import { fetchContext } from "../../contexts/FetchContext";

const data = {
  options: {
    chart: {
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 3,
    },
    xaxis: {
      type: "datetime",
      tickPlacement: "on",
      showDuplicates: true,
      hideOverlappingLabels: true,
      labels: {
        style: {
          color: "#FFFFFF",
          fontWeight: "bold",
        },
        datetimeFormatter: {
          year: "yyyy",
          month: "MMM",
          day: "dd",
          hour: "HH:mm",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: ["#1e222d"],
        shadeIntensity: 1,
        opacityFrom: 0.8,
        opacityTo: 0.6,
        stops: [0, 100, 100],
      },
    },
    noData: {
      text: "Loading...",
    },
    grid: {
      show: false,
    },
  },
};
function ChartCard({ code, fullname }) {
  const { dataLatest, dataCurrencies, dataTimeseries } =
    useContext(fetchContext);

  return (
    <div className="chart-card">
      <div className="chart-card__text">
        <div className="flex">
          <div className="chart-card__img">
            <img
              src={`https://wise.com/public-resources/assets/flags/rectangle/usd.png`}
            />
            <img
              src={`https://wise.com/public-resources/assets/flags/rectangle/${code.toLowerCase()}.png`}
            />
          </div>
          USD to {code}
        </div>
        <div className="flex chart-card__price">
          {dataLatest.response && dataLatest.response.rates[code].toFixed(2)}
        </div>
      </div>
      <Chart
        className="chart-card__chart"
        options={data.options}
        series={[
          {
            color:"#2962ff",
            data:
              dataTimeseries.response &&
              Object.keys(dataTimeseries.response).map((x) => [
                x,
                dataTimeseries.response[x][code].toFixed(2),
              ]),
          },
        ]}
        type="area"
      />
    </div>
  );
}
export default ChartCard;
