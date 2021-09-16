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
    const fourImgOne = "http://localhost:5000/image/20";
    const fourImgTwo = "http://localhost:5000/image/21";
    const fourImgThree = "http://localhost:5000/image/22";
    const fourImgFour = "http://localhost:5000/image/23";

    const getfourImgOne = axios.get(fourImgOne);
    const getfourImgTwo = axios.get(fourImgTwo);
    const getfourImgThree = axios.get(fourImgThree);
    const getfourImgFour = axios.get(fourImgFour);
    axios
      .all([getfourImgOne, getfourImgTwo, getfourImgThree, getfourImgFour])
      .then(
        axios.spread((...responses) => {
          console.log(responses);
          const responseFourImgOne = responses[0].data.url;
          const responseFourImgTwo = responses[1].data.url;
          const responseFourImgThree = responses[2].data.url;
          const responseFourImgFour = responses[3].data.url;
          console.log(
            responseFourImgOne,
            responseFourImgTwo,
            responseFourImgThree,
            responseFourImgFour,
          );
          setDescription(responses[0].data.description);
          setDescriptionTwo(responses[1].data.description);
          setDescriptionThree(responses[2].data.description);
          setDescriptionFour(responses[3].data.description);

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
