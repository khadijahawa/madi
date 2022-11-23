import React from "react";
import { Image } from "antd";
import image from "../utilities/image.jpg";
import header from "../utilities/header.jpg";
import logo from "../utilities/logo.jpg";
import logo2 from "../utilities/logo2.jpg";
import sideImage from "../utilities/sideImage.png";
import styles from "../styles/style.module.css";
// import waterMark from "../utilities/waterMark.jpg";
import { Link } from "react-router-dom";
import Map from "../components/Map";

const Home = () => {
  const data = {
    text1:
      "We discourage washing your shirt too often to avoid shrinkage and keep it in good condition as long as possible.Machine wash at max. 30 degrees.Hang dryStain Removal Vinegar & baking soda on the stain and add to washing machine.",
    text2:
      "Our styles are made to last so let´s make them last together. Should you need repair, we offer free repair on all Skall Studio styles, regardless of purchasing date.  Please contact our store or customer service here if you need help or if you need guidance on how to maintain your Skall Studio styles.",
    text3:
      "We only use 100 % organic and certified cotton, as we wish to support cotton cultivation without the use of harmful chemicals, synthetic fertilizers, or other soil additives, harmful to the environment and the people involved.",
  };

  return (
    <div className="container my-4">
      <div className="m-4">
        <div className="row">
          <div className="col">
            <img src={logo} className="img-fluid float-left " alt="logo" />
          </div>
          <div className="col-sm-3 d-none d-lg-block center">
            <img src={logo2} alt="logo2" />
            <img src={header} alt="header" />
          </div>
          <div className="col-sm-3">
            <Image src={image} />
          </div>
        </div>
        <div className=" d-none d-xs-block d-lg-none d-xl-none">
          Edgar Shirt <br />
          Rosated brown Made in: India <br />
          Fabric : 100% organic cotton
          <br />
        </div>
      </div>
      <div>
        <p className={styles.header}>The story behind the garment</p>
        <p className={styles.text}>
          We believe that nature, animals, and people are closely connected. And
          we feel obliged to take this full cycle into consideration whenever we
          take a new step – for the equality of beings.
        </p>
      </div>
      <div className="m-4 pt-4">
        <div className="row justify-content-md-center">
          <div className="col-6 col-sm-6 col-md-9">
            <img
              src={sideImage}
              className="img-fluid float-left h-100 w-100"
              alt="side"
            />
          </div>
          <div className="col-6 col-sm-6 offset-md-0 col-md-9 mt-3">
            <p className={styles.text}>
              We source all our cotton and linen in India where the factory that
              we have worked closely with for many years is situated
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12 text-center">
        <div className="accordion" id="accordionExample">
          <div>
            <div id="headingOne">
              <button
                className={styles.Button}
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Care Instructions
              </button>
            </div>

            <div
              id="collapseOne"
              className="collapse "
              aria-labelledby="headingOne"
            >
              <div>{data.text1}</div>
            </div>
          </div>
          <div>
            <div id="headingTwo">
              <button
                className={styles.Button}
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How To Repair
              </button>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div>{data.text2}</div>
              <Link to="Contact" className={styles.email}>
                Contact Us! Send An Email
              </Link>
            </div>
          </div>
          <div>
            <div id="headingThree">
              <button
                className={styles.Button}
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Conscious Fashion
              </button>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div>{data.text3}</div>
              {/* <img src={waterMark} className="float-right img-fluid" /> */}
            </div>
          </div>
        </div>
      </div>
      <div class=" m-2 pl-3 mt-4">
        <Map />
      </div>
    </div>
  );
};

export default Home;
