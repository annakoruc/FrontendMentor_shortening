import React from "react";

import { paths } from "config/paths";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, NotFoundPage } from "pages";
import { PageInProgress } from "pages/PageInProgress/PageInProgress";

function App() {
  return (
    <Routes className="App">
      <Route path={paths.home} element={<HomePage />} />
      <Route path={paths.signUp} element={<LoginPage />} />
      <Route path={paths.login} element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />

      {/* Page in progress */}
      <Route path={paths.pricing} element={<PageInProgress />} />

      <Route path={paths.features} element={<PageInProgress />} />
      <Route
        path={paths.features_linkShortening}
        element={<PageInProgress />}
      />
      <Route path={paths.features_branded_links} element={<PageInProgress />} />
      <Route path={paths.features_analytics} element={<PageInProgress />} />

      <Route path={paths.resources} element={<PageInProgress />} />
      <Route path={paths.resources_blog} element={<PageInProgress />} />
      <Route path={paths.resources_developers} element={<PageInProgress />} />
      <Route path={paths.resources_support} element={<PageInProgress />} />

      <Route path={paths.company} element={<PageInProgress />} />
      <Route path={paths.company_about} element={<PageInProgress />} />
      <Route path={paths.company_our_team} element={<PageInProgress />} />
      <Route path={paths.company_careers} element={<PageInProgress />} />
      <Route path={paths.company_contact} element={<PageInProgress />} />
    </Routes>
  );
}

export default App;
