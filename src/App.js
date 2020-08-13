import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./containers/Homepage";
import { Pagenotfound } from "./components/Pagenotfound";
import { Aboutuspage } from "./containers/Aboutuspage";
import { Ourcoursespage } from "./containers/Ourcoursespage";
import { Bolgpage } from "./containers/Bolgpage";
import { Contactpage } from "./containers/Contactpage";
import { classRoompage } from "./containers/servicepages/classRoompage";
import { Onlineclassroompage } from "./containers/servicepages/Onlineclassroompage";
import { Corporatetrainingpage } from "./containers/servicepages/Corporatetrainingpage";
import { collegetrainingpage } from "./containers/servicepages/collegetrainingpage";
import { Placementpage } from "./containers/servicepages/Placementpage";
import { Gallerypage } from "./containers/Gallerypage";
import { Fullstackdevpage } from "./containers/coursespages/Fullstackdevpage";
import { Fullstackwebpage } from "./containers/coursespages/Fullstackwebpage";
import { DataSciencepage } from "./containers/coursespages/DataSciencepage";
import { AwsDeveopspage } from "./containers/coursespages/AwsDeveopspage";
import Index from "./components/ScrollToTop/Index";
import IndexScrollIndicator from "./components/ScrollIndicator/IndexScrollIndicator";
import Workshoppageone from "./containers/workshopspages/Workshoppageone";
import carrerpageone from "./containers/carrerpages/carrerpageone";

function App() {
  return (
    <div>
      <IndexScrollIndicator />
      <Index />
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={Aboutuspage} />
          <Route path="/courses" component={Ourcoursespage} />
          <Route path="/bolg" component={Bolgpage} />
          <Route path="/contact" component={Contactpage} />
          <Route path="/classroom" component={classRoompage} />
          <Route path="/onlineclassroom" component={Onlineclassroompage} />
          <Route path="/Corporatetraining" component={Corporatetrainingpage} />
          <Route path="/collegetraining" component={collegetrainingpage} />
          <Route path="/placement" component={Placementpage} />
          <Route path="/gallery" component={Gallerypage} />
          <Route path="/fullstackdeveloper" component={Fullstackdevpage} />
          <Route path="/fullstackwebapp" component={Fullstackwebpage} />
          <Route path="/datascience" component={DataSciencepage} />
          <Route exact path="/awsdevops" component={AwsDeveopspage} />
          <Route exact path="/workshops" component={Workshoppageone} />
          <Route exact path="/career" component={carrerpageone} />


          <Route exact path="*" component={Pagenotfound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
