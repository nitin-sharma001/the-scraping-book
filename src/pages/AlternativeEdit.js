import React, { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2, FiMonitor } from "react-icons/fi";
import {
  Button,
  Card,
  CardBody,
  Col,
  Dropdown,
  Image,
  InputGroup,
  Modal,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { Form } from "react-bootstrap";
import {
  FaDiscord,
  FaExternalLinkAlt,
  FaPlay,
  FaPlus,
  FaSearch,
} from "react-icons/fa";
import Header from "../components/Header";
import { IoFilter, IoSearchSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Search from "../assets/search.svg";
import { AiOutlineInfo, AiOutlinePlus } from "react-icons/ai";
const AlternativeEdit = () => {
  const [selectedFilter, setSelectedFilter] = useState("A-Z");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [leftValue, setLeftValue] = useState(38);
  const [rightValue, setRightValue] = useState(50);

  useEffect(() => {
    updateSlider();
  }, [leftValue, rightValue]);

  const updateSlider = () => {
    const min = 0,
      max = 100;
    const leftPercent = ((leftValue - min) / (max - min)) * 100;
    const rightPercent = ((rightValue - min) / (max - min)) * 100;

    document.documentElement.style.setProperty("--left", `${leftPercent}%`);
    document.documentElement.style.setProperty(
      "--right",
      `${100 - rightPercent}%`
    );
  };

  const handleLeftChange = (e) => {
    const value = Math.min(parseInt(e.target.value), rightValue - 1);
    setLeftValue(value);
  };

  const handleRightChange = (e) => {
    const value = Math.max(parseInt(e.target.value), leftValue + 1);
    setRightValue(value);
  };

  const infoHandler = () => {
      window.open(
        "https://www.ticketmaster.de/event/pitbull-party-after-dark-tickets/433448237",
        "_blank"
      );
  }

  return (
    <div className="bg-blue-main w-100 monitor-setting">
      <Header />
      <div className="pb-3  container-heading mx-4 content-body">
        <Row className="gx-0 align-items-center">
          <Col md={6}>
            <div className="d-flex align-items-center gap-2">
              <FiMonitor className="fs-26 text-gray" />
              <h4 className="fs-22 text-white mb-1">Monitor Settings</h4>
              <IoIosArrowForward className="fs-14 text-white-65" />
              <h5 className="fs-20 text-white-65 mb-1">Alternative Resell</h5>
              <IoIosArrowForward className="fs-14 text-white-65" />
              <h5 className="fs-20 text-white-65 mb-1">Edit</h5>
            </div>
          </Col>
          <Col md={6}>
            <div className="search-filter-container  d-flex justify-content-end gap-2 ">
              {/* Search Input */}
              <InputGroup className="search-input form-input-field  w-64 bdr-radius-9 filter-input">
                <InputGroup.Text className="form-input-field bg-transparent text-white border-0 fw-lighter">
                  <Image src={Search} alt="search" />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search Monitors"
                  className="form-input-field bg-transparent text-white border-0 ps-0"
                />
              </InputGroup>

              {/* Filter Button */}
              <Dropdown>
                {/* Custom Button Without Default Dropdown Icon */}
                <Dropdown.Toggle
                  as="div" // Prevents Bootstrap from adding the default dropdown icon
                  className="filter-button filter-input  bg-white-26 fs-15 text-white bdr-radius-9 px-3 py-2 d-flex align-items-center"
                >
                  Filter <IoFilter className="ms-2" />
                </Dropdown.Toggle>

                {/* Dropdown Menu */}
                <Dropdown.Menu className="border-0 p-1 rounded-3 dropdown-menu">
                  <span className=" px-3 fw-500 fs-14">Select Filters</span>
                  <Dropdown.Item
                    onClick={() => setSelectedFilter("A-Z")}
                    className="d-flex justify-content-between text-white dropdown-item"
                  >
                    A-Z{" "}
                    <input
                      type="radio"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents Dropdown.Item from handling this click
                        setSelectedFilter("A-Z");
                      }}
                      checked={selectedFilter === "A-Z"}
                      readOnly
                    />
                  </Dropdown.Item>

                  <Dropdown.Item
                    onClick={() => setSelectedFilter("Z-A")}
                    className="d-flex justify-content-between text-white dropdown-item"
                  >
                    Z-A{" "}
                    <input
                      type="radio"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents Dropdown.Item from handling this click
                        setSelectedFilter("Z-A");
                      }}
                      checked={selectedFilter === "Z-A"}
                      readOnly
                    />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>

      <div id="edit-monitor" className=" mt-4 px-4 ">
        <div className="pb-3 container-heading">
          <Row className="gx-3 ">
            <Col md={6}>
              <div className="module-card-edit h-100">
                <Card className="module bg-white-5 h-100">
                  <Card.Body>
                    <Button className="fs-12 p-1 bg-white-5 card-bdr px-2 fw-500  rounded-pill text-white d-flex align-items-center gap-1">
                      <FaDiscord size={12} className="text-gray " />
                      Webhook Settings
                    </Button>
                    <p className="fs-14 fw-500 text-white-45 pt-3 mb-3 w-75">
                      Please provide the webhook URL to which you would like the
                      embedded messages to be delivered.
                    </p>
                    <span className="fs-12 ps-2 fw-500 text-white pb-3">
                      Webhook
                    </span>

                    <Form className="mt-1">
                      <div className="d-flex  justify-content-between gap-3">
                        <div className="w-100">
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter Webhook"
                            defaultValue="Enter Webhook"
                            className="form-control w-100 bg-white-8  form-input-field bdr-radius-9 "
                          />
                        </div>
                        <div>
                          <Button
                            variant=""
                            className="d-flex align-items-center gap-2 px-3 fs-15 bg-white-7 filter-input  text-white bdr-radius-9"
                          >
                            Test <FaPlay className="fs-12" />
                          </Button>
                        </div>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col md={6}>
              <div className=" h-100">
                <Card className="monitor-edit-card bg-blue-main ">
                  <Card.Body className="card-bdr bdr-radius-9 p-3">
                    <div className="d-flex flex-column align-items-start gap-2 ">
                      <div className="d-flex align-items-center justify-content-between w-100">
                        <Button
                          variant=""
                          className="px-2 py-1 bdr-white-8 d-flex align-items-center gap-1   rounded-pill"
                        >
                          <span className="d-flex align-items-center justify-content-center  p-1 bg-gray rounded-circle">
                            <FaPlus className="fs-7 text-black " />
                          </span>
                          <small className="fs-12 m-0 text-white">
                            Add New Product
                          </small>
                        </Button>

                        <div
                          onClick={infoHandler}
                          className="d-flex align-items-center justify-content-center p-1 bg-gray rounded-circle"
                        >
                          <AiOutlineInfo className="fs-10 text-black " />
                        </div>
                      </div>
                      <div className="ps-2 w-100">
                        <label className="form-label fw-500 fs-12 text-white">
                          Product URL/ID
                        </label>
                        <input
                          type="text"
                          className="form-control w-100 bg-white-8  form-input-field bdr-radius-9"
                          placeholder="Enter link or product ID"
                        />
                      </div>
                      <div className="d-flex gap-2 w-100 ps-2 mt-3">
                        <Button
                          variant=""
                          className="btn d-flex  update-info-btn fw-500 align-items-center justify-content-center gap-2 fs-15  update-info-btn w-50 text-white bdr-radius-9"
                        >
                          Add
                          <AiOutlinePlus className="fs-20 fw-normal" />
                        </Button>
                        <Button
                          variant=""
                          className="btn fs-15  bdr-white-8 bg-white-7 fw-500 w-50 text-white filter-input bdr-radius-9"
                        >
                          Delete <RxCross2 className="fs-20" />
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                  <Form></Form>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
        <div className="py-3">
          <div className="search-filter-container  d-flex justify-content-start gap-2 pb-3">
            {/* Search Input */}
            <InputGroup className="search-input form-input-field  w-30 bdr-radius-9 filter-input">
              <InputGroup.Text className="form-input-field bg-transparent text-white border-0 fw-lighter">
                <Image src={Search} alt="search" />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search Monitors"
                className="form-input-field bg-transparent text-white border-0 ps-0"
              />
            </InputGroup>

            {/* Filter Button */}
            <Dropdown>
              {/* Custom Button Without Default Dropdown Icon */}
              <Dropdown.Toggle
                as="div" // Prevents Bootstrap from adding the default dropdown icon
                className="filter-button  bg-white-26 border-0 fs-15 text-white bdr-radius-9 px-3 py-2 d-flex align-items-center"
              >
                Filter <IoFilter className="ms-2" />
              </Dropdown.Toggle>

              {/* Dropdown Menu */}
              <Dropdown.Menu className="border-0 p-1 rounded-3 dropdown-menu">
                <span className=" px-3 fw-500 fs-14">Select Filters</span>
                <Dropdown.Item
                  onClick={() => setSelectedFilter("A-Z")}
                  className="d-flex justify-content-between text-white dropdown-item"
                >
                  A-Z{" "}
                  <input
                    type="radio"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents Dropdown.Item from handling this click
                      setSelectedFilter("A-Z");
                    }}
                    checked={selectedFilter === "A-Z"}
                    readOnly
                  />
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => setSelectedFilter("Z-A")}
                  className="d-flex justify-content-between text-white dropdown-item"
                >
                  Z-A{" "}
                  <input
                    type="radio"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents Dropdown.Item from handling this click
                      setSelectedFilter("Z-A");
                    }}
                    checked={selectedFilter === "Z-A"}
                    readOnly
                  />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="table-responsive">
            <table id="customTable" className="table custom-table">
              <thead>
                <tr>
                  <th className="fs-13 fw-500">Name</th>
                  <th className="fs-13 fw-500">Status</th>
                  <th className="fs-13 fw-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(7)].map((_, index) => (
                  <tr key={index}>
                    <td>
                      <a
                        href="https://www.nike.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center text-white fs-14 fw-500 gap-2 text-decoration-none"
                      >
                        <FaExternalLinkAlt className="text-gray fs-16" />{" "}
                        https://www.smythstoys.com/uk/en-gb/toys/fashion-and-dolls/barbie/barbie-doll-chelsea-can-be-doctor/p/194105002
                      </a>
                    </td>
                    <td className="text-active fs-14 fw-500">● Active</td>
                    <td className="">
                      <div className="fs-18 d-flex fw-500 align-items-center gap-2">
                        <FiEdit2
                          size={18}
                          className="text-gray cursor-pointer"
                          onClick={handleShow}
                        />

                        <RiDeleteBinLine
                          size={18}
                          className="text-danger1  cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered animation={true}>
        <Modal.Header className="border-0 pb-0 ">
          <div className="d-flex w-100  justify-content-between">
            <h5 className=" text-white fs-18 fw-600">Edit Item</h5>
            <RxCross2
              className="btn-close12 "
              size={30}
              onClick={handleClose}
            />
          </div>
        </Modal.Header>
        <Modal.Body className="pb-0">
          <Form>
            <Form.Group md="4" controlId="validationCustom01">
              <Form.Label className=" text-white ps-2">
                Link/Product ID
              </Form.Label>
              <Button className="fs-14 bg-none modal-text-btn bdr-radius-9 bg-white-8">
                https://www.smythstoys.com/uk/en-gb/toys/fashion-and-dolls/ba...
              </Button>
            </Form.Group>

            <Form.Group
              md="4"
              controlId="validationCustom01"
              className="py-2  container-heading pb-4"
            >
              <Form.Label className=" text-white ps-2">
                Special Webhook
              </Form.Label>
              <Form.Group className="d-flex align-items-center  bdr-white-8 bg-white-8 bdr-radius-9">
                <FaDiscord className="text-gray ms-2 fs-25 " />
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Webhook"
                  defaultValue="Enter Webhook"
                  className="form-control bg-transparent border-0  form-input-field "
                />
              </Form.Group>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom01" className="py-2">
              {/* <div className="d-flex justify-content-between  pt-2">
                <h5 className=" text-white fs-18 fw-600">Size Range</h5>

                <div>
                  <span
                    className=" text-muted1"
                    style={{ left: `${(leftValue / 100) * 100}%` }}
                  >
                    {leftValue}
                  </span>
                  <span className=" text-muted1">-</span>
                  <span
                    className=" text-muted1"
                    style={{ right: `${100 - (rightValue / 100) * 100}%` }}
                  >
                    {rightValue}
                  </span>
                </div>
              </div> */}
              {/* 
              <div className="multi-range-slider pt-3">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={leftValue}
                  onChange={handleLeftChange}
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={rightValue}
                  onChange={handleRightChange}
                />

                <div className="slider">
                  <div className="track"></div>
                  <div
                    className="range"
                    style={{
                      left: `${(leftValue / 100) * 100}%`,
                      right: `${100 - (rightValue / 100) * 100}%`,
                    }}
                  ></div>
                  <div
                    className="thumb left"
                    style={{ left: `${(leftValue / 100) * 100}%` }}
                  ></div>
                  <div
                    className="thumb right"
                    style={{ right: `${100 - (rightValue / 100) * 100}%` }}
                  ></div>
                </div>
                <div className="d-flex justify-content-around pt-3">
                  <span
                    className=" text-muted1"
                    style={{ left: `${(leftValue / 100) * 100}%` }}
                  >
                    {leftValue}
                  </span>
                  <span
                    className=" text-muted1"
                    style={{ right: `${100 - (rightValue / 100) * 100}%` }}
                  >
                    {rightValue}
                  </span>
                </div>
              </div> */}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className=" border-0 pt-0 ">
          <Button
            variant=""
            className="update-info-btn text-white w-100 bg-purple border-0 bdr-radius-9  "
            onClick={handleClose}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AlternativeEdit;
