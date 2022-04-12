import React, { useState, useEffect } from "react";
import Footer from "../footer";
import "../app.css";
import axios from "axios";

const Five = () => {
  const [fiveImgOne, setFiveImgOne] = useState([]);
  const [fiveImgTwo, setFiveImgTwo] = useState([]);
  const [fiveImgThree, setFiveImgThree] = useState([]);
  const [fiveImgFour, setFiveImgFour] = useState([]);
  const [description, setDescription] = useState("");
  const [descriptionTwo, setDescriptionTwo] = useState("");
  const [descriptionThree, setDescriptionThree] = useState("");
  const [descriptionFour, setDescriptionFour] = useState("");

  const fetchData = () => {
    const fiveImgOne = "https://capstone-db-main.herokuapp.com/image/24";
    const fiveImgTwo = "https://capstone-db-main.herokuapp.com/image/27";
    const fiveImgThree = "https://capstone-db-main.herokuapp.com/image/26";
    const fiveImgFour = "https://capstone-db-main.herokuapp.com/image/28";

    const getfiveImgOne = axios.get(fiveImgOne);
    const getfiveImgTwo = axios.get(fiveImgTwo);
    const getfiveImgThree = axios.get(fiveImgThree);
    const getfiveImgFour = axios.get(fiveImgFour);
    axios
      .all([getfiveImgOne, getfiveImgTwo, getfiveImgThree, getfiveImgFour])
      .then(
        axios.spread((...responses) => {
          console.log(responses);
          const responseFiveImgOne = responses[0].data.url;
          const responseFiveImgTwo = responses[1].data.url;
          const responseFiveImgThree = responses[2].data.url;
          const responseFiveImgFour = responses[3].data.url;
          console.log(
            responseFiveImgOne,
            responseFiveImgTwo,
            responseFiveImgThree,
            responseFiveImgFour,
          );
          setDescription(responses[0].data.description);
          setDescriptionTwo(responses[1].data.description);
          setDescriptionThree(responses[2].data.description);
          setDescriptionFour(responses[3].data.description);

          setFiveImgOne(responseFiveImgOne);
          setFiveImgTwo(responseFiveImgTwo);
          setFiveImgThree(responseFiveImgThree);
          setFiveImgFour(responseFiveImgFour);
        }),
      );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="yearFive">
      <div className="five-header">
        <h1 className="year-five">YEAR FIVE</h1>
      </div>

      <div className="fiveImg">
        <div className="fiveOne">
          <div className="overlay">
            <img src={fiveImgOne} />

            <div className="fiveOneDescription">{description}</div>
          </div>
        </div>

        <div className="fiveTwo">
          <div className="overlay">
            <img src={fiveImgTwo} />

            <div className="fiveTwoDescription">{descriptionTwo}</div>
          </div>
        </div>

        <div className="fiveThree">
          <div className="overlay">
            <img src={fiveImgThree} />

            <div className="fiveThreeDescription">{descriptionThree}</div>
          </div>
        </div>

        <div className="fiveFour">
          <div className="overlay">
            <img src={fiveImgFour} />

            <div className="fiveFourDescription">{descriptionFour}</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Five;
