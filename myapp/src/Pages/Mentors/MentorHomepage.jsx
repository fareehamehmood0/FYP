import React from "react";
import { Route, Routes } from "react-router-dom";
import AppHeader from "../../Components/AppHeader";
import MentorSideBar from "./MentorSideBar";
import MentorDashboard from "./MentorDashboard";
import MentorProjects from "./MentorProjects";
import MentorEvents from "./MentorEvents";
import ContactUs from "./ContactUs";
import MentorLogout from "./MentorLogout";

function MentorHomePage() {
  return (
    <>
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <MentorSideBar />
        <div className="PageContent">
        <Routes>
          <Route path="/" element={<MentorDashboard />}></Route>
          <Route path="/mentorprojects" element={<MentorProjects />}></Route>
          <Route path="/mentorevents" element={<MentorEvents />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/mentorlogout" element={<MentorLogout />}></Route>
        </Routes>
        </div>
      </div>
    </div>
    </>
  );
}

export default MentorHomePage;
