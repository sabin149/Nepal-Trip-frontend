import "./hotel_list.css";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
// import { useSelector } from "react-redux";
import SearchHeader from "./SearchHeader";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const HotelList = () => {
  const query = useQuery();
  const title = query.get("address");
  const sort = query.get("sort");
  const hotelSearch = query.get("search")
  const page = query.get("page")
  let hotelQuery = {
    address: title ? title : "Pokhara",
    sort: sort ? sort : "-createdAt",
    hotelSearch: hotelSearch ? hotelSearch : "",
    page: page ? page : 1
  }
  const address = title ? title : "Pokhara";
  const navigate = useNavigate()
  // const {searchInfo} = useSelector(state => state.searchInfo)
  const [hotelData, setHotelData] = useState("");
  const [sortData, setSortData] = useState("-createdAt")
  const [filterData, setFilterData] = useState('gt');
  const [price, setPrice] = useState("");
  const [hotelNameSearch, setHotelNameSearch] = useState("");
  useEffect(() => async () => {
    const res = await axios.get(`api/search?address=${hotelQuery.address}&&sort=${hotelQuery.sort}`)
    setHotelData(res.data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleSort = async (e) => {
    e.preventDefault();
    setSortData(e.target.value);
    hotelQuery = {
      address,
      sort: e.target.value,
      hotelSearch,
    }
    const hotelprice = price ? price : 0
    const res = await axios.get(`api/search?address=${hotelQuery.address}&&sort=${hotelQuery.sort}&&price[${filterData}]=${hotelprice}`);
    setHotelData(res.data)
    navigate(`/hotellist?address=${address}&&sort=${e.target.value}&&price[${filterData}]=${hotelprice}`)
  };
  const handleFilter = async (e) => {
    e.preventDefault();
    if (!price.trim()) return
    const res = await axios.get(`api/search?address=${address}&&sort=${sortData}&&price[${filterData}]=${price}`);
    setHotelData(res.data)
    navigate(`/hotellist?search=${address}&&sort=${sortData}&&price[${filterData}]=${price}`)
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    setHotelNameSearch(e.target.value)
    if (!hotelNameSearch.trim()) return
    hotelQuery = {
      address,
      sort,
      hotelSearch: e.target.value
    }
    const hotelprice = price ? price : 0
    const res = await axios.get(`api/search?address=${hotelQuery.address}&&sort=${hotelQuery.sort}&&price[${filterData}]=${hotelprice}&&search=${hotelQuery.hotelSearch}`);
    setHotelData(res.data)
    navigate(`/hotellist?address=${address}&&sort=${sortData}&&price[${filterData}]=${hotelprice}&&search=${hotelQuery.hotelSearch}`)
  }

  return (
    <>
      <SearchHeader />
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
                <MenuItem value={"-createdAt"}>Sorting Hotel </MenuItem>
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
                        <span>
                          Price
                        </span>
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
                          {hotel.hotel_facilities.slice(0,7).map((facility, index) => (
                            <span key={index} className="mx-1" style={{
                              borderRadius: "50%",
                              padding: "10px",
                              fontSize: "12px",
                              border: "1px solid grey",
                            }}>
                              {(facility === "freewifi")&& (
                                <i className="h3 fa-solid fa-wifi" />
                              )}
                              {facility === "tours" && (
                                <i className="h3 fa-solid fa-camera" />
                              )}
                              {facility === "bar" && (
                                <i className="h3 fa-solid fa-cocktail" />
                              )}
                              {facility === "restaurant" && (
                                <i className="h3 fa-solid fa-utensils" />
                              )}
                              {facility === "pool" && (
                                <i className="h3 fa-solid fa-swimmer" />
                              )}
                              {facility === "gym" && (
                                <i className="h3 fa-solid fa-dumbbell" />
                              )}
                              {facility === "parking" && (
                                <i className="h3 fa-solid fa-car-park" />
                              )}
                              {facility === "airporttransfer" && (
                                <i className="h3 fa-solid fa-plane-departure" />
                              )}
                              {facility === "breakfast" && (
                                <i className="h3 fa-solid fa-bowl-spoon" />
                              )}
                              {facility === "lunch" && (
                                <i className="h3 fa-solid fa-plate-utensils" />
                              )}
                              {facility === "dinner" && (
                                <i className="h3 fa-solid fa-fork-knife" />
                              )}
                              {facility === "capservice" && (
                                <i className="h3 fa-solid fa-headset" />
                              )}
                              {facility === "34hrroomservice" && (
                                <i className="h3 fa-solid fa-clock" />
                              )}
                              {facility === "childbed" && (
                                <i className="h3 fa-solid fa-child" />
                              )}
                              {facility === "laundary" && (
                                <i className="h3 fa-solid fa-laundry" />
                              )}
                              {facility === "ticketservice" && (
                                <i className="h3 fa-solid fa-ticket-alt" />
                              )}
                              {facility === "medical" && (
                                <i className="h3 fa-solid fa-hospital" />
                              )}
                              {facility === "coffee" && (
                                <i className="h3 fa-solid fa-coffee" />
                              )}
                              {facility === "security" && (
                                <i className="h3 fa-solid fa-shield-alt" />
                              )}
                              {facility === "taxiservice" && (
                                <i className="h3 fa-solid fa-taxi" />
                              )}
                              {facility === "luggage" && (
                                <i className=" fa-solid fa-suitcase" />
                              )}
                              {facility === "wheelchair" && (
                            <i className=" fa-solid fa-wheelchair" />
                          )}
                          {facility === "airconditioning" && (
                            <i className=" fa-solid fa-snowflake" />
                          )}
                          {facility === "smoking" && (
                            <i className=" fa-solid fa-smoking" />
                          )}
                          {facility === "pets" && (
                            <i className=" fa-solid fa-dog" />
                          )}                            
                          {facility === "atm" && (
                            <i className=" fa-solid fa-atm" />
                          )}
                          {facility === "bank" && (
                            <i className=" fa-solid fa-bank" />
                          )}
                          {facility === "housekeeping" && (
                            <i className=" fa-solid fa-bed" />
                          )}
                          {facility === "elevator" && (
                            <i className=" fa-solid fa-elevator" />
                          )}
                            </span>
                          )
                          )}
                        </div>
                      </div>
                      <div className="col">
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
  )
}
export default HotelList