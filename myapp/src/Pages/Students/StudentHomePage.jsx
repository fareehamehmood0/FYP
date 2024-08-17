import React from "react";
import { Route, Routes } from "react-router-dom";
import AppHeader from "../../Components/AppHeader";
import StudentsSideBar from "./StudentSideBar";
import StudentsDashboard from "./StudentDashboard";
import StudentsProjects from "./StudentProjects";
import StudentEvents from "./StudentEvents";
import StudentsContactUs from "./StudentContactUs";
import StudentLogout from "./StudentLogout";

function StudentHomePage() {
  return (
    <>
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <StudentsSideBar />
        <Routes>
          <Route path="/" element={<StudentsDashboard />}></Route>
          <Route path="/studentsprojects" element={<StudentsProjects />}></Route>
          <Route path="/studentsevents" element={< StudentEvents />}></Route>
          <Route path="/studentscontactus" element={<StudentsContactUs />}></Route>
          <Route path="/studentlogout" element={<StudentLogout />}></Route>
        </Routes>
      </div>
    </div>
    </>
  );
}

export default StudentHomePage;
