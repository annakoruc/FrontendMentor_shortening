import React from "react";
import ReactDOM from "react-dom";

import {
  SearchBar,
  Footer,
  Navbar,
  Statistics,
  AllUserLinks,
  HomeCard,
} from "components";
import { Attribution } from "components/Attribution";
import { GetStarted } from "components/GetStarted";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeCard />
      <SearchBar />
      <AllUserLinks />
      <Statistics />
      <GetStarted />
      <Footer />
      <Attribution />
    </div>
  );
}

export default App;
