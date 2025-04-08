import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";

const Main = () => (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<Navigate to="/"/>} />
        </Route>
    </Routes>
)

export default Main