import React from "react";
import Navbar from './Components/Navbar'
import CodeForInterview from "./Components/CodeForInterview";
import AllUsers from "./Components/AllUsers";
import AddUser from "./Components/AddUser";
import NotFound from "./Components/NotFound";
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import EditUser from "./Components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/" component={CodeForInterview} />
          <Route exact path="/all" component={AllUsers} />
          <Route exact path="/add" component={AddUser} />
          <Route exact path="/edit/:id" component={EditUser} />
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
