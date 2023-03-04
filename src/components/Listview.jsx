import React from "react";
import "./Listview.css";
import * as FiIcon from "react-icons/fi";
import * as BiIcon from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import * as SlIcons from "react-icons/sl";
import Dropdown from "react-bootstrap/Dropdown";
import Pagination from "react-bootstrap/Pagination";

import { hover } from "@testing-library/user-event/dist/hover";

function Listview() {
  const head = {
    /* width: '100%', */

    display: "flex",
    // padding: "20px",
    fontSize: "20px",
    marginTop: "40px",
    backgroundColor: "white",
    margin: "50px",
    marginRight: "50px",

    alignItems: "center",
    justifyContent: "space-between",
  };
  return (
    <>
      <div>
        <div style={head}>
          <h5 style={{ marginLeft: "35px" }}>Style 01</h5>
          <p style={{ marginRight: "35px", wordSpacing: "5px" }}>
            <AiIcons.AiFillHome
              style={{
                marginBottom: "3px",
                marginRight: "8px",
                color: "purple",
              }}
            />
            <SlIcons.SlArrowRight
              style={{ marginRight: "8px", fontSize: "15px" }}
            />
            Card <SlIcons.SlArrowRight style={{ fontSize: "15px" }} /> Style 01
          </p>
        </div>
            
      </div>
      <div className="container my-5">
        <div className="shadow-4 rounded-5 overflow-hidden">
          <div style={{ display: "flex" }}>
            <p
              style={{
                marginLeft: "10px",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              List
            </p>
            <input
              type="text"
              placeholder=" Search"
              style={{ marginLeft: "77%", width: "130px", paddingLeft: "10px" }}
            />
          </div>
          <table className="table align-middle mb-0 bg-white">
            {/* <thead className="bg-light">
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Status</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead> */}
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="text-sm-start fw-bold mb-1">Elnora</p>
                      <p className="text-sm-start text-muted mb-0">
                        Lead Marketing Facilitator
                      </p>
                      <p>
                        <small>
                          We need to generate the virtual CSS hard drive!
                        </small>
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="text-muted mb-0">Email</p>
                  <p className="fw-bold mb-1">Reid_OConnell4@yahoo.com</p>
                  <p className="text-muted mb-0">Phone</p>
                  <p className="fw-bold mb-1">506-654-1653</p>
                </td>

                <td>
                  <p className="text-muted mb-0">Location</p>
                  <p className="fw-bold mb-1">Saucerize</p>
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    className="rounded-circle"
                    style={{ width: "43px", zIndex: "3" }}
                    alt="Avatar"
                  />
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                    className="rounded-circle"
                    style={{ width: "43px", marginLeft: "-10px", zIndex: "2" }}
                    alt="Avatar"
                  />
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    style={{ width: "43px", marginLeft: "-10px", zIndex: "1" }}
                    alt="Avatar"
                  />
                </td>
                <td>
                  <div className="progress" style={{ height: "5px" }}>
                    <div
                      className="progress-bar"
                      style={{ width: "78%" }}
                      role="progressbar"
                      aria-valuenow="78"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div style={{ marginLeft: "10px", marginTop: "20px" }}>
                    <button className="btn btn-outline-primary mx-2">
                      <FiIcon.FiMessageSquare /> Message
                    </button>

                    <button className="btn btn-outline-danger">
                      <BiIcon.BiBlock /> Block
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                      className="rounded-circle"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div className="ms-3">
                      <p className="text-sm-start fw-bold mb-1">Hirohito</p>
                      <p className="text-sm-start text-muted mb-0">
                        Investor Creative Liaison
                      </p>
                      <p>
                        <small>
                          If we synthesize the protocol, we can get to the RSS
                          circuit through.
                        </small>
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="text-muted mb-0">Email</p>
                  <p className="fw-bold mb-1">Conner22@hotmail.com</p>
                  <p className="text-muted mb-0">Phone</p>
                  <p className="fw-bold mb-1">673-157-1670</p>
                </td>

                <td>
                  <p className="text-muted mb-0">Location</p>
                  <p className="fw-bold mb-1">Port Narcos</p>
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    className="rounded-circle"
                    style={{ width: "43px", zIndex: "3" }}
                    alt="Avatar"
                  />
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                    className="rounded-circle"
                    style={{ width: "43px", marginLeft: "-10px", zIndex: "2" }}
                    alt="Avatar"
                  />
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    style={{ width: "43px", marginLeft: "-10px", zIndex: "1" }}
                    alt="Avatar"
                  />
                </td>
                <td>
                  <div className="progress" style={{ height: "5px" }}>
                    <div
                      className="progress-bar"
                      style={{ width: "78%" }}
                      role="progressbar"
                      aria-valuenow="78"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div
                    style={{
                      marginLeft: "10px",
                      marginTop: "10px",
                      // marginRight: "10px",
                    }}
                  >
                    <button className="btn btn-outline-primary mx-2">
                      <FiIcon.FiMessageSquare /> Message
                    </button>

                    <button className="btn btn-outline-danger">
                      <BiIcon.BiBlock /> Block
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                      className="rounded-circle"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div className="ms-3">
                      <p className="text-sm-start fw-bold mb-1">Kathie</p>
                      <p className="text-sm-start text-muted mb-0">
                        Human Accountability Strategist
                      </p>
                      We need to generate the virtual CSS hard drive!
                    </div>
                  </div>
                </td>
                <td>
                  <p className="text-muted mb-0">Email</p>
                  <p className="fw-bold mb-1">Dangelo40@company.com</p>
                  <p className="text-muted mb-0">Phone</p>
                  <p className="fw-bold mb-1">506-654-1653</p>
                </td>

                <td>
                  <p className="text-muted mb-0">Location</p>
                  <p className="fw-bold mb-1">Saucerize</p>

                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    className="rounded-circle"
                    style={{ width: "43px", zIndex: "3" }}
                    alt="Avatar"
                  />
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                    className="rounded-circle"
                    style={{ width: "43px", marginLeft: "-10px", zIndex: "2" }}
                    alt="Avatar"
                  />
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    style={{ width: "43px", marginLeft: "-10px", zIndex: "1" }}
                    alt="Avatar"
                  />
                </td>
                <td>
                  <div className="progress" style={{ height: "5px" }}>
                    <div
                      className="progress-bar"
                      style={{ width: "78%" }}
                      role="progressbar"
                      aria-valuenow="78"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div
                    style={{
                      marginLeft: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <button className="btn btn-outline-primary mx-2">
                      <FiIcon.FiMessageSquare /> Message
                    </button>

                    <button className="btn btn-outline-danger">
                      <BiIcon.BiBlock /> Block
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className="d-flex">
          <div className="p-2 flex-fill">
            <Pagination>
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>

              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item active>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>

          <div className="p-2 flex-fill">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                10 rows
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">10 rows</Dropdown.Item>
                <Dropdown.Item href="#/action-2">20 rows</Dropdown.Item>
                <Dropdown.Item href="#/action-3">30 rows</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <br />
      </div>
    </>
  );
}

export default Listview;
