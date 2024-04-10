import React from "react";

import classes from "./SocialLinksProfile.module.css";
import avatar from "./avatar-jessica.jpeg"

function SocialLinksProfile() {
  console.log("here");
  return (
    <div className={classes["social-links-profile"]}>
      <div className={classes["profile-card"]}>
        <img src={avatar}/>
        <div className={classes["user-info"]}>

        <h1>Jessica Randall</h1>
        <h2>London, United Kingdom</h2>
        </div>
        <p>" Front-end developer and avid reader. "</p>
        <div className={classes["social-links-btn-group"]}>
          <button>GitHub</button>
          <button>Frontend Mentor</button>
          <button>Linkedin</button>
          <button>Twitter</button>
          <button>Instagram</button>
        </div>
      </div>
    </div>
  );
}

export default SocialLinksProfile;
