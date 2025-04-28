import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Import components
import HomePage from "./Components/HomePage";
import Solutions from "./Components/Solutions";
import AboutUs from "./Components/About";
import Mission from "./Components/Mission";
import ChallengesInMedicalTourism from "./Components/ChallengesInMedicalTourism";
import FAQ from "./Components/FAQ";
import ContactUs from "./Components/Contact";
import Login from "./Components/Login";

// Import policy pages:
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import PricingPolicy from "./pages/PricingPolicy";
import EditorialPolicy from "./pages/EditorialPolicy";
import GetStarted from "./Components/GetStarted";
import SignUp from "./Components/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white">
        <Navbar />

        <Routes>
          {/* Homepage Route - Render all these components on the root path */}
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <Solutions />
                <AboutUs />
                <Mission />
                <ChallengesInMedicalTourism />
                <FAQ />
                <ContactUs />
              </>
            }
          />

          {/* Policy Routes */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/pricing-policy" element={<PricingPolicy />} />
          <Route path="/editorial-policy" element={<EditorialPolicy />} />

          {/* Login Route */}
          <Route path="/login" element={<Login />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
