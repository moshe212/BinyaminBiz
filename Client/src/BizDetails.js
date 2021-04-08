import React, { useState } from "react";
import BizTicker from "./BizTicker";
import "./BizDetails.css";

import { Rate } from "antd";
import {
  WhatsAppOutlined,
  MailOutlined,
  UserOutlined,
  PhoneOutlined,
  TagOutlined,
  TagsOutlined,
  EnvironmentOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

const BizDetails = () => {
  const [starCount, setstarCount] = useState(0);

  console.log(starCount);
  return (
    <div className="bizDetailsRoot">
      <div className="BizDetailHeader">
        <div className="BizDetails_Search"></div>
        <div className="BizDetails_Categorys">
          <BizTicker />
        </div>
      </div>
      <img
        className="BizDetailsImg"
        src="https://dkatom.co.il/storage/ZLVNBzJA2BMjwDkCRdXKbpAjMsXUjZtkqPKUYrMj.jpeg"
        alt=""
      ></img>

      <div className="BizDetails">
        <div className="BizDetailsGrid">
          <div className="BizName">
            <h1>SlikApp</h1>
            <div className="BizDigitalIcon">
              <img
                className="BizFacebookIcon"
                src="/Images/facebook.png"
                alt=""
              ></img>
              <img
                className="BizInstagramIcon"
                src="/Images/instagram.png"
                alt=""
              ></img>
              <img
                className="BizYoutubeIcon"
                src="/Images/youtube2.png"
                alt=""
              ></img>
            </div>
          </div>
          <div className="BizContact">
            <div className="PhoneBiz">
              <PhoneOutlined
                style={{
                  fontSize: "20px",
                  color: "#6AE11E",
                  marginBottom: "20px",
                }}
              />
              <span className="ContactItem">0523587990</span>
            </div>
            <div>
              <UserOutlined
                style={{
                  fontSize: "20px",
                  color: "#6AE11E",
                  marginBottom: "20px",
                }}
              />
              <span className="ContactItem">משה</span>
            </div>
            <div>
              <WhatsAppOutlined
                style={{
                  fontSize: "20px",
                  color: "#6AE11E",
                  marginBottom: "20px",
                }}
              />
              <span className="ContactItem">WhatsApp לבעל העסק</span>
            </div>
            <div>
              <MailOutlined
                style={{
                  fontSize: "20px",
                  color: "#6AE11E",
                  marginBottom: "20px",
                }}
              />
              <span className="ContactItem">E-mail לבעל העסק</span>
            </div>
          </div>
          <div className="BizExtra">
            <div className="BizExtraRate">
              <Rate
                defaultValue={0}
                style={{
                  marginBottom: "15px",
                  color: "#E11ECB",
                  allowclear: true,
                }}
                onChange={function (value) {
                  console.log(5);
                  setstarCount(value);
                }}
              />
              ({starCount})
            </div>
            <div>
              <EnvironmentOutlined
                style={{
                  fontSize: "20px",
                  color: "#6AE11E",
                  marginBottom: "20px",
                }}
              />
              <span className="BizExtraItem">חשמונאים</span>
            </div>
            <div>
              <TagsOutlined
                style={{
                  fontSize: "20px",
                  color: "#6AE11E",
                  marginBottom: "20px",
                }}
              />
              <span className="BizExtraItem">קופונים</span>
            </div>
            <div>
              <ShareAltOutlined
                style={{
                  fontSize: "20px",
                  color: "#6AE11E",
                  marginBottom: "20px",
                }}
              />
              <span className="BizExtraItem">לשיתוף העסק</span>
            </div>
          </div>
        </div>
        <div className="BizDetailsText">
          <div className="AddRate">
            <span>לדירוג העסק</span>
            <Rate
              defaultValue={0}
              style={{
                marginBottom: "15px",
                color: "#E11ECB",
                allowclear: true,
              }}
              //   onChange={function (value) {
              //     console.log(5);
              //     setstarCount(value);
              //   }}
            />
          </div>
          <div className="TextOnBiz">
            <p className="TextOnBiz_H">
              לפתח כל חלום עד למציאות.. זה מה שאנחנו עושים!
            </p>
            <p className="TextOnBiz_P">
              לעהרקםחעהפ קפםחגרהעכפם חפםחגפםהעכח פרחק פחפםחעה פלח פםחגפכ
              העחרחקפםח פהעחפם חפפםח העפםחפםח פרהעכחגרקהעפ פםהחענפרחקנפ פםחנפהעם
              רקפנהעחפםח{" "}
            </p>
          </div>
        </div>
        <div className="BizLogo">
          <img
            className="BizLogoImg"
            src="https://dkatom.co.il/storage/Biz/Logos/3238.jpg"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default BizDetails;
