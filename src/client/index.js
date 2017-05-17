import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from '../pages/app';
import AboutUs from '../pages/about';
import ContactUs from '../pages/contact-us';
import Header from '../components/header';

const application = (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={App} />
      <Route path="/about" component={AboutUs} />
      <Route path="/contact" component={ContactUs} />
    </div>
  </Router>
)

reactDom.render(
  application,
  document.getElementById("root")
);
