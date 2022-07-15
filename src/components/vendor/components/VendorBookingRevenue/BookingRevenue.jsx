import moment from "moment";
import React from "react";
import Chart from "react-apexcharts";


const Bookingrevenue = ({booking}) => {
  const bookingCreatedDateCount = booking && booking?.bookings?.map(item => {
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

  const bookingDataInArray = Object.keys(bookingCreatedDateCount).map(item => {
    return bookingCreatedDateCount[item]
  }
  )
  const bookingSeries = [
    {
      name: 'Bookings',
      data:[10,15,7,9,12,15,18],
    }
  ]
  const data = {
    series: bookingSeries,
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
      toolbar:{
        show: false
      }
    },
  };
  return <div className="BookingRevenue">
        <Chart options={data.options} series={data.series} type="area" />
  </div>;
};

export default Bookingrevenue;
