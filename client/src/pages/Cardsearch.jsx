import React from "react";
import "../css/searchcard.css"
const DoctorBooking = () => {
  return (
    <div className="container">
      <h1>BOOK N MEET A DOCTOR!</h1>
      <p>India's best online appointment scheduling platform</p>
      <div className="search-section">
        <select className="dropdown">
          <option>State</option>
        </select>
        <select className="dropdown">
          <option>District</option>
        </select>
        <select className="dropdown">
          <option>Doctor / Specialization</option>
        </select>
        <button className="search-btn">Search</button>
      </div>
      <div className="icons-container">
        <div className="icon-box"><img src="/icons/surgery.png" alt="Surgery" /></div>
        <div className="icon-box"><img src="/icons/lab.png" alt="Lab" /></div>
        <div className="icon-box"><img src="/icons/cardiology.png" alt="Cardiology" /></div>
        <div className="icon-box"><img src="/icons/first-aid.png" alt="First Aid" /></div>
        <div className="icon-box"><img src="/icons/stethoscope.png" alt="Stethoscope" /></div>
        <div className="icon-box"><img src="/icons/microscope.png" alt="Microscope" /></div>
      </div>
    </div>
  );
};

export default DoctorBooking;
