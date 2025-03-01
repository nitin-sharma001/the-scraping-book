import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Col, Row } from "react-bootstrap";
const Mainlayout = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth <= 1100);

   useEffect(() => {
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth <= 1100);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <Row className="gx-0">
      <Col md={2} className="">
        <Sidebar />
      </Col>
      {isLargeScreen ? (
        <Col md={12} className="main-content  bg-blue-main">
          <Outlet />
        </Col>
      ) : (
        <Col md={10}  className="main-content  bg-blue-main">
          <Outlet />
        </Col>
      )}
    </Row>
  );
};

export default Mainlayout;
