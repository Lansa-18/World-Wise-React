import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import Footer from "./Footer";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      {/* Using the Outlet component to render the nested route of cities */}
      <Outlet />

      <Footer />
    </div>
  );
}

export default Sidebar;
