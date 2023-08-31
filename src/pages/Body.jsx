import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Presentation from "./Presentation";
import LoginConnect from "./LoginConnect";
import Connection from "./Connection";
import CreateAccount from "./CreateAccount";
import Home from "./Home";
import Menus from "./Menus";
import Tuesday from "./Tuesday";
import Thursday from "./Thursday";
import Friday from "./Friday";
import CreateMenu from "./CreateMenu";
import Contact from "./Contact";
import Profile from "./Profile";

export default function Body() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Presentation />} />
          <Route path="/loginconnect" element={<LoginConnect />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu-monday" element={<Menus />} />
          <Route path="/menu-tuesday" element={<Tuesday />} />
          <Route path="/menu-thursday" element={<Thursday />} />
          <Route path="/menu-friday" element={<Friday />} />
          <Route path="/createmenu" element={<CreateMenu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}
