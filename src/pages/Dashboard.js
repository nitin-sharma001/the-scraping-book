import React, { useState } from "react";
import Header from "../components/Header";
import { CiSettings } from "react-icons/ci";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import { FaAngleDown, FaPlus } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

const Dashboard = () => {
    const [selectedRole, setSelectedRole] = useState("");
    const roles = ["User", "Admin"];
  
  
  return (
    <div className="bg-blue-main w-100 dashboard-setting">
      <Header />

      <div className="px-3 pb-3 content-body">
        <div className="mx-3 d-flex align-items-center gap-2 pb-4 container-heading">
          <MdSpaceDashboard className="fs-24 text-gray" />

          <h3 className="fs-22 mb-0 text-white">Dashboard Settings</h3>
        </div>

        <div className="p-3 pt-4">
          <Row>
            <Col md={6}>
              <div className="d-flex flex-column align-items-start gap-2 card-bdr rounded-3 p-3">
                <Button className="px-2 py-1  bdr-white-8 d-flex align-items-center gap-1  bg-white-8  rounded-pill">
                  <span className="d-flex align-items-center justify-content-center  p-1 bg-gray rounded-circle">
                    <FaPlus className="fs-10 text-black" />
                  </span>
                  <small className="fs-12 m-0 text-white">Add Users</small>
                </Button>
                <div className="ps-2 w-100">
                  <label className="form-label fs-13 text-white">
                    Discord ID
                  </label>
                  <input
                    type="text"
                    className="form-control w-100 bg-white-8  form-input-field rounded-3"
                    placeholder="Enter Discord User ID"
                  />
                </div>
                <div className="ps-2 w-100">
                  <label className="form-label fs-13 text-white">Roles</label>

                  <Form.Group className="d-flex align-items-center bg-white-8 rounded-3 form-input-field position-relative">
                    <Dropdown  className="w-100">
                      <Dropdown.Toggle
                        variant="transparent"
                        className="filter-button w-100 text-start form-control bg-transparent border-0 rounded-0 form-input-field d-flex align-items-center justify-content-between"
                      >
                        {selectedRole || "Select Roles for User"}
                        <FaAngleDown className="text-white-8 fs-16 me-3 fw-normal position-absolute end-0" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="w-100">
                        {roles.map((role, index) => (
                          <Dropdown.Item
                            className="text-white-8 fw-500"
                            key={index}
                            eventKey={role}
                          >
                            {role}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>
                </div>
                <div className="w-100 ps-2 mt-3">
                  <Button
                    variant=""
                    className="btn  fs-15 fw-500 d-flex align-items-center gap-2 justify-content-center  update-info-btn w-100 text-white rounded-3"
                  >
                    Add User <AiOutlinePlus className="fs-20 fw-normal" />
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
