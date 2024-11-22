import React from "react";
import { Route, Routes } from "react-router-dom";
import AppHeader from "../../Components/AppHeader";
import StudentsSideBar from "./StudentSideBar";
import StudentDashboard from "./StudentDashboard";
import StudentProjects from "./StudentProjects";
import StudentEvents from "./StudentEvents";
import StudentLogout from "./StudentLogout";
import Studentreport from "./Studentreport";
import Github from "./Github";

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
          <Route path="/github" element={<Github />}></Route>
          <Route path="/studentlogout" element={<StudentLogout />}></Route>
        </Routes>
      </div>
    </div>
    </>
  );
}

export default StudentHomePage;
