import React, { useState, useEffect } from "react";
import Footer from "../footer";
import "../app.css";
import axios from "axios";

const One = () => {
  const [oneImgOne, setOneImgOne] = useState([]);
  const [oneImgTwo, setOneImgTwo] = useState([]);
  const [oneImgThree, setOneImgThree] = useState([]);
  const [oneImgFour, setOneImgFour] = useState([]);
  const [description, setDescription] = useState("");
  const [descriptionTwo, setDescriptionTwo] = useState("");
  const [descriptionThree, setDescriptionThree] = useState("");
  const [descriptionFour, setDescriptionFour] = useState("");

  const fetchData = () => {
    const oneImgOne = "http://localhost:5000/image/6";
    const oneImgTwo = "http://localhost:5000/image/7";
    const oneImgThree = "http://localhost:5000/image/8";
    const oneImgFour = "http://localhost:5000/image/10";

    const getoneImgOne = axios.get(oneImgOne);
    const getoneImgTwo = axios.get(oneImgTwo);
    const getoneImgThree = axios.get(oneImgThree);
    const getoneImgFour = axios.get(oneImgFour);
    axios.all([getoneImgOne, getoneImgTwo, getoneImgThree, getoneImgFour]).then(
      axios.spread((...responses) => {
        console.log(responses);
        const responseOneImgOne = responses[0].data.url;
        const responseOneImgTwo = responses[1].data.url;
        const responseOneImgThree = responses[2].data.url;
        const responseOneImgFour = responses[3].data.url;
        console.log(
          responseOneImgOne,
          responseOneImgTwo,
          responseOneImgThree,
          responseOneImgFour,
        );
        setDescription(responses[0].data.description);
        setDescriptionTwo(responses[1].data.description);
        setDescriptionThree(responses[2].data.description);
        setDescriptionFour(responses[3].data.description);

        setOneImgOne(responseOneImgOne);
        setOneImgTwo(responseOneImgTwo);
        setOneImgThree(responseOneImgThree);
        setOneImgFour(responseOneImgFour);
      }),
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="yearOne">
      <div className="one-header">
        <h1 className="year-one">YEAR ONE</h1>
      </div>

      <div className="oneImg">
        <div className="oneOne">
          <div className="overlay">
            <img src={oneImgOne} />

            <div className="oneOneDescription">{description}</div>
          </div>
        </div>

        <div className="oneTwo">
          <div className="overlay">
            <img src={oneImgTwo} />

            <div className="oneTwoDescription">{descriptionTwo}</div>
          </div>
        </div>

        <div className="oneThree">
          <div className="overlay">
            <img src={oneImgThree} />

            <div className="oneThreeDescription">{descriptionThree}</div>
          </div>
        </div>

        <div className="oneFour">
          <div className="overlay">
            <img src={oneImgFour} />

            <div className="oneFourDescription">{descriptionFour}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default One;
