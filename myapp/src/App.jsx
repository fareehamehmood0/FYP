import "./App.css";
import Landingpage from "./Components/Landingpage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import HODHomePage from "./Pages/HOD/HODHomePage";
import MentorHomePage from "./Pages/Mentors/MentorHomepage";
import StudentHomePage from './Pages/Students/StudentHomePage';


function App() {
  return (
    <>
      <Landingpage/>
      <Signup/>
      <Login/>
      <HODHomePage/>
      <MentorHomePage/>
      <StudentHomePage/>
      
    </>
  );
}

export default App;
