import "./hotel_list.css";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, FormControlLabel, Grid, Paper, Radio, RadioGroup, Slider, TextField, Typography } from "@mui/material";
import SearchHeader from "./SearchHeader";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const HotelList = () => {
  const { search } = useLocation();
  const query = useQuery();

  const title = query.get("address");
  const sort = query.get("sort");
  const hotelSearch = query.get("search")
  const page = query.get("page")
  let hotelQuery = {
    address: title ? title : "Pokhara",
    sort: sort ? sort : "-createdAt",
    hotelSearch: hotelSearch? hotelSearch : "",
    page: page ? page : 1
  }
  const address = title ? title : "Pokhara";
  const navigate = useNavigate()

  const [hotelData, setHotelData] = useState("");
  const [sortData, setSortData] = useState("-createdAt")// prcie order wala
  const [hotelNameSearch, setHotelNameSearch] = useState("");
  const [sliderMax, setSliderMax] = useState(10000);
  const [sliderMin, setSliderMin] = useState(500);
  const [priceRange, setPriceRange] = useState([sliderMin, sliderMax]);

  useEffect(() => async () => {
    const res = await axios.get(`api/search?address=${hotelQuery.address}`)
    setHotelData(res.data);
    const maxPrice = res.data.hotels.reduce((acc, curr) => {
      return acc > curr.price ? acc : curr.price
    }
      , 0);
    setSliderMax(maxPrice);
    
    const minPrice = res.data.hotels.reduce((acc, curr) => {
      return acc < curr.price ? acc : curr.price
    }
      , 10000);
    setSliderMin(minPrice);
  }, [hotelQuery.address, hotelQuery.sort])

  const handleSort = async (e) => {
    e.preventDefault();
    setSortData(e.target.value);
    hotelQuery = {
      address,
      sort: e.target.value,
      hotelSearch: hotelQuery.hotelSearch,
    }
    const res = await axios.get(`api/search?address=${hotelQuery.address}&sort=${hotelQuery.sort}&price[gte]=${sliderMin}&price[lte]=${sliderMax}`);
    setHotelData(res.data)
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
    const res = await axios.get(`api/search?address=${hotelQuery.address}&sort=${hotelQuery.sort}&price[gte]=${sliderMin}&price[lte]=${sliderMax}`);
    setHotelData(res.data)
  }

  const buildRangeFilter = async (newValue) => {
    const urlFilter = await axios.get(`api/search?address=${hotelQuery.address}&sort=${hotelQuery.sort}&price[gte]=${newValue[0]}&price[lte]=${newValue[1]}`);
    setHotelData(urlFilter.data)
  };

  const handlePriceInputChange = (e, type) => {
    let newRange;

    if (type === "lower") {
      newRange = [...priceRange];
      newRange[0] = Number(e.target.value);
      setPriceRange(newRange);
    }

    if (type === "upper") {
      newRange = [...priceRange];
      newRange[1] = Number(e.target.value);

      setPriceRange(newRange);
    }
  };
  const onSliderCommitHandler = (e, newValue) => {
    buildRangeFilter(newValue);
  };

  const onTextfieldCommitHandler = () => {
    buildRangeFilter(priceRange);
  };

  const clearAllFilters = async () => {
    setPriceRange([sliderMin, sliderMax]);
    setHotelNameSearch("");
    const res = await axios.get(`api/search?address=${hotelQuery.address}&sort=${hotelQuery.sort}`)
    setHotelData(res.data);
  };

  const searchInfoData = {
    address: search.split("address=")[1].split("&")[0],
    startDate: search.split("startDate=")[1].split("&")[0],
    endDate: search.split("endDate=")[1].split("&")[0],
    adult: search.split("adult=")[1].split("&")[0],
    children: search.split("children=")[1].split("&")[0],
    room: search.split("room=")[1].split("&")[0],
  }

  return (
    <>
      <SearchHeader searchInfoData={searchInfoData} />
      <div className="container">
        <div className="row mt-4 mx-auto">
          <div className="col-lg-4">
            <Paper elevation={3} sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
              
              }}>
        

                <TextField
                  label="Search Hotel"
                  fullWidth={true}
                  size="small"
                  variant="outlined"
                  value={hotelNameSearch}
                  onChange={handleSearch}
                />
              
            </Paper>
            <Paper elevation={3} className="my-3">
              <Grid item xs={6} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "0px 20px 10px 20px",
                margin: "auto",
              }}>
                <Typography gutterBottom sx={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}>Filters</Typography>
                <Slider
                  min={sliderMin}
                  max={sliderMax}
                  step={500}
                  value={priceRange}
                  valueLabelDisplay="auto"
                  onChange={(e, value) => setPriceRange(value)}
                  onChangeCommitted={onSliderCommitHandler}
                  sx={{
                    // width: "90%",
                    margin: "auto",
                  }}
                />

                <TextField
                  className="mt-2"
                  size="small"
                  id="lower"
                  fullWidth
                  label="Min Price"
                  variant="outlined"
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceInputChange(e, "lower")}
                  onBlur={onTextfieldCommitHandler}

                />

                <TextField
                  className="mt-2"
                  size="small"
                  id="upper"
                  fullWidth
                  label="Max Price"
                  variant="outlined"
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceInputChange(e, "upper")}
                  onBlur={onTextfieldCommitHandler}
                />
              </Grid>
            </Paper>
            <Paper elevation={3} className="my-3">
              <Grid item xs={6} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "0px 20px 10px 20px",
                margin: "auto",
              }}>
                <Typography gutterBottom sx={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}>Sort By</Typography>
                <RadioGroup sx={{
                  display:"inline",
                
                  margin: "auto",

                }}
                  aria-label="price-order"
                  name="price-order"
                  value={sortData}
                  onChange={handleSort}
                >
                  <FormControlLabel
                    value="-price"
                    control={<Radio />}
                    label="Price: High - Low"
                  />

                  <FormControlLabel
                    value="price"
                    control={<Radio />}
                    label="Price: Low - High"
                  />
                </RadioGroup>

              </Grid></Paper>

            <Button size="large"  fullWidth variant="contained" color="primary" onClick={clearAllFilters} sx={{
              display: "block",
              margin: "0px auto 1rem auto",
              padding: "15px auto",
              fontWeight:600,
              letterSpacing: "1px",

            }}
            >
              Clear All
            </Button>

          </div>
          <div className="col-lg-8 search-result">
            <Paper className="card mb-3" elevation={3}>
              <div className="card-body">
                <div className=" row m-2 ">
                  <div className="col-md-1 d-flex justify-content-center">
                    <h3>
                      {hotelData?.hotels?.length > 0
                        ? hotelData?.hotels?.length
                        : 0}
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
            </Paper>
            {hotelData?.hotels?.map(
              (hotel) =>
                hotel.hotel_validity === true && (
                  <Paper key={hotel._id} className="card hotel-card" elevation={2}>
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
                          {hotel.hotel_facilities.slice(0, 6).map((facility, index) => (
                            <span key={index} className="mx-1" style={{
                              borderRadius: "50%",
                              padding: "10px",
                              fontSize: "12px",
                              border: "1px solid grey",
                            }}>
                              {(facility === "freewifi") && (
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
                        <Button
                          variant="contained"
                          color="primary"
                          className="mt-2"
                          onClick={() => {
                            navigate(`/hotelinfo/${hotel._id}`, { state: { searchInfoData } });
                          }}
                        >
                          CHOOSE
                        </Button>
                      </div>
                    </div>
                  </Paper>
                )
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export default HotelList