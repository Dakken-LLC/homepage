import { Route, Routes } from "react-router";
import Header from "./components/Header";
import BusinessPage from "./pages/BusinessPage";
import HomePage from "./pages/HomePage";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/business" element={<BusinessPage />} />
      </Routes>
    </div>
  );
}
