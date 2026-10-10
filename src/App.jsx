import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";

// Case studies and the studio page carry most of the imagery, so they are
// split out of the initial bundle; the home page is where most visitors land.
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const StudioPage = lazy(() => import("./pages/StudioPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const RouteFallback = () => <div className="min-h-screen bg-paper" />;

function App() {
  return (
    <Router>
      <a
        href="#main"
        className="fixed top-3 left-3 z-50 -translate-y-20 rounded-[3px] bg-ink px-4 py-3 text-[15px] text-paper transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/iteminder" element={<StudioPage />} />
          <Route path="/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
