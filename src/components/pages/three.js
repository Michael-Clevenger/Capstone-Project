import React, { useState, useEffect } from "react";
import Footer from "../footer";
import "../app.css";
import axios from "axios";

const Three = () => {
  const [threeImgOne, setThreeImgOne] = useState([]);
  const [threeImgTwo, setThreeImgTwo] = useState([]);
  const [threeImgThree, setThreeImgThree] = useState([]);
  const [threeImgFour, setThreeImgFour] = useState([]);
  const [description, setDescription] = useState("");
  const [descriptionTwo, setDescriptionTwo] = useState("");
  const [descriptionThree, setDescriptionThree] = useState("");
  const [descriptionFour, setDescriptionFour] = useState("");

  const fetchData = () => {
    const threeImgOne = "http://localhost:5000/image/16";
    const threeImgTwo = "http://localhost:5000/image/17";
    const threeImgThree = "http://localhost:5000/image/18";
    const threeImgFour = "http://localhost:5000/image/19";

    const getthreeImgOne = axios.get(threeImgOne);
    const getthreeImgTwo = axios.get(threeImgTwo);
    const getthreeImgThree = axios.get(threeImgThree);
    const getthreeImgFour = axios.get(threeImgFour);
    axios
      .all([getthreeImgOne, getthreeImgTwo, getthreeImgThree, getthreeImgFour])
      .then(
        axios.spread((...responses) => {
          console.log(responses);
          const responseThreeImgOne = responses[0].data.url;
          const responseThreeImgTwo = responses[1].data.url;
          const responseThreeImgThree = responses[2].data.url;
          const responseThreeImgFour = responses[3].data.url;
          console.log(
            responseThreeImgOne,
            responseThreeImgTwo,
            responseThreeImgThree,
            responseThreeImgFour,
          );
          setDescription(responses[0].data.description);
          setDescriptionTwo(responses[1].data.description);
          setDescriptionThree(responses[2].data.description);
          setDescriptionFour(responses[3].data.description);

          setThreeImgOne(responseThreeImgOne);
          setThreeImgTwo(responseThreeImgTwo);
          setThreeImgThree(responseThreeImgThree);
          setThreeImgFour(responseThreeImgFour);
        }),
      );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="yearThree">
      <div className="three-header">
        <h1 className="year-three">YEAR THREE</h1>
      </div>

      <div className="threeImg">
        <div className="threeOne">
          <div className="overlay">
            <img src={threeImgOne} />

            <div className="threeOneDescription">{description}</div>
          </div>
        </div>

        <div className="threeTwo">
          <div className="overlay">
            <img src={threeImgTwo} />

            <div className="threeTwoDescription">{descriptionTwo}</div>
          </div>
        </div>

        <div className="threeThree">
          <div className="overlay">
            <img src={threeImgThree} />

            <div className="threeThreeDescription">{descriptionThree}</div>
          </div>
        </div>

        <div className="threeFour">
          <div className="overlay">
            <img src={threeImgFour} />

            <div className="threeFourDescription">{descriptionFour}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Three;
