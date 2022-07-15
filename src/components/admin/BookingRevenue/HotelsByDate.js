import moment from "moment";
import React from "react";
import Chart from "react-apexcharts";

const HotelsByDate = ({ hotel }) => {

  const hotelCreatedDateCount = hotel && hotel.hotels.map(item => {
    return moment(item.createdAt).format("MMMM")
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

  const dataInArray = Object.keys(hotelCreatedDateCount).map(item => {
    return hotelCreatedDateCount[item]
  }
  )

  const data = {
    name:"Hotels",
    Hotels: [
      {
        data: [5,12,15,20,18,20,35],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      colors: ["#f53803"],
      
      plotOptions: {
        bar: {
          distributed: true,
          curve: "smooth",
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },

      xaxis: {
        type: "string",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        labels: {
          style: {
            colors: [
              "#f53803",
              "#f53803",
              "#f53803",
              "#f53803",
              "#f53803",
              "#f53803",
              "#f53803",
              "#f53803",
              "#f53803",
              "#f53803",
              "#f53803",
              "#f53803",

            ],
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
        series={data.Hotels}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default HotelsByDate;
