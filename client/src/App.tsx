import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "@/components";
import { AuthPage, HomePage, TournamentDetailsPage, TournamentPage } from "@/pages";

function App() {
  return (
    <div className="bg-black">
      {/* NavBar */}
      <Navbar />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<AuthPage />} />
        <Route path="/tournaments" element={<TournamentPage />} />
        <Route path="/tournamentDetails" element={<TournamentDetailsPage />} />
      </Routes>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}

export default App;
