import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { SwagPage } from "./pages/swag";
import { WhitepaperPage } from "./pages/whitepaper";
import { DevelopersPage } from "./pages/developers";
import { FaqPage } from "./pages/faq";

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/whitepaper" element={<WhitepaperPage />} />
        <Route path="/developer" element={<DevelopersPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/swag" element={<SwagPage />} />
    </Routes>
  );
};
