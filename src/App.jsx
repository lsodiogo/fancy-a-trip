import { Route, Switch } from "wouter";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeView from "./views/HomeView";
import NewLocationView from "./views/NewLocationView";
import AboutView from "./views/AboutView";
import NotFoundView from "./views/NotFoundView";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <>
      <ScrollToTop />
      <Header/ >
      
      <Switch>
        <Route path="/">
          <HomeView />
        </Route>

        <Route path="/newlocation">
          <NewLocationView />
        </Route>

        <Route path="/about">
          <AboutView />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
      
      <Footer />
    </>
  )
};

export default App;