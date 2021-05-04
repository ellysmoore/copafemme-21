import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import GalleryPage from "./Pages/Gallery";
import Footer from "./Components/Footer";
import SponsorsPage from "./Pages/Sponsors";
import TeamPage from "./Pages/Team";
import ContactPage from "./Pages/Contact";
import RegisterTeamPage from "./Pages/RegisterTeam";

// import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <main id="main">
            <Route path="/about" exact component={About} />
            <Route path="/gallery" exact component={GalleryPage} />
            <Route path="/sponsors" exact component={SponsorsPage} />
            <Route path="/team" exact component={TeamPage} />
            <Route path="/contact" exact component={ContactPage} />
            <Route path="/register-team" exact component={RegisterTeamPage} />
          </main>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
