import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import tree from "../images/tree.jpeg";
import { Image } from "react-bootstrap";
import { FaShare } from "react-icons/fa";

const tabsName = [
  "DASHBOARD",
  "DIAGNOSTICS",
  "DESIGN ILT/VILT",
  "DELIVERY",
  "ASSESSOR",
  "MY CERTIFICATES",
  "POLICY",
];
// const images = [];
export default function Navtab() {
  const [selected, setSelected] = useState("MY CERTIFICATES");
  function selectHandler(value) {
    setSelected(value);
  }
  return (

    <div className="main-tab-section">
      <Tabs
        defaultActiveKey={selected}
        id="uncontrolled-tab-example"
        className="mb-3"
        onSelect={selectHandler}
      >
        {tabsName?.map((item, i) => {
          return (
            <Tab key={i} eventKey={item} title={item}>
              <div className="">
                <section className="my-certificate-section">
                  <h4 className="certificate-heading mb-3 fw-semibold">
                    MY Certificate
                  </h4>
                  <div className="certificate-slider w-100">
                    {[...Array(10)].map((item, i) => {
                      return (
                        <Image
                          src={tree}
                          alt="certificate"
                          className="cdrtificate-image"
                        />
                      );
                    })}
                  </div>
                </section>
                <section className="my-tab-section">
                  <h4 className="certificate-heading mb-3 mt-3 fw-semibold">
                    MY Textimonials
                  </h4>
                  <h5 className="fw-semibold fx-14">Pending</h5>
                  <div className="users-card-wrapper">
                    {[...Array(5)].map((item, i) => {
                      return (
                        <div
                          key={i}
                          className=" card-box-frame d-flex  align-items-center"
                        >
                          <img className="img-section" src={tree} alt="" />
                          <div className="description-box w-100">
                            <p className="fx-16 w-100  fw-normal mb-2">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Sunt quis repellat, cupiditate
                              ratione ex natus? Lorem ipsum dolor sit amet,
                              consectetur
                            </p>
                            <div className="button-section d-flex align-items-center justify-content-between">
                              <p className="d-flex align-items-center justify-content-center gap-2">
                                <FaShare />
                                &nbsp;&nbsp;Kazi Shakerodin{" "}
                              </p>
                              <div className="button-rrapper d-flex align-items-center justify-content-center gap-3">
                                <button type="button" class="btn text-success">
                                  Accpet
                                </button>
                                <button type="button" class="btn text-danger ">
                                  Reaject
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <h5 className="fw-semibold fx-14">Approved</h5>

                  <div className="users-card-wrapper">
                    {[...Array(2)].map((item, i) => {
                      return (
                        <div
                          key={i}
                          className=" card-box-frame d-flex  align-items-center"
                        >
                          <img className="img-section" src={tree} alt="" />
                          <div className="description-box ">
                            <p className="fx-14  fw-normal mb-2">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Sunt quis repellat, cupiditate
                              ratione ex natus? Lorem ipsum dolor sit amet,
                              consectetur
                            </p>
                            <div className="button-section d-flex align-items-center justify-content-between">
                              <p className="d-flex align-items-center justify-content-center gap-2">
                                <FaShare />
                                &nbsp;&nbsp; Shaker Kazi{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
}
