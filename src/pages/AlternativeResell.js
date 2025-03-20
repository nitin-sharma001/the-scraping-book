import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Badge, Col, Image, Row } from "react-bootstrap";
import { FiMonitor } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { Form, InputGroup, Button, Dropdown } from "react-bootstrap";
import { FaSearch, FaFilter } from "react-icons/fa";
import { IoFilter, IoSearchSharp } from "react-icons/io5";
import { Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import Search from "../assets/search.svg";
import $ from "jquery";
import "datatables.net";
import "datatables.net-bs5";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const AlternativeResell = () => {
  const data = [
    {
      name: "mindfactory",
      package: "Nike Sneakers",
      status: "Operational",
      productFound: 3,
    },
    {
      name: "notebooksbilliger",
      package: "Sneakers",
      status: "Operational",
      productFound: 3,
    },
    {
      name: "mindfactory",
      package: "Nike Sneakers",
      status: "Failed",
      productFound: 123,
    },
    {
      name: "notebooksbilliger",
      package: "Hoodies",
      status: "Operational",
      productFound: 3,
    },
    {
      name: "mindfactory",
      package: "Nike Sneakers",
      status: "Failed",
      productFound: 3,
    },
    {
      name: "mindfactory",
      package: "Hoodies",
      status: "Operational",
      productFound: 12,
    },
    {
      name: "Nike",
      package: "Nike Sneakers",
      status: "Operational",
      productFound: 3,
    },
    {
      name: "mindfactory",
      package: "Sneakers",
      status: "Operational",
      productFound: 3,
    },
    {
      name: "mindfactory",
      package: "Nike Sneakers",
      status: "Operational",
      productFound: 3,
    },
  ];

  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("A-Z");

  useEffect(() => {
    $("#customTable").DataTable({
      paging: false, // Disable pagination
      searching: false, // Disable search bar
      lengthChange: false, // Hide "entries per page" dropdown
      info: false, // Hide "Showing X to Y of Z entries" text
    });

    return () => {
      $("#customTable").DataTable().destroy();
    };
  }, []);
  return (
    <div className="bg-blue-main w-100 monitor-setting">
      <Header />
      <div className="pb-4 container-heading mx-4 content-body">
        <Row className="gx-0 align-items-center">
          <Col md={6}>
            <div className="d-flex align-items-center gap-2">
              <FiMonitor className="fs-26 text-gray" />
              <h4 className="fs-22 text-white mb-1">Monitor Settings</h4>
              <IoIosArrowForward className="fs-14 text-white-65" />
              <h5 className="fs-20 text-white-65 mb-1">Alternative Resell</h5>
            </div>
          </Col>
          <Col md={6}>
            <div className="search-filter-container  d-flex justify-content-end gap-2 ">
              {/* Search Input */}
              <InputGroup className="search-input form-input-field  w-75 bdr-radius-9 filter-input">
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
                  className="filter-button  bg-white-26 border-0 fs-15 text-white rounded-3 px-3 py-2 d-flex align-items-center"
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

      <div className=" mt-3 px-4">
        <div className="table-responsive">
          <table id="customTable" className="table custom-table">
            <thead className="rounded-3">
              <tr>
                <th className="fs-13 fw-500">Name</th>
                <th className="fs-13 fw-500">Package</th>
                <th className="fs-13 fw-500">Status</th>
                <th className="fs-13 fw-500">Product Found</th>
                <th className="table-action-btn fw-500 fs-13 d-flex justify-content-end">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr key={index}>
                  <td className="fw-500 fs-14 text-white">{entry.name}</td>
                  <td className="fw-500 fs-14 text-white">{entry.package}</td>
                  <td
                    className={
                      entry.status === "Operational"
                        ? "text-green fs-14 fw-500"
                        : "text-red fs-14 fw-500"
                    }
                  >
                    ● {entry.status}
                  </td>
                  <td>
                    <Badge
                      bg="bg-white-8"
                      className="badge   bg-white-8 fs-12 rounded-pill fw-500 "
                    >
                      {entry.productFound}
                    </Badge>
                  </td>
                  <td className="">
                    <Button
                      variant=""
                      size="sm"
                      className="float-end m--17 fs-15 text-gray fw-500"
                      onClick={() =>
                        navigate("/alternative-resell/sneaker/edit/123")
                      }
                    >
                      <FiEdit2 className="fs-18" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AlternativeResell;
