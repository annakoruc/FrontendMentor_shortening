import {
  AllUserLinks,
  Attribution,
  Footer,
  GetStarted,
  HomeCard,
  Navbar,
  SearchBar,
  Statistics,
} from "components";
import { isUserLogged } from "config/auth";

import React from "react";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomeCard />
      <SearchBar />
      {isUserLogged() ? <AllUserLinks /> : ""}
      <Statistics />
      <GetStarted />
      <Footer />
      <Attribution />
    </>
  );
};
