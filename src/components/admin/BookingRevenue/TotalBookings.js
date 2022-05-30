import React from "react";
import Chart from "react-apexcharts";

const TotalBookings = () => {
  const data = {
    series: [
      {
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {},
        },
      },
      colors: ["#f53803"],
      plotOptions: {
        bar: {
          //   columnWidth: '35%',
          distributed: true,
          curve: "smooth",
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
        labels: {
          style: {
            colors: ["#ff929f"],
            fontSize: "12px",
          },
        },
      },
    },
  };

  return (
    <div className="TotalBookings">
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default TotalBookings;
