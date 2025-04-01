import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "@/components";
import { AuthPage, HomePage } from "@/pages";
import OverviewPage from "./pages/overview-page/OverviewPage";
import SchedulePage from "./pages/overview-page/SchedulePage";

function App() {
  return (
    <div className="bg-black">
      {/* NavBar */}
      <Navbar />

      {/* Pages */}
      <Routes>
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/overview" element={<OverviewPage/>} />
        <Route path="/schedule" element={<SchedulePage/>} />
      </Routes>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}

export default App;
