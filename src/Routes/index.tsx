import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Tests from "../Pages/Tests";
import Menu from "../Pages/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        {/* Página de erro 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
