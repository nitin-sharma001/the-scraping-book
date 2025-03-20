import { PiXLogo } from "react-icons/pi";
import Button from "react-bootstrap/Button";
import { CiSettings } from "react-icons/ci";
import { FiMonitor, FiSettings } from "react-icons/fi";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import Header from "../components/Header";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
const General = () => {
  const [color, setColor] = useState("#00E98E"); // Default color

  // Function to handle color change
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const linkHandler = () => {
      window.open(
        "https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks",
        "_blank"
      );
  }

  return (
    <div className="bg-blue-main w-100">
      <Header />

      <div className="px-4 pb-5 content-body">
        <div className=" d-flex align-items-center gap-2 pb-4 ">
          <FiSettings className="fs-24 text-gray" />

          <h3 className="fs-22 mb-0 text-white">General Settings</h3>
        </div>

        <div className="module-general">
          <div className="module-general bg-white-5  rounded-3">
            <div className="d-flex justify-content-between  py-3 px-4 container-heading ">
              <div className="d-flex flex-column align-items-start ">
                <Button className="  bg-white-faded px-2 py-1 mb-2 bdr-white-8 d-flex align-items-center gap-1    rounded-pill">
                  <CiSettings className="fs-15 text-gray " />
                  <small className="fs-12 fw-500 m-0 text-white">
                    General Settings
                  </small>
                </Button>
                <h5 className="mb-2 text-white fw-600 fs-16">
                  Manage your Group Settings
                </h5>
                <small className="text-white-45 fs-14 fw-500">
                  Enter details for your discord group webhook messages
                </small>
              </div>
              <div className="d-flex align-items-center gap-2 ">
                <div className="d-flex flex-column gap-2 align-items-center">
                  <div className="d-flex jsutify-content-between align-items-center setting-container rounded-circle p-2">
                    <CiSettings className="fs-10 text-gray " />
                  </div>
                  <div className="d-flex jsutify-content-between align-items-center setting-container rounded-circle p-2">
                    <CiSettings className="fs-13 text-white " />
                  </div>
                </div>
                <div className="d-flex jsutify-content-between align-items-center setting-container rounded-circle p-2">
                  <FiMonitor className="fs-16 text-gray-2 " />
                </div>
              </div>
            </div>
            <div className=" py-2 px-4 text-white rounded">
              <div className="mb-3">
                <label className="form-label fs-13 text-white fw-500">
                  Group Name
                </label>
                <input
                  type="text"
                  className="form-control fw-500  form-input-field rounded-3"
                  placeholder="Enter Group Name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fs-13 text-white fw-500">
                  Hexa Decimal
                </label>
                <div className="d-flex align-items-center form-input-field rounded">
                  <span className="text-gray ps-2 fw-bold">#</span>
                  <input
                    type="text"
                    className="form-control fw-500 bg-transparent border-0 rounded-3 text-white form-input-field"
                    value={color.replace("#", "")} // Show HEX code without #
                    readOnly
                  />
                  <div className="border-start border-secondary color-picker px-1 pt-1">
                    <input
                      type="color"
                      className="color-input border border-0 bdr-radius-9"
                      value={color}
                      onChange={handleColorChange}
                      style={{
                        width: "65px",
                        height: "30px",
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fs-13 text-white fw-500">
                  Footer Image URL
                </label>
                <input
                  type="text"
                  className="form-control fw-500   form-input-field rounded-3"
                  placeholder="Enter image URL"
                />
              </div>

              <div className="mb-3">
                <label className="fw-500 form-label fs-13 text-white d-flex justify-content-between">
                  Domain{" "}
                  <a
                    onClick={linkHandler}
                    href="#"
                    className="text-gray fs-12 fw-500 small"
                  >
                    How it works?
                  </a>
                </label>
                <input
                  type="text"
                  className="form-control fw-500  form-input-field rounded-3"
                  placeholder="Enter domain"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fs-13 text-white fw-500">
                  Changelog webhook
                </label>
                <input
                  type="text"
                  className="form-control fw-500  form-input-field rounded-3"
                  placeholder="Enter webhook"
                />
              </div>

              <Button
                variant=""
                className="  update-info-btn update-btn w-100 text-white  rounded-3 fw-600 fs-15 mb-3"
              >
                Update Information
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
