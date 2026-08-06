import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";

// Case study pages carry all the project data and imagery, so they are split
// out of the initial bundle — the home page is what most visitors land on.
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const RouteFallback = () => <div className="min-h-screen bg-[#0f0a2a]" />;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
