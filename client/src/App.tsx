import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "@/components";
import { AuthPage, HomePage } from "@/pages";
import OverviewPage from "./pages/overview-page/OverviewPage";
import SchedulePage from "./pages/overview-page/SchedulePage";

function App() {
  const location = useLocation();
  const hideNavFooter = location.pathname === "/signup";
  return (
    <div className="bg-black">
      {/* NavBar */}
      {!hideNavFooter && <Navbar />}

      {/* Pages */}
      <Routes>
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/overview" element={<OverviewPage/>} />
        <Route path="/schedule" element={<SchedulePage/>} />
      </Routes>

      {/* Footer */}
      {!hideNavFooter && (
        <div className="bg-black">
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
