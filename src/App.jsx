import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import GalleryPage from "./pages/GalleryPage.jsx"
import HomePage from "./pages/HomePage.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"
import OfferingsPage from "./pages/OfferingsPage.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="offerings" element={<OfferingsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="visit" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
