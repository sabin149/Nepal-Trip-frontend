import "./hotel_list.css";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, FormControlLabel, Grid, Paper, Radio, RadioGroup, Slider, TextField, Typography } from "@mui/material";
import SearchHeader from "./SearchHeader";
import SearchedHotelList from "./HotelList/SearchedHotelList";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const HotelList = () => {
  const { search } = useLocation();
  const query = useQuery();
  const title = query.get("address");
  const sort = query.get("sort");
  const hotelSearch = query.get("search")
  const page = query.get("page");
  let hotelQuery = {
    address: title ? title : "Pokhara",
    sort: sort ? sort : "-createdAt",
    hotelSearch: hotelSearch ? hotelSearch : "",
    page: page ? page : 1
  }
  const address = title ? title : "Pokhara";
  const [hotelData, setHotelData] = useState("");
  const [sortData, setSortData] = useState("-createdAt")// prcie order wala
  const [hotelNameSearch, setHotelNameSearch] = useState("");
  const [sliderMax, setSliderMax] = useState(10000);
  const [sliderMin, setSliderMin] = useState(500);
  const [priceRange, setPriceRange] = useState([sliderMin, sliderMax]);
  useEffect(() => async () => {
    const res = await axios.get(`api/search?address=${hotelQuery.address}`)
    setHotelData(res.data);  
    const maxPrice = res?.data?.hotels?.reduce((acc, curr) => {
      return acc > curr.price ? acc : curr.price
    }
      , 0);
    setSliderMax(maxPrice);
    const minPrice = res?.data?.hotels?.reduce((acc, curr) => {
      return acc < curr?.price ? acc : curr?.price
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
          <div className="col-lg-3">
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
                  display: "inline",
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
            <Button size="large" fullWidth variant="contained" color="primary" onClick={clearAllFilters} sx={{
              display: "block",
              margin: "0px auto 1rem auto",
              padding: "15px auto",
              fontWeight: 600,
              letterSpacing: "1px",
            }}
            >
              Clear All
            </Button>
          </div>
         <SearchedHotelList hotelData={hotelData} searchInfoData={searchInfoData} />
        </div>
      </div>
    </>
  )
}
export default HotelList