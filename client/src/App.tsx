import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "@/components";
import { AuthPage, HomePage, TournamentDetailsPage, TournamentPage } from "@/pages";

function App() {
  const location = useLocation();
  const hideNavFooter = location.pathname === "/signup";
  return (
    <div className="bg-black">
      {/* NavBar */}
      {!hideNavFooter && <Navbar />}

      {/* Pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<AuthPage />} />
        <Route path="/tournaments" element={<TournamentPage />} />
        <Route path="/tournamentDetails" element={<TournamentDetailsPage />} />
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
