import React from "react";
import ReactDOM from "react-dom";

var year = new Date().getFullYear();
function Header(){
  return <header><h1 className="header">Keeper</h1></header>;
}
export default Header;