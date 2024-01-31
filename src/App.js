import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import emptyHeartImg from "./images/emptyHeart.png";
import heartImg from "./images/heart.png";
import linkImg from "./images/link.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

function App() {
  const [images, setImages] = useState(
    () => JSON.parse(localStorage.getItem("images")) || []
  );
  const [like, setLike] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startDateStr, setStartDateStr] = useState("");
  const [endDateStr, setEndDateStr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // console.log("after " + like);
  // console.log(images);
  const getDefaultImages = async () => {
    await axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=5`
      )
      .then((response) => {
        setImages(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
    setIsLoading(false);
  };

  const getImagesWithDates = async () => {
    await axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&start_date=${startDateStr}&end_date=${endDateStr}`
      )
      .then((response) => {
        setImages(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));

    setStartDate("");
    setEndDate("");
    setStartDateStr("");
    setEndDateStr("");
    setIsLoading(false);
  };

  const linkHandler = (e) => {
    const imageUrl = e.target.dataset.value;
    navigator.clipboard.writeText(imageUrl).then(function () {
      alert("Copied the url: " + imageUrl);
    });
  };

  const toggleLikeHandler = (e) => {
    const title = e.target.dataset.title;
    console.log("before " + title + "   " + like);
    images.map((image) => {
      return title === image.title ? (image.like = !image.like) : "";
    });
    setLike(!like);
  };

  const startDateHander = (date) => {
    setStartDate(date);
    const dateStr = moment(date).format().substring(0, 10);
    setStartDateStr(dateStr);
    console.log(moment(date).format());
    console.log("dateStr: " + dateStr);
    console.log("startDate: " + startDate);
    console.log("startDateStr: " + startDateStr);
  };

  const endDateHander = (date) => {
    setEndDate(date);
    const dateStr = moment(date).format().substring(0, 10);
    setEndDateStr(dateStr);
    console.log(moment(date).format());
    console.log("dateStr: " + dateStr);
    console.log("endDate: " + endDate);
    console.log("endDateStr: " + endDateStr);
  };

  const submitButtonHandler = (e) => {
    // e.preventDefault();

    if (startDateStr !== "") {
      setIsLoading(true);
      console.log(startDateStr);
      console.log(endDateStr);
      getImagesWithDates();
    } else {
      alert(
        "please enter the start date and the end date. The end date has default value as today"
      );
    }
  };

  const randomButtonHandler = () => {
    setIsLoading(true);
    localStorage.clear();
    getDefaultImages();
  };

  localStorage.setItem("images", JSON.stringify(images));

  useEffect(() => {
    if (images.length === 0) {
      setIsLoading(true);
      getDefaultImages();
      console.log("useEffect 1");
    } else {
      console.log("useEffect 2");
    }
  }, [images]);

  return (
    <div id="wrapper">
      <div id="container">
        <div id="title-wrapper">
          <h2>spaceStagram</h2>
          <h4>Brought to you by NASA's Astronomy Photo of the Day</h4>
        </div>

        <div id="date-wrapper">
          <div>
            <label htmlFor="start-date">start date</label>
            <br />
            <DatePicker
              selected={startDate}
              onChange={startDateHander}
              dateFormat="yyyy-MM-dd"
            />
          </div>
          <div>
            <label htmlFor="end-date">end date</label>
            <br />
            <DatePicker
              selected={endDate}
              onChange={endDateHander}
              dateFormat="yyyy-MM-dd"
            />
          </div>
        </div>
        <div id="button-wrapper">
          <button onClick={submitButtonHandler}>submit</button>
          <button onClick={randomButtonHandler}>random</button>
        </div>

        <div id="image-content-wrapper">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {images.map((image) => {
                return (
                  <div key={image.url}>
                    <div id="image-wrapper">
                      {image.media_type === "video" ? (
                        <div className="image-container">
                          <iframe src={image.url} title={image.title}></iframe>
                        </div>
                      ) : (
                        <div className="image-container">
                          <img
                            className="main-image"
                            src={image.url}
                            alt={image.title}
                          />
                        </div>
                      )}
                    </div>

                    <div id="content-wrapper">
                      <div id="heart-link">
                        <div>
                          <img
                            data-title={image.title}
                            onClick={toggleLikeHandler}
                            src={image.like ? heartImg : emptyHeartImg}
                            id={image.like ? "heart" : "emptyHeart"}
                            alt="heart or emptyHeart"
                          />
                        </div>
                        <div>
                          <img
                            onClick={linkHandler}
                            data-value={image.url}
                            id="link"
                            src={linkImg}
                            alt="link"
                          />
                        </div>
                      </div>

                      <div id="image-title-date">
                        <span>
                          {image.title} - {image.date}
                        </span>
                      </div>
                      <div id="image-explanation">
                        <span>{image.explanation}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
