import { PiShoppingCartSimpleThin } from "react-icons/Pi";
import { FiBell } from "react-icons/Fi";
import { Dropdown } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <div className="main-header py-3  d-flex align-items-center justify-content-between">
        <div className=" d-flex align-items-center justify-content-center gap-4">
          ILLUME
          <div className=" d-flex align-items-center justify-content-center">
            <Dropdown>
              <Dropdown.Toggle
                className="bg-white border-black text-black"
                id="dropdown-basic"
              >
                All
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <input type="text" className="input-box" placeholder="search" />
          </div>
        </div>
        <div className="d-flex right-section  d-flex align-items-center justify-content-center gap-3 w-auto">
          <PiShoppingCartSimpleThin />
          <p className="m-0">|</p>
          <FiBell />
          <p className="m-0">|</p>
          <h6 className=" white-spane-no mb-0">Michel Clerk</h6>
        </div>
      </div>
    </>
  );
}
