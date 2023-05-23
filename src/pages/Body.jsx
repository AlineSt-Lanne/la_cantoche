import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Presentation from "./Presentation";
import LoginConnect from "./LoginConnect";
import Connection from "./Connection";
import CreateAccount from "./CreateAccount";

export default function Body() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Presentation />} />
          <Route path="/loginconnect" element={<LoginConnect />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/createaccount" element={<CreateAccount />} />
        </Routes>
      </Router>
    </div>
  );
}
