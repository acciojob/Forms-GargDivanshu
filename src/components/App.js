import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import FormState from "./FormState";
import FormRef from "./FormRef";
import Form from "./Form";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {" "}
              Go to either
              <br />
              <Link to="/form" id="form-link">
                Form layout
              </Link>
              <br />
              <Link to="/form-ref" id="form-ref-link">
                {" "}
                Form using ref
              </Link>
              <br />
              or
              <br />
              <Link to="/form-state" id="form-state-link">
                Form using state
              </Link>
            </div>
          }
        ></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/form-ref" element={<FormRef />}></Route>
        <Route path="/form-state" element={<FormState />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;