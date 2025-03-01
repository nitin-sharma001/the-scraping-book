import { Badge, Image } from "react-bootstrap";
import { CiSettings } from "react-icons/ci";
import { FiMonitor } from "react-icons/fi";

import Logout from "../assets/logout.svg"
import Logo from "../assets/logo.svg";
import Sneakerwhite from "../assets/sneaker-white.svg";
import Sneaker from "../assets/sneakers.svg";
import Shopping from "../assets/shopping-bag.svg";
import Shoppingwhite from "../assets/shopping-bag-white.svg";
import Tickets from "../assets/ticket.svg";
import Ticketswhite from "../assets/ticket-white.svg";
import User from "../assets/user.svg";

import { MdSpaceDashboard } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Collapse, Card } from "react-bootstrap";
import { FaShoePrints, FaTicketAlt, FaTags } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Sidebar = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth <= 1100);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/");
  const [activeTabMonitor, setActiveTabMonitor] = useState(false);

  const monitorHandler = () => {
    setActiveTabMonitor(!activeTabMonitor);
    setOpen(!open);
    setActiveTab("/monitor/sneaker");
  }
  
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth <= 1100);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isLargeScreen ? (
        <nav class="navbar  fixed-top  bg-dark-blue">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <Image src={Logo} className="logo object-fit-cover" alt="logo" />
            </a>
            <button
              class="navbar-toggler btn-close12"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon btn-close12"></span>
            </button>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header d-flex justify-content-between align-items-center bg-dark-blue">
                <h5
                  class="offcanvas-title text-white"
                  id="offcanvasNavbarLabel"
                >
                  Scrapping book
                </h5>
                <RxCross2
                  className="btn-close12 "
                  size={30}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
                {/* <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button> */}
              </div>
              <div class="offcanvas-body bg-dark-blue">
                <div className="p-3">
                  <h5 className="fs-11 ps-3 text-white-65">MAIN</h5>
                  <ListGroup className="nav pt-1 ps-0" as="ul">
                    {/* General Settings */}
                    <ListGroup.Item
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className={`border-0 rounded-3 ${
                        activeTab === "/"
                          ? "bg-light-blue text-gray fw-600"
                          : "bg-dark-blue text-gray-2 fw-500"
                      }`}
                      as="li"
                      onClick={() => setActiveTab("/")}
                    >
                      <Link
                        to={"/"}
                        className={`d-flex align-items-center gap-2 fs-14 text-decoration-none border-0 rounded-3 ${
                          activeTab === "/"
                            ? " text-gray fw-600"
                            : " text-gray-2 fw-500"
                        }`}
                      >
                        <CiSettings className="fs-20" />
                        General Settings
                      </Link>
                    </ListGroup.Item>

                    {/* Monitor Dropdown */}
                    <ListGroup as="ul" className="text-white bg-dark-blue">
                      <ListGroup.Item
                        onClick={monitorHandler}
                        className={`border-0 rounded-3 bg-dark-blue  d-flex justify-content-between align-items-center   gap-2   ${
                          activeTab === "/monitor/sneaker" ||
                          activeTab === "/monitor/alternativeresell" ||
                          activeTab === "/monitor/tickets"
                            ? "bg-light-blue text-gray"
                            : "bg-dark-blue text-gray-2"
                        }`}
                        as="li"
                        aria-controls="monitor-collapse"
                        aria-expanded={open}
                      >
                        <div className="d-flex align-items-center justify-content-between w-100">
                          <div
                            className={`w-100  border-0 rounded-3 ${
                              activeTab === "/monitor/sneaker" ||
                              activeTab === "/monitor/alternativeresell" ||
                              activeTab === "/monitor/tickets"
                                ? " text-gray fw-600"
                                : " text-gray-2 fw-500"
                            }`}
                          >
                            <Link
                              to="/monitor/sneaker"
                              className={`d-flex align-items-center justify-content-between w-100 text-decoration-none ${
                                activeTab === "/monitor/sneaker"
                                  ? "text-gray fw-600"
                                  : "text-gray-2 fw-500"
                              }`}
                            >
                              <div className="d-flex align-items-center gap-2 fs-14">
                                <FiMonitor className="fs-20" /> Monitor
                              </div>

                              <span>
                                {activeTabMonitor ? (
                                  <IoIosArrowDown className="fs-16" />
                                ) : (
                                  <IoIosArrowForward className="fs-16" />
                                )}
                              </span>
                            </Link>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <Collapse in={open}>
                        <div id="monitor-collapse" className="blue-dark-blue">
                          <ListGroup.Item
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                            className={`border-0 rounded-3 ${
                              activeTab === "/monitor/sneaker"
                                ? "text-white bg-dark-blue"
                                : "text-gray bg-dark-blue"
                            } ps-4`}
                            as="li"
                            onClick={() => setActiveTab("/monitor/sneaker")}
                          >
                            <Link
                              to="/monitor/sneaker"
                              className={`text-decoration-none d-flex align-items-center gap-2 fs-12 ${
                                activeTab === "/monitor/sneaker"
                                  ? "text-white bg-dark-blue fw-600"
                                  : "text-gray-2 bg-dark-blue fw-500"
                              }`}
                            >
                              {activeTab === "/monitor/sneaker" ? (
                                <Image
                                  src={Sneakerwhite}
                                  className=" object-fit-cover"
                                  alt="logo"
                                />
                              ) : (
                                <Image
                                  src={Sneaker}
                                  className=" object-fit-cover"
                                  alt="logo"
                                />
                              )}
                              Sneaker
                            </Link>
                          </ListGroup.Item>
                          <ListGroup.Item
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                            className={`border-0 rounded-3 ${
                              activeTab === "/monitor/alternativeresell"
                                ? "text-white bg-dark-blue"
                                : "text-gray bg-dark-blue"
                            } ps-4`}
                            as="li"
                            onClick={() =>
                              setActiveTab("/monitor/alternativeresell")
                            }
                          >
                            <Link
                              to="/monitor/alternativeresell"
                              className={`text-decoration-none d-flex align-items-center gap-2 fs-12  ${
                                activeTab === "/monitor/alternativeresell"
                                  ? "text-white bg-dark-blue fw-600"
                                  : "text-gray-2 bg-dark-blue fw-500"
                              }`}
                            >
                              {activeTab === "/monitor/alternativeresell" ? (
                                <Image
                                  src={Shoppingwhite}
                                  className=" object-fit-cover"
                                  alt="logo"
                                />
                              ) : (
                                <Image
                                  src={Shopping}
                                  className=" object-fit-cover"
                                  alt="logo"
                                />
                              )}{" "}
                              Alternative Resell
                            </Link>
                          </ListGroup.Item>
                          <ListGroup.Item
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                            className={`border-0  rounded-3 ${
                              activeTab === "/monitor/tickets"
                                ? "text-white bg-dark-blue fw-600"
                                : "text-gray bg-dark-blue fw-500"
                            } ps-4`}
                            as="li"
                            onClick={() => setActiveTab("/monitor/tickets")}
                          >
                            <Link
                              to="/monitor/tickets"
                              className={`text-decoration-none  d-flex align-items-center gap-2 fs-12  ${
                                activeTab === "/monitor/tickets"
                                  ? "text-white bg-dark-blue fw-600"
                                  : "text-gray-2 bg-dark-blue fw-500"
                              }`}
                            >
                              {activeTab === "/monitor/tickets" ? (
                                <Image
                                  src={Ticketswhite}
                                  className=" object-fit-cover"
                                  alt="logo"
                                />
                              ) : (
                                <Image
                                  src={Tickets}
                                  className=" object-fit-cover"
                                  alt="logo"
                                />
                              )}
                              Tickets
                            </Link>
                          </ListGroup.Item>
                        </div>
                      </Collapse>
                    </ListGroup>

                    {/* Dashboard Settings */}
                    <ListGroup.Item
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className={`border-0 rounded-3 ${
                        activeTab === "/dashboard"
                          ? "bg-light-blue text-gray fw-600"
                          : "bg-dark-blue text-gray-2 fw-500"
                      }`}
                      as="li"
                      onClick={() => setActiveTab("/dashboard")}
                    >
                      <Link
                        to={"/dashboard"}
                        className={`d-flex align-items-center gap-2 fs-14 text-gray text-decoration-none ${
                          activeTab === "/dashboard"
                            ? " text-gray fw-600"
                            : " text-gray-2 fw-500"
                        }`}
                      >
                        <MdSpaceDashboard className="fs-20" />
                        Dashboard Settings
                      </Link>
                    </ListGroup.Item>

                    {/* Changelogs */}
                    <ListGroup.Item
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className={`border-0  rounded-3 ${
                        activeTab === "/changelog"
                          ? "bg-light-blue text-gray fw-600"
                          : "bg-dark-blue text-gray-2 fw-500"
                      }`}
                      as="li"
                      onClick={() => setActiveTab("/changelog")}
                    >
                      <Link
                        to={"/changelog"}
                        className={`d-flex align-items-center justify-content-between text-decoration-none ${
                          activeTab === "/changelog"
                            ? " text-gray fw-600"
                            : " text-gray-2 fw-500"
                        }`}
                      >
                        <div className="d-flex align-items-center fs-14 gap-2">
                          <FaRegFileAlt className="fs-20" />
                          Changelogs
                        </div>
                        <Badge
                          bg="bg-white-8"
                          className="bg-white-8  bdr-white-8 fs-12 rounded-pill fw-500"
                        >
                          3
                        </Badge>
                      </Link>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <div className="sidebar d-flex flex-column justify-content-between bg-dark-blue">
          <div className="d-flex flex-column">
            <div className=" logo-container">
              <Image src={Logo} className="logo object-fit-cover" alt="logo" />
            </div>
            <div className="p-3">
              <h5 className="fs-11 ps-3 text-white-65">MAIN</h5>
              <ListGroup className="nav pt-1 ps-0" as="ul">
                {/* General Settings */}
                <ListGroup.Item
                  className={`border-0 rounded-3 ${
                    activeTab === "/"
                      ? "bg-light-blue text-gray fw-600"
                      : "bg-dark-blue text-gray-2 fw-500"
                  }`}
                  as="li"
                  onClick={() => setActiveTab("/")}
                >
                  <Link
                    to={"/"}
                    className={`d-flex align-items-center gap-2 fs-14 text-decoration-none border-0 rounded-3 ${
                      activeTab === "/"
                        ? " text-gray fw-600"
                        : " text-gray-2 fw-500"
                    }`}
                  >
                    <CiSettings className="fs-20" />
                    General Settings
                  </Link>
                </ListGroup.Item>

                {/* Monitor Dropdown */}
                <ListGroup as="ul" className="text-white bg-dark-blue">
                  <ListGroup.Item
                    onClick={monitorHandler}
                    className={`border-0 rounded-3 bg-dark-blue  d-flex justify-content-between align-items-center   gap-2   ${
                      activeTab === "/monitor/sneaker" ||
                      activeTab === "/monitor/alternativeresell" ||
                      activeTab === "/monitor/tickets"
                        ? "bg-light-blue text-gray"
                        : "bg-dark-blue text-gray-2"
                    }`}
                    as="li"
                    aria-controls="monitor-collapse"
                    aria-expanded={open}
                  >
                    <div className="d-flex align-items-center justify-content-between w-100">
                      <div
                        className={`w-100  border-0 rounded-3 ${
                          activeTab === "/monitor/sneaker" ||
                          activeTab === "/monitor/alternativeresell" ||
                          activeTab === "/monitor/tickets"
                            ? " text-gray fw-600"
                            : " text-gray-2 fw-500"
                        }`}
                      >
                        <Link
                          to="/monitor/sneaker"
                          className={`d-flex align-items-center justify-content-between w-100 text-decoration-none ${
                            activeTab === "/monitor/sneaker"
                              ? "text-gray fw-600"
                              : "text-gray-2 fw-500"
                          }`}
                        >
                          <div className="d-flex align-items-center gap-2 fs-14">
                            <FiMonitor className="fs-20" /> Monitor
                          </div>

                          <span>
                            {activeTabMonitor ? (
                              <IoIosArrowDown className="fs-16" />
                            ) : (
                              <IoIosArrowForward className="fs-16" />
                            )}
                          </span>
                        </Link>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <Collapse in={open}>
                    <div id="monitor-collapse" className="blue-dark-blue">
                      <ListGroup.Item
                        className={`border-0 rounded-3 ${
                          activeTab === "/monitor/sneaker"
                            ? "text-white bg-dark-blue"
                            : "text-gray bg-dark-blue"
                        } ps-4`}
                        as="li"
                        onClick={() => setActiveTab("/monitor/sneaker")}
                      >
                        <Link
                          to="/monitor/sneaker"
                          className={`text-decoration-none d-flex align-items-center gap-2 fs-12 ${
                            activeTab === "/monitor/sneaker"
                              ? "text-white bg-dark-blue fw-600"
                              : "text-gray-2 bg-dark-blue fw-500"
                          }`}
                        >
                          {activeTab === "/monitor/sneaker" ? (
                            <Image
                              src={Sneakerwhite}
                              className=" object-fit-cover"
                              alt="logo"
                            />
                          ) : (
                            <Image
                              src={Sneaker}
                              className=" object-fit-cover"
                              alt="logo"
                            />
                          )}
                          Sneaker
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item
                        className={`border-0 rounded-3 ${
                          activeTab === "/monitor/alternativeresell"
                            ? "text-white bg-dark-blue"
                            : "text-gray bg-dark-blue"
                        } ps-4`}
                        as="li"
                        onClick={() =>
                          setActiveTab("/monitor/alternativeresell")
                        }
                      >
                        <Link
                          to="/monitor/alternativeresell"
                          className={`text-decoration-none d-flex align-items-center gap-2 fs-12  ${
                            activeTab === "/monitor/alternativeresell"
                              ? "text-white bg-dark-blue fw-600"
                              : "text-gray-2 bg-dark-blue fw-500"
                          }`}
                        >
                          {activeTab === "/monitor/alternativeresell" ? (
                            <Image
                              src={Shoppingwhite}
                              className=" object-fit-cover"
                              alt="logo"
                            />
                          ) : (
                            <Image
                              src={Shopping}
                              className=" object-fit-cover"
                              alt="logo"
                            />
                          )}{" "}
                          Alternative Resell
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item
                        className={`border-0  rounded-3 ${
                          activeTab === "/monitor/tickets"
                            ? "text-white bg-dark-blue fw-600"
                            : "text-gray bg-dark-blue fw-500"
                        } ps-4`}
                        as="li"
                        onClick={() => setActiveTab("/monitor/tickets")}
                      >
                        <Link
                          to="/monitor/tickets"
                          className={`text-decoration-none  d-flex align-items-center gap-2 fs-12  ${
                            activeTab === "/monitor/tickets"
                              ? "text-white bg-dark-blue fw-600"
                              : "text-gray-2 bg-dark-blue fw-500"
                          }`}
                        >
                          {activeTab === "/monitor/tickets" ? (
                            <Image
                              src={Ticketswhite}
                              className=" object-fit-cover"
                              alt="logo"
                            />
                          ) : (
                            <Image
                              src={Tickets}
                              className=" object-fit-cover"
                              alt="logo"
                            />
                          )}
                          Tickets
                        </Link>
                      </ListGroup.Item>
                    </div>
                  </Collapse>
                </ListGroup>

                {/* Dashboard Settings */}
                <ListGroup.Item
                  className={`border-0 rounded-3 ${
                    activeTab === "/dashboard"
                      ? "bg-light-blue text-gray fw-600"
                      : "bg-dark-blue text-gray-2 fw-500"
                  }`}
                  as="li"
                  onClick={() => setActiveTab("/dashboard")}
                >
                  <Link
                    to={"/dashboard"}
                    className={`d-flex align-items-center gap-2 fs-14 text-gray text-decoration-none ${
                      activeTab === "/dashboard"
                        ? " text-gray fw-600"
                        : " text-gray-2 fw-500"
                    }`}
                  >
                    <MdSpaceDashboard className="fs-20" />
                    Dashboard Settings
                  </Link>
                </ListGroup.Item>

                {/* Changelogs */}
                <ListGroup.Item
                  className={`border-0  rounded-3 ${
                    activeTab === "/changelog"
                      ? "bg-light-blue text-gray fw-600"
                      : "bg-dark-blue text-gray-2 fw-500"
                  }`}
                  as="li"
                  onClick={() => setActiveTab("/changelog")}
                >
                  <Link
                    to={"/changelog"}
                    className={`d-flex align-items-center justify-content-between text-decoration-none ${
                      activeTab === "/changelog"
                        ? " text-gray fw-600"
                        : " text-gray-2 fw-500"
                    }`}
                  >
                    <div className="d-flex align-items-center fs-14 gap-2">
                      <FaRegFileAlt className="fs-20" />
                      Changelogs
                    </div>
                    <Badge
                      bg="bg-white-8"
                      className="bg-white-8  bdr-white-8 fs-12 rounded-pill fw-500"
                    >
                      3
                    </Badge>
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>

          {/* User Section */}
          <div className="module-logout position-relative mx-3 mb-3 ">
            <Card className=" module-logout bg-white-5 back-clr rounded-3">
              <div className="rounded-2 d-flex justify-content-between align-items-center logout-btn">
                <div className="d-flex align-items-center justify-content-between">
                  <Image
                    className="object-fit-cover "
                    src={User}
                    alt="user-logo"
                  />
                  <span className="fs-14 fw-600 text-white fw-semibold ms-2">
                    Boss-1
                  </span>
                </div>
                <Link className="text-white d-flex align-items-center justify-content-center text-decoration-underline">
                  <Image
                    src={Logout}
                    className=" object-fit-cover"
                    alt="logo"
                  />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
