import React from "react";
import "./homepage.component.scss";
import mobileStat from "../../assets/image-mockups.png";
import Button from "../../components/button/button.component";
import ServiceCard from "../../components/servicecard.component/servicecard.component";
import firsticon from "../../assets/icon-online.svg";
import secondicon from "../../assets/icon-budgeting.svg";
import thirdicon from "../../assets/icon-onboarding.svg";
import lasticon from "../../assets/icon-api.svg";
const HomePage = () => {
  return (
    <div className="homepage container">
      {/* first Section  */}
      <div className="d-flex">
        <div className="text-container d-flex flex-column">
          <div className="col-flex">
            <h1 className="title">Next generation digital banking</h1>
          </div>

          <div className="col-flex">
            <p className="description">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
          </div>
          <div className="btn-box col-flex">
            <Button />
          </div>
        </div>
        <div className="image-container">
          <img
            src={mobileStat}
            alt="digital statistcs"
            className="mobile-image"
          ></img>
        </div>
      </div>
      {/* second Section */}
      <div className="d-flex flex-column">
        <div className="second-desc">
          <h1>Who choose Easybank?</h1>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="d-flex service-cont">
          <ServiceCard
            headertext="Online Banking"
            image={firsticon}
            descriptionText="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
          />
          <ServiceCard
            headertext="Simple Budgeting"
            image={secondicon}
            descriptionText="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
          />
          <ServiceCard
            headertext="Fast Onboarding"
            image={thirdicon}
            descriptionText="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
          />
          <ServiceCard
            headertext="Open API"
            image={lasticon}
            descriptionText="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
          />
        </div>
      </div>
      {/* Last Section  */}
      <h2 className="article-head">Latest Articles</h2>
      <div className="d-flex"></div>
    </div>
  );
};

export default HomePage;
