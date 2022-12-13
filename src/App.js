import React from "react";

import { paths } from "config/paths";
import { Route, Routes } from "react-router-dom";
import { HomePage, SignUp } from "pages";
import { LoginPage } from "pages/LoginPage";

function App() {
  return (
    <Routes className="App">
      <Route path={paths.home} element={<HomePage />} />
      <Route path={paths.signUp} element={<SignUp />} />
      <Route path={paths.login} element={<LoginPage />} />
    </Routes>
  );
}

export default App;
