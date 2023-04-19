import React, { useState } from "react";
import Contact from "../../pages/Contact/Contact";
import Nav from "../Nav"
import Home from "../../pages/Home/Home";
import Work from "../../pages/Work/Work";
import Resume from "../../pages/Resume/Resume";
// import Projects from "../Projects";
// import Resume from "./Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () =>
    currentPage === "Home" ? (
      <Home />
    ) : currentPage === "Contact" ? (
      <Contact />
     ) : currentPage === "Work" ? (
       <Work />
    ) : currentPage === "Resume" ? (
      <Resume />
    ) : null;
    
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* this is using the current state of the webapge, and also asinging a new state */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* this is calling the renderpage function to render our selected page */}
      {renderPage()}
    </div>
  );
}
