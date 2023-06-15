import React from "react";
import ReactDOM from "react-dom";

var year = new Date().getFullYear();

function Footer(){
  return <footer><p className="footer">copyright {year}</p></footer>;
}



export default Footer;