import React, { useState, useEffect } from "react";
import Footer from "../footer";
import "../app.css";
import axios from "axios";

const Four = () => {
  const [fourImgOne, setThreeImgOne] = useState([]);
  const [fourImgTwo, setThreeImgTwo] = useState([]);
  const [fourImgThree, setThreeImgThree] = useState([]);
  const [fourImgFour, setThreeImgFour] = useState([]);
  const [description, setDescription] = useState("");
  const [descriptionTwo, setDescriptionTwo] = useState("");
  const [descriptionThree, setDescriptionThree] = useState("");
  const [descriptionFour, setDescriptionFour] = useState("");

  const fetchData = () => {
    const fourImgOne =
      "https://michaelclevenger.devcamp.space/portfolio/portfolio_items/28782";
    const fourImgTwo =
      "https://michaelclevenger.devcamp.space/portfolio/portfolio_items/28783";
    const fourImgThree =
      "https://michaelclevenger.devcamp.space/portfolio/portfolio_items/28784";
    const fourImgFour =
      "https://michaelclevenger.devcamp.space/portfolio/portfolio_items/28785";

    const getfourImgOne = axios.get(fourImgOne);
    const getfourImgTwo = axios.get(fourImgTwo);
    const getfourImgThree = axios.get(fourImgThree);
    const getfourImgFour = axios.get(fourImgFour);
    axios
      .all([getfourImgOne, getfourImgTwo, getfourImgThree, getfourImgFour])
      .then(
        axios.spread((...responses) => {
          console.log(responses);
          const responseFourImgOne = responses[0].data.portfolio_item.url;
          const responseFourImgTwo = responses[1].data.portfolio_item.url;
          const responseFourImgThree = responses[2].data.portfolio_item.url;
          const responseFourImgFour = responses[3].data.portfolio_item.url;
          setDescription(responses[0].data.portfolio_item.description);
          setDescriptionTwo(responses[1].data.portfolio_item.description);
          setDescriptionThree(responses[2].data.portfolio_item.description);
          setDescriptionFour(responses[3].data.portfolio_item.description);

          setThreeImgOne(responseFourImgOne);
          setThreeImgTwo(responseFourImgTwo);
          setThreeImgThree(responseFourImgThree);
          setThreeImgFour(responseFourImgFour);
        }),
      );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="yearFour">
      <div className="four-header">
        <h1 className="year-four">YEAR FOUR</h1>
      </div>

      <div className="fourImg">
        <div className="fourOne">
          <div className="overlay">
            <img src={fourImgOne} />

            <div className="fourOneDescription">{description}</div>
          </div>
        </div>

        <div className="fourTwo">
          <div className="overlay">
            <img src={fourImgTwo} />

            <div className="fourTwoDescription">{descriptionTwo}</div>
          </div>
        </div>

        <div className="fourThree">
          <div className="overlay">
            <img src={fourImgThree} />

            <div className="fourThreeDescription">{descriptionThree}</div>
          </div>
        </div>

        <div className="fourFour">
          <div className="overlay">
            <img src={fourImgFour} />

            <div className="fourFourDescription">{descriptionFour}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Four;
