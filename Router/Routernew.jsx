import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import List from "./router 2";
import Classscomponent from "./router 1";

function Routingcomponent() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Classscomponent" element={<Classscomponent />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default Routingcomponent;
