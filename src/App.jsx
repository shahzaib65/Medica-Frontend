
import React from "react";

import LoginPage from "pages/Login";
import Verification from "pages/SignupVerificationcode"
import Forgot from "pages/ForgottenPassword"
import PasswordresetsuccessfulPage from "pages/Passwordresetsuccessful";
import LearnMorePage from "pages/LearnMore";
import SignupPage from "pages/Signup";
import AccountoptionhomepagePage from "pages/Accountoptionhomepage";
import PatientDashboardPage from "pages/PatientDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorDashboardPage from "pages/DoctorDashboard";
import PatientmybookingsPage from "pages/Patientmybookings";
import PatientProfilesettingsPage from "pages/PatientProfilesettings";
import PatientconsultationpagePage from "pages/Patientconsultationpage";
import DoctorpatientscreenPage from "pages/Doctorpatientscreen";
import DoctorprofilesettingsPage from "pages/Doctorprofilesettings";
import SessionsandcalendarPage from "pages/Sessionsandcalendar";
import { ProSidebarProvider } from "react-pro-sidebar";
import SignupVerificationcodePage from "pages/SignupVerificationcode";


function App() {
  return (
    <ProSidebarProvider>
   <Router>
      <Routes>
      <Route path="/" element={<PatientDashboardPage/>}/>
      <Route path="/patientDashboard" element={<LoginPage/>}/>
      <Route path="/register" element={<SignupPage/>}/>
      <Route path="/verification" element={<SignupVerificationcodePage/>}/>
      
       
      </Routes>
    </Router>
    </ProSidebarProvider>
    
  );
}

export default App;
