import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import AppHeader from "../../Components/AppHeader";
import AddSupervisor from "./AddSupervisor";
import AddStudent from "./AddStudent";
import Projects from "./Projects";
import Events from "./Events";
import ContactUs from "./ContactUs";
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import Issues from "./Issues";

function HODHomePage() {
  return (
    <>
      <div className="App">
        <AppHeader />
        <div className="SideMenuAndPageContent">
          <SideBar />
          <div className="PageContent">
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/addsupervisor" element={<AddSupervisor />}></Route>
              <Route path="/addstudent" element={<AddStudent />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/events" element={<Events />}></Route>
              <Route path="/issues" element={<Issues />}></Route>
              <Route path="/contactus" element={<ContactUs />}></Route>
              <Route path="/logout" element={<Logout />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default HODHomePage;
