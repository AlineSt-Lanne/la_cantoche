import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Presentation from "./Presentation";

export default function Body() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Presentation />} />
        </Routes>
      </Router>
    </div>
  );
}
