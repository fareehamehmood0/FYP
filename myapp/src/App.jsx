import "./App.css";
import Landingpage from "./Components/Landingpage";
import Login from "./Components/Login";
import ContactUs from "./Components/ContactUs";
import Signup from "./Components/Signup";
import HODHomePage from "./Pages/HOD/HODHomePage";
import MentorHomePage from "./Pages/Mentors/MentorHomepage";
import StudentHomePage from "./Pages/Students/StudentHomePage";
import Homepage from "./Components/Homepage";
import AboutUs from "./Components/AboutUs";
import PrivacyPolicy from "./Components/Privacypolicy";

function App() {
  return (
    <>
      <Homepage />
      <Landingpage />
      <ContactUs />
      <PrivacyPolicy />
      <AboutUs />
      <Signup />
      <Login />
      <HODHomePage />
      <MentorHomePage />
      <StudentHomePage />
    </>
  );
}

export default App;
