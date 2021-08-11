import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";
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
  const [bizDetails, setbizDetails] = useState();
  const { id } = useParams();
  console.log(id);
  // console.log(starCount);

  useEffect(() => {
    Axios.post("/api/biz_details", {
      BizID: id,
    }).then((res) => {
      console.log(res.data);
      setbizDetails(res.data);
    });
  }, []);

  // console.log("bizDetails", bizDetails);
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
        // src={bizDetails.}
        src={bizDetails ? bizDetails.Background : ""}
        // src="https://dkatom.co.il/storage/ZLVNBzJA2BMjwDkCRdXKbpAjMsXUjZtkqPKUYrMj.jpeg"
        alt=""
      ></img>

      <div className="BizDetails">
        <div className="BizDetailsGrid">
          <div className="BizName">
            <h1>{bizDetails ? bizDetails.BizName : ""}</h1>
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
              <span className="ContactItem">
                {bizDetails ? bizDetails.CellPhone : ""}
              </span>
            </div>
            <div>
              <UserOutlined
                style={{
                  fontSize: "20px",
                  color: "#6AE11E",
                  marginBottom: "20px",
                }}
              />
              <span className="ContactItem">
                {bizDetails ? bizDetails.FirstName : ""}
              </span>
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
              <span className="ContactItem">
                <a href={bizDetails ? "mailto:" + bizDetails.Email : ""}>
                  E-mail לבעל העסק
                </a>
              </span>
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
              <span className="BizExtraItem">
                {bizDetails
                  ? bizDetails.Street +
                    " " +
                    bizDetails.Home +
                    " " +
                    bizDetails.City
                  : ""}
              </span>
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
            <p className="TextOnBiz_P">{bizDetails ? bizDetails.About : ""} </p>
          </div>
        </div>
        <div className="BizLogo">
          <img
            className="BizLogoImg"
            src={bizDetails ? bizDetails.Logo : ""}
            // src="https://dkatom.co.il/storage/Biz/Logos/3238.jpg"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default BizDetails;
