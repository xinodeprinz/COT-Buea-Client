import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./form-validation";
import {
  Home,
  TestForm,
  Login,
  Dashboard,
  PageOne,
  PageTwo,
  PageThree,
  PageFour,
  Thanks,
  ChangePhoto,
  Logout,
  CurrentPassword,
  NewPassword,
  PayFee,
  CourseRegistration,
  FinalRegisteredCourses,
  FormB,
  CA,
  FinalResult,
  Transactions,
  Info,
  Excel,
  PageNotFound,
  ProtectedRoutes,
  Faculty,
  Password,
  Aim,
  UploadCourses,
  Test
} from "./components/Exports";

const App = () => {
  const auth = (localStorage.getItem('token')) ? true : false;
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/student-info" component={PageOne} />
          <Route exact path="/parent-info" component={PageFour} />
          <Route exact path="/select-faculty" component={PageTwo} />
          <Route exact path="/select-department" component={PageThree} />
          <Route exact path="/thanks" component={Thanks} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/test-form" component={TestForm} />
          <Route exact path="/change-profile-photo" component={ChangePhoto} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/current-password" component={CurrentPassword} />
          <Route exact path="/new-password" component={NewPassword} />
          <Route exact path="/pay-fee" component={PayFee} />
          <Route exact path="/transactions" component={Transactions} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/excel" component={Excel} />
          <Route
            exact
            path="/course-registration"
            component={CourseRegistration}
          />
          <Route
            exact
            path="/final-registered-courses"
            component={FinalRegisteredCourses}
          />
          <Route exact path="/form-b" component={FormB} />
          <Route exact path="/ca-result" component={CA} />
          <Route exact path="/final-result" component={FinalResult} />
          <Route exact path="/test" component={Test} />


          <Route exact path="/admin-faculty" component={Faculty} />
          <Route exact path="/admin-password" component={Password} />
          <Route exact path="/admin-aim" component={Aim} />
          <Route exact path="/admin-upload-courses" component={UploadCourses} />


          <ProtectedRoutes exact path="/dashboard" component={Dashboard} auth={auth}/>

          <Route exact path="*" component={PageNotFound}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
