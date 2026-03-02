import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import GalleryPage from "./pages/gallery";

function HomePage() {
  return (
    <>
      <Navigation />
      <div style={{ padding: 24 }}>
        <h1>Главная</h1>
        <p>Это главная страница.</p>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}