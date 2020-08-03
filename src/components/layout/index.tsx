import React, { Component } from "react";

import Navbar from "../navbar/index";

import "./style.scss";
import Footer from "../footer";

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <main>Content</main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
