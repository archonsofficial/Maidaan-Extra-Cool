import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "@/components";
import { HomePage } from "@/pages";

function App() {
  return (
    <div className="bg-black">
      {/* NavBar */}
      <Navbar />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}

export default App;
