import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import BusinessPage from "./pages/Business";
import HomePage from "./pages/Home";
import VisionPage from "./pages/Vision";
import ContactPage from "./pages/Contact";
import MemberPage from "./pages/Member";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/member" element={<MemberPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
      <Footer />
    </div>
  );
}
