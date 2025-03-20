import React from 'react'
import { PiXLogo } from "react-icons/pi";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
const Header = () => {

const navigate = useNavigate();
  const linkHandler = () => {
    window.open("https://x.com/thescrapingbook", "_blank");
  }

  return (
    <div className="general-header bg-blue-main w-84 d-flex justify-content-between px-4">
      <div className="d-flex flex-column ">
        <h5 className="text-white-65 fs-14 mb-0 fw-500">Welcome back,</h5>
        <h4 className="text-white fs-16 m-0">Boss-1</h4>
      </div>
      <Button onClick={linkHandler} variant='' className="text-white px-3 py-0 border-0 fs-13 fw-500 rounded-pill bg-white-15">
        Follow Us on <PiXLogo className='fs-18'/>
      </Button>
    </div>
  );
}

export default Header
