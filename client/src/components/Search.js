import { Dropdown } from "react-bootstrap"

function Search() {
  return (
    <div className="search mx-3">
      <div className="drop">
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            الكل
          </Dropdown.Toggle>

          <Dropdown.Menu className="list">
            <Dropdown.Item href="#/action-1 ">نايكي</Dropdown.Item>
            <Dropdown.Item href="#/action-2 ">رياضية</Dropdown.Item>
            <Dropdown.Item href="#/action-3 ">رسمية</Dropdown.Item>
            <Dropdown.Item href="#/action-3 ">رسمية</Dropdown.Item>
            <Dropdown.Item href="#/action-3 ">رسمية</Dropdown.Item>
            <Dropdown.Item href="#/action-3 ">رسمية</Dropdown.Item>
            <Dropdown.Item href="#/action-3 ">رسمية</Dropdown.Item>
            <Dropdown.Item href="#/action-3 ">رسمية</Dropdown.Item>
            <Dropdown.Item href="#/action-3 ">رسمية</Dropdown.Item>
            <Dropdown.Item href="#/action-3 ">رسمية</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <input type="search" placeholder="ابحث عن حذائك . . ." />
    </div>
  )
}

export default Search