import React, { useState, useEffect } from "react";
import Footer from "../footer";
import "../app.css";
import axios from "axios";

const Zero = () => {
  const [zeroImgOne, setZeroImgOne] = useState([]);
  const [zeroImgTwo, setZeroImgTwo] = useState([]);
  const [zeroImgThree, setZeroImgThree] = useState([]);
  const [zeroImgFour, setZeroImgFour] = useState([]);
  const [description, setDescription] = useState("");
  const [descriptionTwo, setDescriptionTwo] = useState("");
  const [descriptionThree, setDescriptionThree] = useState("");
  const [descriptionFour, setDescriptionFour] = useState("");

  const fetchData = () => {
    const zeroImgOne =
      "https://michaelclevenger.devcamp.space/portfolio/portfolio_items/28740";
    const zeroImgTwo =
      "https://michaelclevenger.devcamp.space/portfolio/portfolio_items/28741";
    const zeroImgThree =
      "https://michaelclevenger.devcamp.space/portfolio/portfolio_items/28742";
    const zeroImgFour =
      "https://michaelclevenger.devcamp.space/portfolio/portfolio_items/28744";

    const getzeroImgOne = axios.get(zeroImgOne);
    const getzeroImgTwo = axios.get(zeroImgTwo);
    const getzeroImgThree = axios.get(zeroImgThree);
    const getzeroImgFour = axios.get(zeroImgFour);
    axios
      .all([getzeroImgOne, getzeroImgTwo, getzeroImgThree, getzeroImgFour])
      .then(
        axios.spread((...responses) => {
          console.log(responses);
          const responseZeroImgOne = responses[0].data.portfolio_item.url;
          const responseZeroImgTwo = responses[1].data.portfolio_item.url;
          const responseZeroImgThree = responses[2].data.portfolio_item.url;
          const responseZeroImgFour = responses[3].data.portfolio_item.url;
          setDescription(responses[0].data.portfolio_item.description);
          setDescriptionTwo(responses[1].data.portfolio_item.description);
          setDescriptionThree(responses[2].data.portfolio_item.description);
          setDescriptionFour(responses[3].data.portfolio_item.description);

          setZeroImgOne(responseZeroImgOne);
          setZeroImgTwo(responseZeroImgTwo);
          setZeroImgThree(responseZeroImgThree);
          setZeroImgFour(responseZeroImgFour);
        }),
      );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="yearZero">
      <div className="zero-header">
        <h1 className="year-zero">YEAR ZERO</h1>
      </div>

      <div className="zeroImg">
        <div className="zeroOne">
          <div className="overlay">
            <img src={zeroImgOne} />

            <div className="zeroOneDescription">{description}</div>
          </div>
        </div>

        <div className="zeroTwo">
          <div className="overlay">
            <img src={zeroImgTwo} />

            <div className="zeroTwoDescription">{descriptionTwo}</div>
          </div>
        </div>

        <div className="zeroThree">
          <div className="overlay">
            <img src={zeroImgThree} />

            <div className="zeroThreeDescription">{descriptionThree}</div>
          </div>
        </div>

        <div className="zeroFour">
          <div className="overlay">
            <img src={zeroImgFour} />

            <div className="zeroFourDescription">{descriptionFour}</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Zero;
