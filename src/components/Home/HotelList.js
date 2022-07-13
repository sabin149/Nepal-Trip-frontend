import "./hotel_list.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
// import { useSelector } from "react-redux";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const HotelList = () => {
  const query = useQuery();
  const title = query.get("address");
  const sort = query.get("sort");
  const hotelSearch = query.get("search");
  const page = query.get("page");
  let hotelQuery = {
    address: title ? title : "Pokhara",
    sort: sort ? sort : "-createdAt",
    hotelSearch: hotelSearch ? hotelSearch : "",
    page: page ? page : 1,
  };
  const address = title ? title : "Pokhara";
  const navigate = useNavigate();
  // const {searchInfo} = useSelector(state => state.searchInfo)
  const [hotelData, setHotelData] = useState("");
  const [sortData, setSortData] = useState("-createdAt");
  const [filterData, setFilterData] = useState("gt");
  const [price, setPrice] = useState("");
  const [hotelNameSearch, setHotelNameSearch] = useState("");
  useEffect(
    () => async () => {
      const res = await axios.get(
        `api/search?address=${hotelQuery.address}&&sort=${hotelQuery.sort}`
      );
      setHotelData(res.data);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    []
  );
  const handleSort = async (e) => {
    e.preventDefault();
    setSortData(e.target.value);
    hotelQuery = {
      address,
      sort: e.target.value,
      hotelSearch,
    };
    const hotelprice = price ? price : 0;
    const res = await axios.get(
      `api/search?address=${hotelQuery.address}&&sort=${hotelQuery.sort}&&price[${filterData}]=${hotelprice}`
    );
    setHotelData(res.data);
    navigate(
      `/hotellist?address=${address}&&sort=${e.target.value}&&price[${filterData}]=${hotelprice}`
    );
  };
  const handleFilter = async (e) => {
    e.preventDefault();
    if (!price.trim()) return;
    const res = await axios.get(
      `api/search?address=${address}&&sort=${sortData}&&price[${filterData}]=${price}`
    );
    setHotelData(res.data);
    navigate(
      `/hotellist?search=${address}&&sort=${sortData}&&price[${filterData}]=${price}`
    );
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    setHotelNameSearch(e.target.value);
    if (!hotelNameSearch.trim()) return;
    hotelQuery = {
      address,
      sort,
      hotelSearch: e.target.value,
    };
    const hotelprice = price ? price : 0;
    const res = await axios.get(
      `api/search?address=${hotelQuery.address}&&sort=${hotelQuery.sort}&&price[${filterData}]=${hotelprice}&&search=${hotelQuery.hotelSearch}`
    );
    setHotelData(res.data);
    navigate(
      `/hotellist?address=${address}&&sort=${sortData}&&price[${filterData}]=${hotelprice}&&search=${hotelQuery.hotelSearch}`
    );
  };
  return (
    <>
      {/* <div className="sub-header d-flex flex-row mb-3 justify-content-center align-item-center" style={{ height: "80px" }}>
                  <div className=" flex-px-3 app" style={{ marginLeft: '20px' }}>
                      <span style={{ fontSize: '14px' }}>Destination</span>
                      <h5 style={{ fontSize: '14px' }} className="text-capitalize">{searchInfo.search}, Nepal</h5>
                  </div>
                  <div className=" flex-px-3 app" >
                      <span style={{ fontSize: '14px' }}>Check In</span>
                      <h5 style={{ fontSize: '14px' }}> {moment(searchInfo.date.startDate).format("DD MMMM YYYY")}</h5>
                  </div>
                  <div className="flex-px-3 app">
                      <span style={{ fontSize: '14px' }}>Check Out</span>
                      <h5 style={{ fontSize: '14px' }}>{moment(searchInfo.date.endDate).format("DD MMMM YYYY")}</h5>
                  </div>
                  <div className="flex-px-3 app">
                      <span style={{ fontSize: '14px' }}>Rooms</span>
                      <h5 style={{ fontSize: '14px' }}>{searchInfo.options.room}</h5>
                  </div>
                  <div className="flex-px-3 app">
                      <span style={{ fontSize: '14px' }}>Adults</span>
                      <h5 style={{ fontSize: '14px' }}>{searchInfo.options.adult}</h5>
                  </div>
                  <div className="flex-px-3 app">
                      <span style={{ fontSize: '14px' }}>Children</span>
                      <h5 style={{ fontSize: '14px' }}>{searchInfo.options.children}</h5>
                  </div>
              </div> */}
      <div className="container">
        <div className="row mt-4 mx-auto">
          <div className="col-lg-3">
            <FormControl>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                value={hotelNameSearch}
                onChange={handleSearch}
              />
            </FormControl>
            <FormControl className="mt-3">
              <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortData}
                onChange={handleSort}
              >
                <MenuItem value={"-createdAt"}>Newest Hotel </MenuItem>
                <MenuItem value={"createdAt"}>Oldest Hotel </MenuItem>
                <MenuItem value={"-price"}>Price: High to Low</MenuItem>
                <MenuItem value={"price"}>Price: Low to High</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className="mt-3">
              <TextField
                id="standard-basic"
                label="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <Select
                labelId="demo-simple-select-label1"
                id="demo-simple-select1"
                className="mt-3"
                value={filterData}
                onChange={(e) => setFilterData(e.target.value)}
              >
                <MenuItem value={"gt"}>GT {price}</MenuItem>
                <MenuItem value={"gte"}>GTE {price}</MenuItem>
                <MenuItem value={"lt"}>LT {price}</MenuItem>
                <MenuItem value={"lte"}>LTE {price}</MenuItem>
              </Select>
              <Button
                variant="contained"
                color="primary"
                className="mt-3"
                onClick={handleFilter}
              >
                Submit
              </Button>
            </FormControl>
          </div>
          <div className="col-lg-9 search-result">
            <div className="card mb-3">
              <div className="card-body">
                <div className=" row m-2 ">
                  <div className="col-md-1 d-flex justify-content-center">
                    <h3>
                      {" "}
                      {hotelData?.hotels?.length < 1
                        ? "0"
                        : hotelData?.hotels?.length}
                    </h3>
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "#000",
                        marginBottom: "0",
                        lineHeight: "18px",
                      }}
                    ></div>
                  </div>
                  <div className="col-md-5 d-flex justify-content-center">
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#4A4A4A",
                        fontWeight: "500",
                        marginBottom: "0",
                        lineHeight: "18px",
                      }}
                    >
                      Properties Found
                    </p>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center">
                    <div
                      className="col-6"
                      style={{
                        fontSize: "14px",
                        color: "#003c75",
                        lineHeight: "19px",
                        fontWeight: "500",
                        cursor: "pointer",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#003c75",
                          lineHeight: "19px",
                          fontWeight: "500",
                          cursor: "pointer",
                        }}
                      >
                        Price
                      </span>
                    </div>
                    <div className="col-6">
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#003c75",
                          lineHeight: "19px",
                          fontWeight: "500",
                          cursor: "pointer",
                        }}
                      >
                        Rating
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {hotelData?.hotels?.map(
              (hotel) =>
                hotel.hotel_validity === true && (
                  <div key={hotel._id} className="card hotel-card">
                    <div className="row">
                      <div className="col-md-4 img-holder">
                        <img
                          src={
                            hotel.hotel_images[0].url
                              ? hotel.hotel_images[0].url
                              : hotel.hotel_images[0]
                          }
                          alt="projectimages"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="col-md-5 hotel_detail">
                        <h3>
                          <div
                            className="mt-2 mb-2 hotel-name"
                            style={{ cursor: "pointer" }}
                          >
                            {hotel.hotel_name}
                          </div>
                        </h3>

                        <div className="hotel_icon">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>

                        <div className="mb-2 text-capitalize hotel-address">
                          {hotel.address}
                        </div>
                        <div
                          className="mb-2"
                          style={{ color: "#2374c2", fontSize: "14px" }}
                        >
                          Show In Map
                        </div>
                        <div
                          className="icn-holder"
                          style={{ cursor: "pointer" }}
                        >
                          {hotel.hotel_facilities.map((facility, index) => (
                            <span key={index}>
                              {facility === "good" && (
                                <i className="fa-solid fa-wifi"></i>
                              )}
                              {facility !== "good" && (
                                <i className="fa-solid fa-bed"></i>
                              )}
                              {facility}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="col">
                        
                      <div className="d-flex justify-content-end">
                        <i class="fa-solid fa-heart" style={{fontSize:"30px"}}></i>
                      </div>
                        
                        <div>
                          <p className="hotel-price">NPR {hotel.price}</p> 
                          <span style={{ color: "gray", fontSize: "12px" }}>
                            Price per night
                            <br></br>
                            (excluding Taxes)
                          </span>
                        </div>
                        
                        <button
                          className="button btn btn-primary"
                          onClick={() => {
                            navigate(`/hotelinfo/${hotel._id}`);
                          }}
                        >
                          CHOOSE
                        </button>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default HotelList;
