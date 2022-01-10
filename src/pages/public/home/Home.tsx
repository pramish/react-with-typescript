import { Button } from "@material-ui/core";

import { Layout } from "../../../components/layout";

import HomePageImage from "./images/helpwithresume.png";
import "./Home.css";

const title = " Home";
const content = "HomePage";
const description = "This is a Home Page";

export const Home = () => {
  return (
    <Layout title={title} content={content} description={description}>
      <div className="homeContainer">
        <div className="textButtonContainer">
          <p className="textTitle">
            React with TypeScript
            <br />
            boilerplate.
          </p>
          <p className="textSubtitle">
            Welcome back! Please login to continue.
          </p>
          <Button className="button">React with TypeScript boilerplate</Button>
        </div>
        <div className="imageContainer">
          <img className="homeImage" src={HomePageImage} alt="homepageresume" />
        </div>
      </div>
    </Layout>
  );
};
