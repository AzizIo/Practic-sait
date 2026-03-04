import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import GalleryPage from "./pages/GalleryPage";
import ContactsPage from "./pages/ContactsPage";
import CentersPage from "./pages/CentersPage";
import WhyUs from "./pages/WhyUsPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="appShell">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/centers" element={<CentersPage />} />
          <Route path="/why-us" element={<WhyUs />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}