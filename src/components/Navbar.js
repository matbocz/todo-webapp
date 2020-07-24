import React from "react";

const Navbar = (props) => (
  <nav className="navbar navbar-nav mx-auto navbar-light bg-primary">
    <form className="form-inline my-2">
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        style={{ textAlign: "center" }}
        value={props.search}
        onChange={props.handleSearch}
      />
    </form>
  </nav>
);

export default Navbar;
