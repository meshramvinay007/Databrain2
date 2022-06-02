// import "./App.css";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Registration from "./components/Registration";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {
  const [registered, setRegistered] = useState(false);
  const [data, setData] = useState({
    enteredName: "",
    enteredEmail: "",
    enteredPassword: "",
    enteredConfirmPassword: "",
    enteredPhoneNumber: "",
  });

  console.log(data);
  return (
    <div className="App">
      <div className="row ">
        <Switch>
          {!registered && (
            <Route path="/" exact>
              <Registration setRegistered={setRegistered} setData={setData}/>
            </Route>
          )}
          {registered && (
            <Route path="/dashboard">
              <Dashboard data={data} />
            </Route>
          )}
          <Route path={"*"}>
            {!registered ? (
              <Redirect to="/" />
            ) : (
              <>
                <center>
                  <pre>404</pre>
                  <h1>Not Found</h1>
                </center>
              </>
            )}
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
