import React from "react";
import Header from "../components/Header";
import { FaHistory, FaRegFileAlt } from "react-icons/fa";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { FaShop } from "react-icons/fa6";
import Newsites from "../assets/newsites.svg";
import { CgFileDocument } from "react-icons/cg";
import Changelogo from "../assets/changelogo.svg";
const Changelogs = () => {
  return (
    <div className="bg-blue-main w-100 dashboard-setting">
      <Header />

      <div className="px-3 pb-3 content-body">
        <div className="mx-3 d-flex align-items-center gap-2 pb-4 container-heading">
          <CgFileDocument className="fs-22 text-gray" />

          <h3 className="fs-22 mb-0 text-white">Changelogs</h3>
        </div>

        <div className="p-3 pt-4">
          <Row className="gy-3">
            <Col md={6}>
              <div className="module h-100">
                <Card className="module bg-white-5 rounded-3 h-100 change-log-card">
                  <Card.Body className="p-0">
                    <div className="d-flex justify-content-between align-items-start container-heading  py-3 px-3">
                      <div className="d-flex align-items-center gap-3">
                        <Image src={Changelogo} />
                        <div className="d-flex flex-column align-items-start">
                          <h5 className="text-white mb-0 fs-16">Changelogs</h5>
                          <small className="fs-14 fw-500 text-white-45">
                            Latest changes to the scraping book
                          </small>
                        </div>
                      </div>
                      <Button
                        variant=""
                        className="bg-white-8 card-bdr fs-12 fw-500 rounded-pill text-white py-1"
                      >
                        Last Update: Yesterday, 12:31
                      </Button>
                    </div>
                    <div className="px-3 ps-4  pe-lg-4 pb-2 pt-4 fs-14 fw-500 lh-29">
                      <p className="text-white m-0 fw-500">
                        Changelog for the scraping book v2.5.0
                      </p>
                      <ul className="p-0">
                        <li>
                          <p className="text-white-65  m-0">
                            - New Feature: Introduced a powerful scheduling tool
                            that allows users to automate scraping tasks at
                            specified intervals.
                          </p>
                        </li>
                        <li>
                          <p className="text-white-65  m-0">
                            - Improvement: Enhanced the data extraction
                            algorithms for better accuracy and speed, reducing
                            extraction time by 30%.
                          </p>
                        </li>
                        <li>
                          <p className="text-white-65  m-0">
                            - Bug Fix: Resolved an issue where the software
                            would crash when handling large datasets.
                          </p>
                        </li>
                        <li>
                          <p className="text-white-65  m-0">
                            - Update: Updated the user interface for a more
                            intuitive experience, including new dashboard
                            widgets for quick access to recent tasks.
                          </p>
                        </li>
                        <li>
                          <p className="text-white-65  m-0">
                            - Integration: Added support for exporting data
                            directly to Google Sheets and Microsoft Excel.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={6}>
              <div className="module h-100">
                <Card className="module bg-white-5 rounded-3 h-100 change-log-card">
                  <Card.Body className="p-0">
                    <div className="d-flex justify-content-between align-items-start container-heading py-3 px-3">
                      <div className="d-flex align-items-center gap-3">
                        <Image src={Newsites} />
                        <div className="d-flex flex-column align-items-start">
                          <h5 className="text-white mb-0 fs-16">New Sites</h5>
                          <small className="fs-14 fw-500 text-white-45">
                            Overview the lastest sites wie added
                          </small>
                        </div>
                      </div>
                      <Button className="bg-white-8 card-bdr fw-500 fs-12 rounded-pill  text-white py-1">
                        Last Update: Yesterday, 12:31
                      </Button>
                    </div>
                    <div className="px-3 ps-4 pe-lg-5 pb-2 pt-4 fs-14 fw-500 lh-29">
                      <ul className="p-0">
                        <li>
                          <p className="text-white  m-0">- New Sites Added:</p>
                        </li>
                        <li>
                          <p className="text-white-65 pe-lg-5 m-0">
                            <span className="text-white">
                              - Amazon Marketplace :
                            </span>
                            How you can scrape product data directly from
                            Amazon.
                          </p>
                        </li>
                        <li>
                          <p className="text-white-65 pe-lg-5 m-0">
                            <span className="text-white">- eBay :</span>
                            Added support for scrapping listings and prices from
                            eBay.
                          </p>
                        </li>
                        <li>
                          <p className="text-white-65 pe-lg-5 m-0">
                            <span className="text-white">- Etsy :</span>
                            Added support for scrapping listings and prices Etsy
                            shops.
                          </p>
                        </li>
                        <li>
                          <p className="text-white-65 pe-lg-5 m-0">
                            <span className="text-white">- Walmart :</span>
                            Added support for scrapping listings and prices from
                            online store.
                          </p>
                        </li>
                        <li>
                          <p className="text-white-65 pe-lg-5 m-0">
                            <span className="text-white">- Best Buy :</span>
                            You can now gather product inforamtion from Best
                            Buy.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Changelogs;
