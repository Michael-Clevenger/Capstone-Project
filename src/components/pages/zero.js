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
    const zeroImgOne = "http://localhost:5000/image/1";
    const zeroImgTwo = "http://localhost:5000/image/2";
    const zeroImgThree = "http://localhost:5000/image/4";
    const zeroImgFour = "http://localhost:5000/image/5";

    const getzeroImgOne = axios.get(zeroImgOne);
    const getzeroImgTwo = axios.get(zeroImgTwo);
    const getzeroImgThree = axios.get(zeroImgThree);
    const getzeroImgFour = axios.get(zeroImgFour);
    axios
      .all([getzeroImgOne, getzeroImgTwo, getzeroImgThree, getzeroImgFour])
      .then(
        axios.spread((...responses) => {
          console.log(responses);
          const responseZeroImgOne = responses[0].data.url;
          const responseZeroImgTwo = responses[1].data.url;
          const responseZeroImgThree = responses[2].data.url;
          const responseZeroImgFour = responses[3].data.url;
          console.log(
            responseZeroImgOne,
            responseZeroImgTwo,
            responseZeroImgThree,
            responseZeroImgFour,
          );
          setDescription(responses[0].data.description);
          setDescriptionTwo(responses[1].data.description);
          setDescriptionThree(responses[2].data.description);
          setDescriptionFour(responses[3].data.description);

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
