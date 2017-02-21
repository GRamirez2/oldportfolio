import React from 'react'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

var Main = require("../components/Main");
var Child1 = require("../components/children/Child1");
var Child2 = require("../components/children/Child2");
var GrandChild1 = require("../components/children/grandchildren/GrandChild1");
var GrandChild2 = require("../components/children/grandchildren/GrandChild2");

import NavBar from '../components/NavBar';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Story from '../pages/Story';
import Contact from '../pages/Contact';
import PDF from '../pages/PDF';

// Export the Routes
export default (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={NavBar}>
      <IndexRoute component={Portfolio} />
      <Route path="resume" component={Resume} />
       <Route path="story" component={Story} />
      <Route path="contact" component={Contact} />
      <Route path="pdf" component={PDF} />

      {/* If user selects Child1 then show the appropriate component*/}
      {/*<Route path="Child1" component={Child1} >---*/}

        {/* Child1 has its own Grandchildren options */}
        {/*<Route path="GrandChild1" component={GrandChild1} />---*/}
        {/*<Route path="GrandChild2" component={GrandChild2} />---*/}

        {/*<IndexRoute component={GrandChild2} />---*/}

      {/*</Route>---*/}

      {/* If user selects Child2 then show the appropriate component*/}
      {/*<Route path="Child2" component={Child2} />---*/}

      {/* If user selects any other path... we get the Home Route */}
      {/*<IndexRoute component={Child2} />*/}

    </Route>
  </Router>
);
