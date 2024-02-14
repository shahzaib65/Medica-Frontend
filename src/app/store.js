import { configureStore } from '@reduxjs/toolkit';
import registerReducer from "../pages/Signup/registerSlice";
import loginReducer from "../pages/Login/loginSlice";
import verifyReducer from "../pages/SignupVerificationcode/verificationSlice";
import serviceReducer from "../pages/PatientDashboard/serviceSlice"

export const store = configureStore({
    reducer: {
      signup: registerReducer,
      login: loginReducer,
      verify: verifyReducer,
      service: serviceReducer
    },
  });