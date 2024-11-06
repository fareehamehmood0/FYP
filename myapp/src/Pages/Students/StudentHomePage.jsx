import React from "react";
import { Route, Routes } from "react-router-dom";
import AppHeader from "../../Components/AppHeader";
import StudentsSideBar from "./StudentSideBar";
import StudentDashboard from "./StudentDashboard";
import StudentProjects from "./StudentProjects";
import StudentEvents from "./StudentEvents";
import ContactUs from "./ContactUs";
import StudentLogout from "./StudentLogout";
import Studentreport from "./Studentreport";

function StudentHomePage() {
  return (
    <>
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <StudentsSideBar />
        <Routes>
          <Route path="/" element={<StudentDashboard />}></Route>
          <Route path="/studentprojects" element={<StudentProjects />}></Route>
          <Route path="/studentevents" element={< StudentEvents />}></Route>
          <Route path="/studentreport" element={< Studentreport />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/studentlogout" element={<StudentLogout />}></Route>
        </Routes>
      </div>
    </div>
    </>
  );
}

export default StudentHomePage;
