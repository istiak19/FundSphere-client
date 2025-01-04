import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MainLayout = () => {
    const { isDarkMode } = useContext(AuthContext)
    return (
        <div data-theme={isDarkMode ? 'dim' : 'light'}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;