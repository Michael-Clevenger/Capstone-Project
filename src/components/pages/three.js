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
    const threeImgOne =
      "https://michaelclevenger.devcamp.space/portfolio/portfolio_items/28760";
    const threeImgTwo =
      "https://michaelclevenger.devcamp.space/portfolio/portfolio_items/28761";
    const threeImgThree =
      "https://michaelclevenger.devcamp.space/portfolio/portfolio_items/28762";
    const threeImgFour =
      "https://michaelclevenger.devcamp.space/portfolio/portfolio_items/28764";

    const getthreeImgOne = axios.get(threeImgOne);
    const getthreeImgTwo = axios.get(threeImgTwo);
    const getthreeImgThree = axios.get(threeImgThree);
    const getthreeImgFour = axios.get(threeImgFour);
    axios
      .all([getthreeImgOne, getthreeImgTwo, getthreeImgThree, getthreeImgFour])
      .then(
        axios.spread((...responses) => {
          console.log(responses);
          const responseThreeImgOne = responses[0].data.portfolio_item.url;
          const responseThreeImgTwo = responses[1].data.portfolio_item.url;
          const responseThreeImgThree = responses[2].data.portfolio_item.url;
          const responseThreeImgFour = responses[3].data.portfolio_item.url;
          setDescription(responses[0].data.portfolio_item.description);
          setDescriptionTwo(responses[1].data.portfolio_item.description);
          setDescriptionThree(responses[2].data.portfolio_item.description);
          setDescriptionFour(responses[3].data.portfolio_item.description);

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
