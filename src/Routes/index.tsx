import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Tests from "../Pages/Tests";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        {/* Página de erro 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
