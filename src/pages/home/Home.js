import React from "react";
import "./home.css";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { useDispatch } from "react-redux"
import { GLOBALTYPES } from "../../redux/actions/globalTypes"

const Home = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [search, setSearch] = useState("")

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };


  const handleSearch = async (e) => {
    e.preventDefault()
    if (search.length === 0) {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { error: "Field cannnot be empty..." } })
      return
    }

    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
    const res = await axios.get(`api/search?address=${search}`)


    if (res.data.status === "failed") {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } })
      dispatch({ type: GLOBALTYPES.ALERT, payload: { error: res.data.msg } })
      return
    }


    if (res.status === 200) {
      navigate('/hotellist', {
        state: {
          searchData: res.data, searchInfo: {
            search, date, options
          }
        }
      })
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } })
    }


  }

  return (
    <>

      <div className="homepage">
        <div className="booking">
          <div className="ui container">
            <h1> Make Memories</h1>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <i className="fa-solid fa-location-dot"></i>
                <input value={search} onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                />
              </div>
              <div className="headerSearchItem">
                <i className="fa-solid fa-calendar-days"></i>
                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}

              </div>
              <div className="headerSearchItem">
                <i className="fa-solid fa-person"></i>
                <span onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText">
                  {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button disabled={options.adult <= 1}
                          className='optionCounterButton' onClick={() => handleOption("adult", "d")}>-</button>
                        <span className='optionCounterNumber'>{options.adult}</span>
                        <button className='optionCounterButton' onClick={() => handleOption("adult", "i")}>+</button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button disabled={options.children <= 0}
                          className='optionCounterButton' onClick={() => handleOption("children", "d")}>-</button>
                        <span className='optionCounterNumber'>{options.children}</span>
                        <button className='optionCounterButton' onClick={() => handleOption("children", "i")}>+</button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button disabled={options.room <= 1}
                          className='optionCounterButton' onClick={() => handleOption("room", "d")}>-</button>
                        <span className='optionCounterNumber'>{options.room}</span>
                        <button className='optionCounterButton' onClick={() => handleOption("room", "i")}>+</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                {/* <form onSubmit={handleSearch}> */}
                  <button  onClick={handleSearch} className="headerBtn">Let's Go</button>
                  {/* </form> */}
              </div>
            </div>
            <div></div>
          </div>
        </div>

        {/* Banner with images */}
        <div className="homeContainer">
          <div className="featured">
            <div className="featuredItem">
              <img
                src="https://cdn.pixabay.com/photo/2019/09/15/07/31/everest-base-camp-4477525__340.jpg"
                alt="projectimages"
                className="featuredImg"
              />
              <div className="featuredTitles"></div>
            </div>

            <div className="featuredItem">
              <img
                src="https://cdn1.matadornetwork.com/blogs/1/2019/08/Nepalese-village-in-the-Himalaya-mountains-near-Pokhara-in-Nepal-1200x854.jpg"
                alt="projectimages"
                className="featuredImg"
              />
              <div className="featuredTitles"></div>
            </div>
            <div className="featuredItem">
              <img
                src="https://media.istockphoto.com/photos/patan-picture-id637268486?b=1&k=20&m=637268486&s=170667a&w=0&h=7ovZBRq98SgR3z73ls6P4h-6_gMgQisjmWJp4fvnz2k="
                alt="projectimages"
                className="featuredImg"
              />
              <div className="featuredTitles"></div>
            </div>
          </div>
        </div>

        {/* Nepal's Top Destination */}
        <div className="destination_nepal">
          <div className="ui container top">
            <h3>Nepal's Top Destination</h3>
          </div>
          <div>
            <figure className="destination">
              <img
                src="https://assets.xceltrip.com/destination-1619006759329-5961c.WEBP"
                alt="sample89"
              />

              <figcaption>
                <h2>Book Now</h2>
              </figcaption>
              <Link to="/"></Link>
            </figure>
            <figure className="destination">
              <img
                src="https://assets.xceltrip.com/destination-1619006781422-8f33b.WEBP"
                alt="sample94"
              />
              <figcaption>
                <h2>Book Now</h2>
              </figcaption>
              <Link to="/"></Link>
            </figure>
            <figure className="destination">
              <img
                src="https://photographylife.com/wp-content/uploads/2015/08/DSC0577.jpg"
                alt="sample92"
              />
              <figcaption>
                <h2>Book Now</h2>
              </figcaption>
              <Link to="/"></Link>
            </figure>
          </div>
          <div>
            <figure className="destination">
              <img
                src="https://trainsplanesandtuktuks.com/Wordpress/wp-content/uploads/2018/05/Nepal-2018-308-edited-1024x683.jpg"
                alt="sample89"
              />

              <figcaption>
                <h2>Book Now</h2>
              </figcaption>
              <Link to="/"></Link>
            </figure>
            <figure className="destination">
              <img
                src="https://admin.buddhaair.com/upload/blog/thumbnail/1574327436_bCB0U_1566982540-dvsvz-pashupatinath.webp"
                alt="sample94"
              />
              <figcaption>
                <h2>Book Now</h2>
              </figcaption>
              <Link to="/"></Link>
            </figure>
            <figure className="destination">
              <img
                src="https://admin.buddhaair.com/upload/blog/mainimage/1554008274_maWAR_Elephant_Bathing_at_Chitwan.jpg"
                alt="sample92"
              />
              <figcaption>
                <h2>Book Now</h2>
              </figcaption>
              <Link to="/"></Link>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;