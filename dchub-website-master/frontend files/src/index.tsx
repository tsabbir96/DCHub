import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AlertSnackbarProvider } from "./components/context/AlertSnackbarContext";
import { MyThemeProvider } from "./components/context/MyThemeContext";
import { ProfileDataProvider } from "./components/context/profile_data/ProfileDataContext";
import { SubmissionsProvider } from "./components/context/submission/SubmissionsContext";

 

ReactDOM.render(
  <ProfileDataProvider>
    <SubmissionsProvider>
      <MyThemeProvider>
        <AlertSnackbarProvider>
          <App />
        </AlertSnackbarProvider>
      </MyThemeProvider>
    </SubmissionsProvider>
  </ProfileDataProvider>,

  document.getElementById("root")
);
