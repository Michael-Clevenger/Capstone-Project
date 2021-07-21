import React, { useState, useEffect } from "react";
import Footer from "../footer";
import "../app.css";
import axios from "axios";

const Two = () => {
  const [twoImgOne, setTwoImgOne] = useState([]);
  const [twoImgTwo, setTwoImgTwo] = useState([]);
  const [twoImgThree, setTwoImgThree] = useState([]);
  const [twoImgFour, setTwoImgFour] = useState([]);
  const [description, setDescription] = useState("");
  const [descriptionTwo, setDescriptionTwo] = useState("");
  const [descriptionThree, setDescriptionThree] = useState("");
  const [descriptionFour, setDescriptionFour] = useState("");

  const fetchData = () => {
    const twoImgOne =
      "https://michaelclevenger.devcamp.space/portfolio/portfolio_items/28752";
    const twoImgTwo =
      "https://michaelclevenger.devcamp.space/portfolio/portfolio_items/28755";
    const twoImgThree =
      "https://michaelclevenger.devcamp.space/portfolio/portfolio_items/28756";
    const twoImgFour =
      "https://michaelclevenger.devcamp.space/portfolio/portfolio_items/28757";

    const gettwoImgOne = axios.get(twoImgOne);
    const gettwoImgTwo = axios.get(twoImgTwo);
    const gettwoImgThree = axios.get(twoImgThree);
    const gettwoImgFour = axios.get(twoImgFour);
    axios.all([gettwoImgOne, gettwoImgTwo, gettwoImgThree, gettwoImgFour]).then(
      axios.spread((...responses) => {
        console.log(responses);
        const responseTwoImgOne = responses[0].data.portfolio_item.url;
        const responseTwoImgTwo = responses[1].data.portfolio_item.url;
        const responseTwoImgThree = responses[2].data.portfolio_item.url;
        const responseTwoImgFour = responses[3].data.portfolio_item.url;
        setDescription(responses[0].data.portfolio_item.description);
        setDescriptionTwo(responses[1].data.portfolio_item.description);
        setDescriptionThree(responses[2].data.portfolio_item.description);
        setDescriptionFour(responses[3].data.portfolio_item.description);

        setTwoImgOne(responseTwoImgOne);
        setTwoImgTwo(responseTwoImgTwo);
        setTwoImgThree(responseTwoImgThree);
        setTwoImgFour(responseTwoImgFour);
      }),
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="yearTwo">
      <div className="two-header">
        <h1 className="year-two">YEAR ONE</h1>
      </div>

      <div className="twoImg">
        <div className="twoOne">
          <div className="overlay">
            <img src={twoImgOne} />

            <div className="twoOneDescription">{description}</div>
          </div>
        </div>

        <div className="twoTwo">
          <div className="overlay">
            <img src={twoImgTwo} />

            <div className="twoTwoDescription">{descriptionTwo}</div>
          </div>
        </div>

        <div className="twoThree">
          <div className="overlay">
            <img src={twoImgThree} />

            <div className="twoThreeDescription">{descriptionThree}</div>
          </div>
        </div>

        <div className="twoFour">
          <div className="overlay">
            <img src={twoImgFour} />

            <div className="twoFourDescription">{descriptionFour}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Two;
