import { BrowserRouter, Routes, Route } from "react-router-dom";
import Session1 from "./page/session1";
import Session2 from "./page/session2";
function RouteConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/s1" element={<Session1 />} />
        <Route path="/s2" element={<Session2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteConfig;
