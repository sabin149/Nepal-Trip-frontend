import moment from "moment";
import React from "react";
import Chart from "react-apexcharts";

const Bookingrevenue = ({ booking }) => {
  const bookingCreatedDateCount = booking && booking?.map(item => {
    //  to week days
    return moment(item.createdAt).format("dddd")
  }
  ).reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1
    }
    else {
      acc[curr] += 1
    }
    return acc
  }
    , {})

  const dataInArray = Object.keys(bookingCreatedDateCount).map(item => {
    return bookingCreatedDateCount[item]
  }
  )

  const data = {
    series: [
      {
        name: "Bookings",
        data: [6,10,7,15,12,18,24]
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "string",
        categories: [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat"
        ],
      },
      yaxis: {
        show: false
      },
      toolbar: {
        show: false
      }
    },
  };
  return <div className="BookingRevenue">
    <Chart options={data.options} series={data.series} type="area" />
  </div>;
};

export default Bookingrevenue;
