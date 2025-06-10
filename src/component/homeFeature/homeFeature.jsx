import "./homeFeature.css";
import React from "react";

const HomeFeature = ({ imageSrc, alt, title, heading, description }) => {
  return (
    <>
      <div className="feature">
        <img src={imageSrc} alt={alt} />
        <div className="feature-content">
          <h2>{title}</h2>
          <h1>
            {heading.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <span className="break-on-desktop">
                  <br />
                </span>
              </React.Fragment>
            ))}
          </h1>
          <p className="feature-description">
            {description.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeFeature;
