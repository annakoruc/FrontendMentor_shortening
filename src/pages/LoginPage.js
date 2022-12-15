import { Attribution, Navbar } from "components";
import LoginWithGoogle from "config/LoginWithGoogle";
import React from "react";

export const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <LoginWithGoogle />
      <Attribution />
    </div>
  );
};
